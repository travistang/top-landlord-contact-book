import React from "react";
import toast from 'react-hot-toast';
import { useRecoilValue } from "recoil";
import Modal from "..";
import {
  createEditContactAtom,
  useCloseModal,
} from "../../../atoms/createEditContactAtom";
import ContactDomain from "../../../domain/contact";
import { Contact } from "../../../types/Contact";
import { withToastError } from "../../../utils/Toast";
import ModalFooter from "../ModalFooter";
import CreateEditContactForm from "./CreateEditContactForm";

export default function CreateEditContactModal() {
  const createEditingContact = useRecoilValue(createEditContactAtom);
  const closeModal = useCloseModal();
  const isEditing = !!createEditingContact?.id;
  const onCreateContact = async () => {
    if (!isEditing) {
      await ContactDomain.addContact(createEditingContact as Contact);
      toast.success('Contact created');
      closeModal();
      return;
    }
    await ContactDomain.editContact(createEditingContact!.id!, createEditingContact);
    toast.success('Contact updated');
    closeModal();
  }

  const onDeleteContact = async () => {
    const id = createEditingContact?.id;
    if (!id) return;
    await ContactDomain.removeContact(id);
    toast.success('Contact deleted');
    closeModal();
  }

  return (
    <Modal
      title={isEditing ? "Updating contact" : "Create Contact"}
      opened={!!createEditingContact}
      onClose={closeModal}
    >
      <CreateEditContactForm />
      <ModalFooter
        left={isEditing ? {
          onClick: withToastError(onDeleteContact, "Failed to delete contact"),
          icon: 'trash',
          children: 'Delete',
          className: 'bg-danger h-12 my-4 px-8 rounded-full',
        }: undefined}
        right={{
          onClick: withToastError(onCreateContact, `Failed to ${isEditing ? 'Update' : 'add'} contact`),
          icon: 'check-circle',
          children: isEditing ? "Udpate" : 'Create',
          className: 'flex-row-reverse bg-transparent h-12 my-4 px-8 rounded-full bg-success',
        }}
      />
    </Modal>
  );
}
