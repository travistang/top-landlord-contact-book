import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionHeader from "../SectionHeader";

type Props = {
  opened: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
};
export default function Modal({
  opened,
  onClose,
  title,
  description,
  children,
}: Props) {
  if (!opened) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 backdrop-blur-lg flex flex-col items-stretch justify-end"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="rounded-t-xl shadow-lg bg-background-secondary px-2"
      >
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center justify-center">
            <SectionHeader title={title ?? ""} />
            {description && <span className="text-xs">{description}</span>}
          </div>
          <FontAwesomeIcon icon="times" onClick={onClose} />
        </div>
        {children}
      </div>
    </div>
  );
}
