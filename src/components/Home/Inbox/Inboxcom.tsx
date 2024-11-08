"use client";
import SearchWithTailFilter from "@/components/common/SearchWithTailFilter";
import React from "react";

const Inboxcom = () => {
  return (
    <div className="h-1/4 border">
      <div className="font-bold flex items-center justify-between p-5 ">
        <div className="">
          <span className="font-semibold text-lg">Inbox</span>
          <div className="flex justify-start text-sm font-normal text-gray-400">
            <div className="text-sm ">20 unread</div>
            <div className="text-sm ml-2">120 messages</div>
          </div>
        </div>
      </div>

      <div className="p-5">
        <SearchWithTailFilter />
      </div>
    </div>
  );
};

export default Inboxcom;
