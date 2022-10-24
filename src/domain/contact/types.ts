import { Contact } from "../../types/Contact";
import { KeyPaths, WithId } from "../../types/utils";

export interface ContactDomain {
  getContacts: () => Promise<WithId<Contact>[]>;
  addContact: (contactInfo: Contact) => Promise<void>;
  editContact: (
    id: string,
    newContactInfo: Partial<WithId<Contact>>
  ) => Promise<void>;
  removeContact: (id: string) => Promise<void>;
  searchContacts: (
    field: KeyPaths<Contact>,
    value: any
  ) => Promise<WithId<Contact>[]>;
  getContact: (id: string) => Promise<WithId<Contact> | null>;
}