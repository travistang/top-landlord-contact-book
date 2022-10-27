import React from 'react';
import { useRecoilValue } from 'recoil';
import { createEditContactAtom, useSetContactAtomValue } from '../../../atoms/createEditContactAtom';
import { getByKeyPath } from '../../../utils/Object';
import TextInput, { InputType } from '../../Input/TextInput';

export default function PropertyForm() {
  const createEditContactValue = useRecoilValue(createEditContactAtom);
  const updateField = useSetContactAtomValue();

  return (
    <div className="grid grid-cols-6 gap-2">
      <TextInput
        value={getByKeyPath(createEditContactValue, "offer.address")}
        onChange={updateField("offer.address")}
        label="Address"
        className="col-span-full"
      />
      <TextInput
        inputType={InputType.Number}
        value={getByKeyPath(createEditContactValue, "offer.size")}
        onChange={updateField("offer.size")}
        label="Size (m2)"
        className="col-span-2"
      />
      <TextInput
        inputType={InputType.Number}
        value={getByKeyPath(createEditContactValue, "offer.coldRent")}
        onChange={updateField("offer.coldRent")}
        label="Cold rent(€)"
        className="col-span-2"
      />
      <TextInput
        inputType={InputType.Number}
        value={getByKeyPath(createEditContactValue, "offer.warmRent")}
        onChange={updateField("offer.warmRent")}
        label="Warm rent(€)"
        className="col-span-2"
      />
    </div>
  );
}
