import React from "react";

export default function Box({ box, onClick }) {
  const colorClass = box.color && ` bg-${box.color}-400`;
  return (
    <div
      className={"h-40 w-40 cursor-pointer" + colorClass}
      onClick={onClick}
    />
  );
}
