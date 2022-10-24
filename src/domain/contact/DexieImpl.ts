import Dexie, { Table } from "dexie";
import { Contact } from "../../types/Contact";
import { WithId } from "../../types/utils";
import { ContactDomain } from "./types";

class DexieContactDomain extends Dexie implements ContactDomain {
  contacts!: Table<WithId<Contact>>;

  constructor() {
    super("landlordContactDatabase");
    this.version(1).stores({
      contacts: "++id,adTitle,address",
    });
  }

  async getContact(id: string) {
    return (await this.contacts.get(id)) ?? null;
  }

  async removeContact(id: string) {
    return await this.contacts.delete(id);
  }

  async editContact(id: string, data: Partial<WithId<Contact>>) {
    await this.contacts.update(id, data);
  }
}

export default new DexieContactDomain();
