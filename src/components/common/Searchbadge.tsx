import React from "react";
import { Badge } from "../ui/badge";
import { X } from "lucide-react";
import { CustomebadgeProps } from "./Categorybadge";

export interface searchbadgeProps {
  name: string;
  color: string;
  filter?: CustomebadgeProps;
  emoji: string;
  handleRemoveFilter?: Function;
  option: string;
}

const Searchbadge = ({
  name,
  color,
  handleRemoveFilter,
  emoji,
  filter,
  option,
}: searchbadge) => {
  return option === "search" ? (
    <Badge
      className="flex items-center bg-gray-200 text-white px-2 py-1 rounded-full mr-2"
      style={{ backgroundColor: color }}
    >
      <span className="mr-1">{emoji}</span>
      <span className="mr-1">{name}</span>
      {handleRemoveFilter && (
        <X
          size={16}
          className="cursor-pointer"
          onClick={() => handleRemoveFilter(filter)}
        />
      )}
    </Badge>
  ) : (
    <span
      style={{ backgroundColor: color }}
      className="flex justify-center items-center text-xs px-2 rounded-lg font-semibold text-white py-1 "
    >
      <span className="mr-1">{emoji}</span>
      <span>{name}</span>
    </span>
  );
};

export default Searchbadge;
