import React from "react";
import { useRecoilValue } from "recoil";
import {
  createEditContactAtom,
  useSetContactAtomValue,
} from "../../../atoms/createEditContactAtom";
import { Contact, ContactStatus } from "../../../types/Contact";
import { KeyPaths } from "../../../types/utils";
import { getByKeyPath } from "../../../utils/Object";
import { prettifyString } from "../../../utils/String";
import DatePicker from "../../Input/DatePicker";
import DropdownInput from "../../Input/DropdownInput";
import TextInput, { InputType } from "../../Input/TextInput";
import RatingForm from "./RatingForm";

export default function ExposeForm() {
  const createEditContactValue = useRecoilValue(createEditContactAtom);
  const updateField = useSetContactAtomValue();

  const getField = (field: KeyPaths<Contact>) =>
    getByKeyPath(createEditContactValue, field);
  console.log({ createEditContactValue });
  return (
    <div className="grid grid-cols-6 gap-2">
      <TextInput
        value={getField("adTitle")}
        onChange={updateField("adTitle")}
        label="Exposé name"
        className="col-span-3"
      />
      <DatePicker
        label="Contacted at"
        className="col-span-3"
        date={getField("contactedAt")}
        onChange={updateField("contactedAt")}
      />
      <DropdownInput
        label="Contact status"
        className="col-span-full"
        value={getField("status")}
        options={Object.values(ContactStatus).map((status) => ({
          label: prettifyString(status),
          value: status,
        }))}
        onChange={updateField("status")}
      />
      <RatingForm
        value={getField("myRating")}
        onChange={updateField("myRating")}
        className="col-span-full py-2"
      />
      <TextInput
        label="url"
        value={getField("url")}
        onChange={updateField("url")}
        className="col-span-full"
      />
      <TextInput
        label="remarks"
        inputType={InputType.TextArea}
        value={getField("remarks")}
        onChange={updateField("remarks")}
        inputClassName="bg-background h-32 p-2"
        className="col-span-full h-32"
      />
    </div>
  );
}
