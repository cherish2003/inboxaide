"use client";
import React from "react";

export interface CustomebadgeProps {
  name: string;
  color: string;
  emoji: string;
  count?: number;
  isCollapsed?: boolean;
}

const Customebadge = ({
  name,
  color,
  emoji,
  count,
  isCollapsed,
}: CustomebadgeProps) => {
  return (
    <div
      className="flex items-center justify-between text-white font-semibold text-xs sm:text-sm hover:bg-lightgrey p-1 rounded-lg group transition cursor-pointer data-[collapsed=true]:justify-center "
      data-collapsed={isCollapsed}
    >
      <div
        data-collapsed={isCollapsed}
        className="inline-flex md:p-[3px] rounded-lg data-[collapsed=true]:p-[5px]"
        style={{ backgroundColor: color }}
      >
        <span className="ml-[2px] text-sm ">{emoji}</span>
        <span
          data-collapsed={isCollapsed}
          className="ml-1 sm:ml-2 mr-1 sm:mr-2 data-[collapsed=true]:hidden"
        >
          {name}
        </span>
      </div>
      {count !== undefined && (
        <span
          data-collapsed={isCollapsed}
          className="text-darkgrey1 group-hover:text-darkgrey2 data-[collapsed=true]:hidden"
        >
          {count}
        </span>
      )}
    </div>
  );
};

export default Customebadge;
