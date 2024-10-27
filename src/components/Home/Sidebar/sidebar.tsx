"use client";
import React from "react";
import { FiInbox } from "react-icons/fi";
import Sidebaritems from "./sidebaritems";
import { Separator } from "@/components/ui/separator";
import { MdEvent } from "react-icons/md";
import { IoPricetagOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { TbCategory } from "react-icons/tb";
import { cookies } from "next/headers";

import Categories from "./Categories";
interface SidebarProps {
  width: number;
}
const Sidebar: React.FC<SidebarProps> = ({ width }) => {
  const isCollapsed = width < 150;
  return (
    <div className="flex flex-col">
      <div
        data-collapsed={isCollapsed}
        className="font-semibold text-xl text-center p-6 data-[collapsed=true]:text-lg bg-white"
      >
        Inbox<span className="font-mono">aide</span>
      </div>
      <Separator />
      <nav className="grid gap-1 p-8 bg-lightwhite">
        <Sidebaritems
          isCollapsed={isCollapsed}
          links={[
            {
              name: "Inbox",
              icon: <FiInbox size={20} />,
              url: "/",
            },
            {
              name: "Tagged",
              icon: <IoPricetagOutline size={20} />,
              url: "/ox",
            },
            { name: "Events", icon: <MdEvent size={20} />, url: "/in" },
            {
              name: "Settings",
              icon: <IoSettingsOutline size={20} />,
              url: "/settings",
            },
          ]}
        />
      </nav>
      <Separator />
      <nav className="grid gap-1 p-5 bg-lightwhite">
        <div
          data-collapsed={isCollapsed}
          className="flex justify-between items-center p-2 font-semibold text-lg data-[collapsed=true]:text-lg data-[collapsed=true]:justify-center"
        >
          <span
            data-collapsed={isCollapsed}
            className="data-[collapsed=true]:hidden"
          >
            Categories
          </span>
          <TbCategory size={25} />
        </div>
        <Categories
          isCollapsed={isCollapsed}
          categories={[
            {
              name: "important",
              color: "#FF0000",
              emoji: "🔥",
              count: 20,
            },
            {
              name: "cool",
              color: "#008000",
              emoji: "🐹",
              count: 120,
            },
            {
              name: "Subsriction",
              color: "#90d51c",
              emoji: "✅",
              count: 120,
            },
            {
              name: "Blog work",
              color: "#ffd703",
              emoji: "✏️",
              count: 120,
            },
            {
              name: " Personal",
              color: "#45b0ff",
              emoji: "❤️",
              count: 120,
            },
            {
              name: " Personal",
              color: "#45b0ff",
              emoji: "❤️",
              count: 120,
            },
            {
              name: " Personal",
              color: "#45b0ff",
              emoji: "❤️",
              count: 120,
            },
            {
              name: " Personal",
              color: "#45b0ff",
              emoji: "❤️",
              count: 120,
            },
            {
              name: " Personal",
              color: "#45b0ff",
              emoji: "❤️",
              count: 120,
            },
          ]}
        />
      </nav>
      <Separator />
    </div>
  );
};

export default Sidebar;
