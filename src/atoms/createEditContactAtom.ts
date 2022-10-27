import { atom, useRecoilState, useSetRecoilState } from "recoil";
import { Contact, ContactRating, ContactStatus } from "../types/Contact";
import { KeyPaths, WithId } from "../types/utils";
import { deepUpdate } from "../utils/Object";

export type CreateEditContactAtomType = Partial<WithId<Contact>> | null;

export const createEditContactAtom = atom<CreateEditContactAtomType>({
  key: "contact-atom",
  default: null,
});

export const useCloseModal = () => {
  const setValue = useSetRecoilState(createEditContactAtom);
  return () => setValue(null);
};

export const useCreateContact = () => {
  const setValue = useSetRecoilState(createEditContactAtom);

  return () => {
    setValue({
      adTitle: "",
      url: "",
      contactedAt: Date.now(),
      updatedAt: Date.now(),
      requiredDocuments: [],
      status: ContactStatus.Pending,
      myRating: ContactRating.Neutral,
      landlord: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        salutation: "Mr.",
      },
      offer: {
        size: 0,
        address: "",
        coldRent: 0,
        warmRent: 0,
        hasParkingSlot: false,
        hasBuildInKitchen: false,
      },
    });
  };
};

export const useSetContactAtomValue = () => {
  const [, setAtomValue] = useRecoilState(createEditContactAtom);

  return (field: KeyPaths<CreateEditContactAtomType>) =>
    (value: any) => {
      setAtomValue((atomValue) => deepUpdate(atomValue, field, value));
    };
};
