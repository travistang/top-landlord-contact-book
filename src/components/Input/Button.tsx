import React from "react";
import classNames from 'classnames';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export type ButtonProps = {
  children?: string;
  icon?: IconProp;
  onClick: () => void;
  className?: string;
  type?: "button" | "submit";
};

export default function Button({ onClick, children, icon, type = 'button', className }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames("rounded-full flex items-center px-4 py-1 gap-2", className ?? "bg-primary text-font  h-10")}
    >
      {icon && <FontAwesomeIcon icon={icon} />}
      {children}
    </button>
  );
}