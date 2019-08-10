import React from "react";

export default function Box({ box, onClick }) {
  const colorClass = box.color && ` bg-${box.color}-400`;
  return <div className={"cursor-pointer h-20 lg:h-40 lg:w-40 md:h-40 md:w-40 w-20" + colorClass} onClick={onClick} />;
}
