import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCreateContact } from "../atoms/createEditContactAtom";

export default function Header() {
  const createContact = useCreateContact();
  return (
    <header className="flex-shrink-0 px-2 py-4 flex items-center bg-gray-200 w-full">
      <FontAwesomeIcon icon="contact-book" className="mr-2" />
      <span className="flex-1">Contact Book</span>
      <button
        type="button"
        onClick={createContact}
        className="bg-primary text-font rounded-full h-10 flex items-center px-4 py-1 gap-2"
      >
        <FontAwesomeIcon icon="plus" />
        Add
      </button>
    </header>
  );
}
