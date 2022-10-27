import React from 'react';
import classNames from 'classnames';
import BaseInput from './BaseInput';

export enum InputType {
  Text = 'text',
  TextArea = 'textarea',
  Number = 'digit'
};

type NumberInputProps = {
  inputType: InputType.Number;
  value: number;
  onChange: (n: number) => void;
}
type TextInputProps = {
  inputType?: Exclude<InputType, InputType.Number>;
  value: string;
  onChange: (text: string) => void;
};
type Props = {
  inputType?: InputType;
  label?: string;
  className?: string;
  inputClassName?: string;
} & (NumberInputProps | TextInputProps);

export default function TextInput({
  inputType = InputType.Text,
  value,
  onChange,
  label,
  className,
  inputClassName
}: Props) {

  const onChangeByType = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    switch (inputType) {
      case InputType.Number:
        (onChange as (n: number) => void)((e as React.ChangeEvent<HTMLInputElement>).target.valueAsNumber);
        break;
      default:
        (onChange as (text: string) => void)(e.target.value);
    }
  }
  return (
    <BaseInput label={label} className={className}>
      {inputType === InputType.TextArea ?
        (<textarea
          value={value}
          className={classNames("resize-none px-2 rounded-lg", inputClassName ?? "bg-background-secondary h-36")}
          onChange={onChangeByType}
        />) : (
          <input
            value={value}
            className={classNames("border-font px-2 border-2 outline-none rounded-lg", inputClassName ?? "h-12 bg-background")}
            onChange={onChangeByType}
          />
        )}
    </BaseInput>
  );
}