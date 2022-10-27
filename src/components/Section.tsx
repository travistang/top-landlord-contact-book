import React from 'react';
import classNames from 'classnames';


type Props = {
  title?: string;
  className?: string;
  children: React.ReactNode;
};

export default function Section({ title, children, className}: Props) {
  return (
    <div className={classNames('rounded-lg p-2', className)}>
      {title && (
        <div className="font-bold mb-8">{title}</div>
      )}
      {children}
    </div>
  )
}