import { useRecoilValue } from 'recoil';
import { contactAtom } from '../../atoms/contact';
import { Contact } from "../../types/Contact";
import { WithId } from "../../types/utils";
import ContactDomain from "./MemoryImpl";

export default ContactDomain;

export function useContactDomainFilter(filterFn: (contact: WithId<Contact>) => boolean) {
  const allContacts = useRecoilValue(contactAtom);
  return allContacts?.filter(filterFn);
}