import { atom, useRecoilState, useSetRecoilState } from "recoil";
import { Contact, ContactRating, ContactStatus } from "../types/Contact";
import { WithId } from "../types/utils";

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
      requiredDocuments: [],
      status: ContactStatus.Pending,
      myRating: ContactRating.Neutral,
      landlord: {
        firstName: "",
        lastName: "",
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

  return <T extends keyof Contact>(field: T) =>
    (value: Contact[T]) => {
      setAtomValue((atomValue) => ({
        ...atomValue,
        [field]: value,
      }));
    };
};
