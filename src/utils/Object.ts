import { Contact } from "../types/Contact";
import { DeepValueType, KeyPaths } from "../types/utils";

export const getByKeyPath = (contact: Contact, path: KeyPaths<Contact>) => {
  const parts = path.split('.');
  return parts.reduce<DeepValueType<Contact> | null>((result, key) => {
    if (!result) return null;
    return result[key as keyof typeof result] ?? null;
  }, contact);
}