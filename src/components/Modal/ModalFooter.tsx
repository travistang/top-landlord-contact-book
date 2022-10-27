import React from 'react';
import Button, { ButtonProps } from '../Input/Button';

type Props = {
  left?: ButtonProps;
  right?: ButtonProps;
}
export default function ModalFooter({ left, right }: Props) {
  return (
    <div className="grid grid-cols-2">
      <div className="flex items-center justify-start">
        {left && <Button {...left} />}
      </div>
      <div className="flex items-center justify-end">
        {right && <Button {...right} />}
      </div>
    </div>
  )
}