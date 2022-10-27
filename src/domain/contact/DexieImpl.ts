import Dexie, { Table } from "dexie";
import { Contact } from "../../types/Contact";
import { KeyPaths, WithId } from "../../types/utils";
import { caseInsensitiveMatch } from "../../utils/String";
import { Observable, Subscriber } from "../observable";
import { ContactDomain } from "./types";

export enum ContactDomainEvent {
  ContactCreated = "contact-created",
  ContactRemoved = "contact-removed",
  ContactUpdated = "contact-updated",
}

class DexieContactDomain
  extends Dexie
  implements ContactDomain, Observable<WithId<Contact>, ContactDomainEvent>
{
  contacts!: Table<WithId<Contact>, string>;
  _subscribers: Record<
    string,
    Subscriber<WithId<Contact>, ContactDomainEvent>
  > = {};

  constructor() {
    super("landlordContactDatabase");
    this.version(3).stores({
      contacts: "++id,adTitle,address,contactedAt,myRating,status",
    });
  }

  private notify(event: ContactDomainEvent, payload: WithId<Contact>) {
    for (const subscriber of Object.values(this._subscribers)) {
      subscriber.onEvent(event, payload);
    }
  }

  subscribe(subscriber: Subscriber<WithId<Contact>, ContactDomainEvent>) {
    const randomId = crypto.randomUUID();
    this._subscribers[randomId] = subscriber;
    return randomId;
  }

  unsubscribe(id: string) {
    delete this._subscribers[id];
  }

  async getContact(id: string) {
    return (await this.contacts.get(id)) ?? null;
  }

  async removeContact(id: string) {
    const removingData = await this.getContact(id);
    if (!removingData) return;
    await this.contacts.delete(id);
    this.notify(ContactDomainEvent.ContactRemoved, removingData);
  }

  async editContact(id: string, data: Partial<WithId<Contact>>) {
    const existingData = await this.contacts.get(id);
    if (!existingData) {
      return;
    }
    const updatedData: WithId<Contact> = {
      ...existingData,
      ...data,
      updatedAt: Date.now(),
    };
    await this.contacts.update(id, updatedData);
    this.notify(ContactDomainEvent.ContactUpdated, updatedData);
  }

  async getContacts() {
    return this.contacts.toArray();
  }

  async addContact(data: Contact) {
    const newData = {
      ...data,
      id: crypto.randomUUID(),
    };
    await this.contacts.add(newData);
    this.notify(ContactDomainEvent.ContactCreated, newData);
  }

  async searchContacts(field: KeyPaths<Contact>, value: any) {
    return this.contacts
      .filter((contact) => {
        const fieldValue = DexieContactDomain.getByKeyPath(contact, field);
        switch (typeof fieldValue) {
          case "string":
            return caseInsensitiveMatch(fieldValue, value as string);
          case "number":
            return fieldValue === (value as number);
          default:
            return true;
        }
      })
      .toArray();
  }
}

export default new DexieContactDomain();
