import React from "react";
import classNames from "classnames";
import { format } from "date-fns";

type Props = {
  date: number;
  selected?: boolean;
  marked?: boolean;
  onSelect: () => void;
};

export default function DayCell({ date, selected, onSelect, marked }: Props) {
  return (
    <span
      className={classNames(
        "relative rounded-full aspect-square flex items-center justify-center text-sm opacity-80",
        selected && "font-bold bg-primary",
        marked && !selected && "fond-bold bg-primary bg-opacity-50"
      )}
      onClick={onSelect}
    >
      {format(date, "d")}
    </span>
  );
}
