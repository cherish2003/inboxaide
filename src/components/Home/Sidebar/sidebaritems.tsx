"use client";
import Link from "next/link";
import React, { ReactElement } from "react";
import { buttonVariants } from "@/components/ui/button";
import { usePathname } from "next/navigation";

interface sidebaritemsProps {
  isCollapsed: boolean;
  links: {
    name: string;
    icon: ReactElement;
    url: string;
  }[];
}

const Sidebaritems = ({ links, isCollapsed }: sidebaritemsProps) => {
  const pathname = usePathname();
  return (
    <>
      {links.map((item, index) => {
        return (
          <Link
            key={index}
            className={buttonVariants({
              variant: "ghost",
              className: `font-semibold gap-2 mt-2 text-darkgrey1 hover:text-darkgrey2 hover:bg-lightgrey ${
                pathname === item.url
                  ? "bg-lightgrey text-darkgrey2"
                  : "bg-lightwhite"
              }`,
            })}
            href={item.url}
          >
            <span>{item.icon}</span>
            {!isCollapsed && item.name}
          </Link>
        );
      })}
    </>
  );
};

export default Sidebaritems;
