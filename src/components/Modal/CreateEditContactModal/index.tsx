import React from "react";
import { useRecoilValue } from "recoil";
import Modal from "..";
import {
  createEditContactAtom,
  useCloseModal,
} from "../../../atoms/createEditContactAtom";

export default function CreateEditContactModal() {
  const createEditingContact = useRecoilValue(createEditContactAtom) ?? {};
  const closeModal = useCloseModal();
  const isEditing = !!createEditingContact.id;
  return (
    <Modal
      title={isEditing ? "Updating contact" : "Create Contact"}
      opened={!!createEditingContact}
      onClose={closeModal}
    >
      WIP
    </Modal>
  );
}
