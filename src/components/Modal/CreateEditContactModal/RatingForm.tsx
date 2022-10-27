import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core'

import { ContactRating } from '../../../types/Contact';
import MultipleOptionInput, { Option } from '../../Input/MultipleOptionInput';

const RatingIcon: Record<ContactRating, IconProp> = {
  [ContactRating.Dislike]: 'face-frown',
  [ContactRating.Neutral]: 'face-meh-blank',
  [ContactRating.Like]: 'face-grin-wide',
  [ContactRating.VeryLike]: 'face-laugh-beam',
}

const contactRatingOptions = Object.entries(RatingIcon).map<Option<ContactRating>>(([rating, icon]) => ({
  value: rating as ContactRating,
  icon: icon as IconProp
}));

type Props = {
  value: ContactRating;
  onChange: (rating: ContactRating) => void;
  className?: string;
}
export default function RatingForm({ value, onChange, className}: Props) {
  return (
    <MultipleOptionInput
      label="Rating"
      className={className}
      options={contactRatingOptions}
      value={value}
      onChange={onChange}
    />
  );
}