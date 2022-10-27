import React from 'react';
import classNames from 'classnames';

export type BaseInputProps = {
  label?: string;
  className?: string;
}
type Props = BaseInputProps & {
  children: React.ReactNode;
};

export default function BaseInput({ label, children, className}: Props) {
  return (
    <div className={classNames("flex flex-col gap-2", className)}>
      <label className='text-sm'>{label}</label>
      {children}
    </div>
  )
}