import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {
  return (
    <header className="h-14 flex-shrink-0 px-2 flex items-center bg-gray-200 w-full">
      <FontAwesomeIcon icon="contact-book" />
      <span className="flex-1">Landlord Contact book</span>
      <button className="bg-primary text-font rounded-full h-12 flex items-center px-4 py-1">
        <FontAwesomeIcon icon="plus" />
        Add
      </button>
    </header>
  );
}
