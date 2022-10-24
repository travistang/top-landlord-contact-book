import { Contact } from "../../types/Contact";
import { KeyPaths, WithId } from "../../types/utils";
import { getByKeyPath } from "../../utils/Object";
import { caseInsensitiveMatch } from "../../utils/String";
import { ContactDomain } from "./types";

class MemoryContactDomain implements ContactDomain {
  _contacts: WithId<Contact>[] = [];
  async getContact(id: string): Promise<WithId<Contact> | null> {
    return this._contacts.find((contact) => contact.id === id) ?? null;
  }

  async getContacts(): Promise<WithId<Contact>[]> {
    return this._contacts;
  }

  async removeContact(id: string): Promise<void> {
    this._contacts = this._contacts.filter((con) => con.id !== id);
  }

  async editContact(
    id: string,
    newContactInfo: Partial<Contact>
  ): Promise<void> {
    const existingRecord = await this.getContact(id);
    if (!existingRecord) return;
    const { id: _, ...updateInfo } = newContactInfo as Partial<WithId<Contact>>;

    const updatedRecord = {
      ...existingRecord,
      ...updateInfo,
    };
    this._contacts = this._contacts.map((contact) => {
      if (contact.id !== id) return contact;
      return updatedRecord;
    });
  }

  async addContact(contact: Contact) {
    const id = crypto.randomUUID();
    const newRecord: WithId<Contact> = {
      id,
      ...contact,
    };
    this._contacts = [...this._contacts, newRecord];
  }

  async searchContacts(field: KeyPaths<Contact>, value: any) {
    return this._contacts.filter((contact) => {
      const fieldValue = getByKeyPath(contact, field);
      switch (typeof fieldValue) {
        case "string":
          return caseInsensitiveMatch(fieldValue, value as string);
        case "number":
          return fieldValue === (value as number);
        default:
          return true;
      }
    });
  }
}

export default new MemoryContactDomain();
