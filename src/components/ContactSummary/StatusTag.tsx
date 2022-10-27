import classNames from "classnames";
import React from "react";
import { ContactStatus } from "../../types/Contact";
import { prettifyString } from "../../utils/String";

type Props = {
  status: ContactStatus;
  className?: string;
};

const StatusColorMap: Partial<Record<ContactStatus, string>> = {
  [ContactStatus.ResponseRequired]: "rgb(254, 215, 102)",
  [ContactStatus.WaitingTillAppointment]: "rgb(76, 181, 67)",
  [ContactStatus.Rejected]: "rgb(225, 46, 75)",
};

export default function StatusTag({ status, className }: Props) {
  return (
    <div
      className={classNames(
        "rounded-full px-2 py-1 text-xs font-bold whitespace-nowrap",
        className
      )}
      style={{ background: StatusColorMap[status] ?? "rgb(24, 31, 41)" }}
    >
      {prettifyString(status)}
    </div>
  );
}
