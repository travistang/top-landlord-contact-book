import React from 'react';
import { useRecoilValue } from 'recoil';
import { createEditContactAtom, useSetContactAtomValue } from '../../../atoms/createEditContactAtom';
import { getByKeyPath } from '../../../utils/Object';
import DatePicker from '../../Input/DatePicker';
import TextInput, { InputType } from '../../Input/TextInput';
import RatingForm from './RatingForm';

export default function ExposeForm() {
  const createEditContactValue = useRecoilValue(createEditContactAtom);
  const updateField = useSetContactAtomValue();

  return (
    <div className="grid grid-cols-6 gap-2">
      <TextInput
        value={getByKeyPath(createEditContactValue, "adTitle")}
        onChange={updateField("adTitle")}
        label="Exposé name"
        className="col-span-3"
      />
      <DatePicker
        label="Contacted at"
        className="col-span-3"
        date={getByKeyPath(createEditContactValue, "contactedAt")}
        onChange={updateField("contactedAt")}
      />
      <RatingForm
        value={getByKeyPath(createEditContactValue, "myRating")}
        onChange={updateField("myRating")}
        className="col-span-full py-2"
      />
      <TextInput
        label="url"
        value={getByKeyPath(createEditContactValue, "url")}
        onChange={updateField("url")}
        className='col-span-full'
      />
      <TextInput
        label="remarks"
        inputType={InputType.TextArea}
        value={getByKeyPath(createEditContactValue, "remarks")}
        onChange={updateField("remarks")}
        inputClassName="bg-background h-32 p-2"
        className='col-span-full h-32'
      />
    </div>
  );
}