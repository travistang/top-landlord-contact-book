import React from 'react';
import classNames from 'classnames';
import BaseInput, { BaseInputProps } from './BaseInput';
import { toDateInputFormat } from '../../utils/Date';

type Props = BaseInputProps & {
  date: number;
  onChange: (newDate: number) => void;
  inputClassName?: string;
}
export default function DatePicker({ label, className, date, onChange, inputClassName}: Props) {
  return (
    <BaseInput label={label} className={className}>
      <div className={classNames('border-font px-2 border-2 rounded-lg flex items-cente h-12 w-full', inputClassName)}>
        <input
          type="date"
          onChange={e => onChange(e.target.valueAsNumber)}
          value={toDateInputFormat(date)}
          className="bg-background"
        />
      </div>
    </BaseInput>
  )
}