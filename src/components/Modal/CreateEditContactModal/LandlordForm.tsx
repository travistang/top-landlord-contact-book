import React from 'react';
import { useRecoilValue } from 'recoil';
import { createEditContactAtom, useSetContactAtomValue } from '../../../atoms/createEditContactAtom';
import { getByKeyPath } from '../../../utils/Object';
import TextInput from '../../Input/TextInput';

export default function LandlordForm() {
  const createEditContactValue = useRecoilValue(createEditContactAtom);
  const updateField = useSetContactAtomValue();

  return (
    <div className="grid grid-cols-6 gap-2">
      <TextInput
        value={getByKeyPath(createEditContactValue, "landlord.firstName")}
        onChange={updateField("landlord.firstName")}
        label="First Name"
        className="col-span-3"
      />
      <TextInput
        value={getByKeyPath(createEditContactValue, "landlord.lastName")}
        onChange={updateField("landlord.lastName")}
        label="Last Name"
        className="col-span-3"
      />
      <TextInput
        value={getByKeyPath(createEditContactValue, "landlord.salutation")}
        onChange={updateField("landlord.salutation")}
        label="Salutation"
        className="col-span-2"
      />
      <TextInput
        value={getByKeyPath(createEditContactValue, "landlord.phoneNumber")}
        onChange={updateField("landlord.phoneNumber")}
        label="Phone number"
        className="col-span-4"
      />
      <TextInput
        value={getByKeyPath(createEditContactValue, "landlord.email")}
        onChange={updateField("landlord.email")}
        label="Email"
        className="col-span-full"
      />
    </div>
  )
}
