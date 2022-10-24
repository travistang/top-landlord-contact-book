import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SectionHeader from '../SectionHeader';

type Props = {
  opened: boolean;
  onClose: () => void;
  title?: string;
}
export default function Modal({ opened, onClose, title }: Props) {

  if (!opened) return null;

  return (
    <div onClick={onClose} className="fixed inset-0 backdrop-blur-lg flex items-stretch justify-end">
      <div onClick={e => e.stopPropagation()} className="rounded-t-xl shadow-lg">
        <div className="flex items-center justify-between">
          <SectionHeader title={title ?? ''} />
          <FontAwesomeIcon icon="times" />
        </div>
      </div>
    </div>
  )
}