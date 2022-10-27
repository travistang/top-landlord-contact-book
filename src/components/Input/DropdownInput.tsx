import classNames from "classnames";
import React from "react";
import BaseInput, { BaseInputProps } from "./BaseInput";

type Props<T> = BaseInputProps & {
  value: T;
  inputClassName?: string;
  options: {
    label: string;
    value: T;
  }[];
  onChange: (value: T) => void;
};

export default function DropdownInput<T>({
  value,
  options,
  onChange,
  inputClassName,
  ...baseInputProps
}: Props<T>) {
  return (
    <BaseInput {...baseInputProps}>
      <select
        className={classNames(
          "rounded-lg",
          inputClassName ?? "bg-background h-10 flex px-2 items-center"
        )}
        onChange={(e) => onChange(e.target.value as T)}
      >
        {options.map(({ value: optionValue, label }) => (
          <option
            key={JSON.stringify(optionValue)}
            selected={value === optionValue}
            value={optionValue as string}
          >
            {label}
          </option>
        ))}
      </select>
    </BaseInput>
  );
}
