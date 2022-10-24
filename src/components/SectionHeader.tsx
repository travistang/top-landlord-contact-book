import React from 'react';
import classNames from 'classnames';

type Props = {
  title: string;
  className?: string;
}
export default function SectionHeader({ title, className}: Props) {
  return (
    <span className={classNames("text-lg py-4", className)}>
      {title}
    </span>
  )
}