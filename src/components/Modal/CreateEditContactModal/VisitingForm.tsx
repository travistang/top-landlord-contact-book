import React from 'react';
import { useRecoilValue } from 'recoil';
import { createEditContactAtom, useSetContactAtomValue } from '../../../atoms/createEditContactAtom';
import { getByKeyPath } from '../../../utils/Object';
import DatePicker from '../../Input/DatePicker';
import TextInput from '../../Input/TextInput';


export default function VisitingForm() {
  const createEditContactValue = useRecoilValue(createEditContactAtom);
  const updateField = useSetContactAtomValue();

  return (
    <div className="grid grid-cols-6 gap-2">
      <DatePicker
        withTime
        className='col-span-4'
        date={getByKeyPath(createEditContactValue, "appointment.time")}
        onChange={updateField("appointment.time")}
        label="Time"
      />
      <TextInput
        className="col-span-full"
        value={getByKeyPath(createEditContactValue, "appointment.transport")}
        onChange={updateField("appointment.transport")}
        label="Transport (station, line etc.)"
      />
      <TextInput
        className="col-span-3"
        value={getByKeyPath(createEditContactValue, "appointment.ringingName")}
        onChange={updateField("appointment.ringingName")}
        label="Ringing Name"
      />
      <TextInput
        className="col-span-1"
        value={getByKeyPath(createEditContactValue, "appointment.floor")}
        onChange={updateField("appointment.floor")}
        label="Floor"
      />
    </div>
  )
}
