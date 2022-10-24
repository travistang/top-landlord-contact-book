import { atom } from 'recoil';
import ContactDomain from '../domain/contact';

export const contactAtom = atom({
  key: "contact",
  default: ContactDomain.getContacts(),
  effects: [],
})