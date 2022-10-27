import React, { useState } from 'react';
import { useRecoilValue } from "recoil";
import { createEditContactAtom } from '../../../atoms/createEditContactAtom';
import MultipleOptionInput, { Option } from '../../Input/MultipleOptionInput';
import ExposeForm from './ExposeForm';
import LandlordForm from './LandlordForm';
import PropertyForm from './PropertyForm';


enum CreateEditContactFormSection {
  Expose = 'expose',
  Landlord = 'landlord',
  Offer = 'offer'
}

const FormSectionConfig: Record<CreateEditContactFormSection, Option<CreateEditContactFormSection> & {
  FormComponent: React.FC;
}> = {
  [CreateEditContactFormSection.Expose]: {
    FormComponent: ExposeForm,
    value: CreateEditContactFormSection.Expose,
    icon: "contact-book",
    label: "Exposé"
  },
  [CreateEditContactFormSection.Landlord]: {
    FormComponent: LandlordForm,
    value: CreateEditContactFormSection.Landlord,
    icon: "user",
    label: "Landlord"
  },
  [CreateEditContactFormSection.Offer]: {
    FormComponent: PropertyForm,
    value: CreateEditContactFormSection.Offer,
    icon: "home",
    label: "Property"
  },
};

export default function CreateEditContactForm() {
  const createEditContactValue = useRecoilValue(createEditContactAtom);
  const [currentSection, setCurrentSection] = useState<CreateEditContactFormSection>(
    CreateEditContactFormSection.Expose
  );
  if (!createEditContactValue) {
    return null;
  }

  const { FormComponent } = FormSectionConfig[currentSection];

  return (
    <div className="flex flex-col gap-2 items-stretch">
      <MultipleOptionInput
        value={currentSection}
        onChange={setCurrentSection}
        options={Object.values(FormSectionConfig)}
        className="mb-4"
      />
      <FormComponent />
    </div>
  )
}