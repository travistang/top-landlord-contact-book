import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import BaseInput, { BaseInputProps } from './BaseInput';

export type Option<T> = {
  label?: string;
  icon?: IconProp;
  value: T;
}
type Props<T> = BaseInputProps & {
  value: T;
  onChange: (v: T) => void;
  className?: string;
  options: Option<T>[];
}
export default function MultipleOptionInput<T>({
  value,
  label,
  onChange,
  options,
  className
}: Props<T>) {
  return (
    <BaseInput label={label} className={className}>
      <div className="flex flex-nowrap rounded-lg border-2 border-font">
        {options.map((option) => (
          <span
            key={(option).label}
            onClick={() => onChange(option.value)}
            className={classNames(
              "px-2 gap-2 text-xs flex-1 text-font border-x first:rounded-l-lg last:rounded-r-lg border-font h-10 flex items-center justify-center",
              value === option.value && "border-primary bg-primary text-font"
            )}>
            {option.icon && <FontAwesomeIcon icon={option.icon} />}
            {option.label}
          </span>
        ))}
      </div>
    </BaseInput>
  );
}