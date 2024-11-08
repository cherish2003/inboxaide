"use client";
import { useState } from "react";
import Inboxcom from "@/components/Home/Inbox/Inboxcom";
import Sidebar from "@/components/Home/Sidebar/sidebar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  LayoutGroupProps,
} from "@/components/ui/resizable";
import MailCom from "@/components/Home/Mail/MailCom";
import Mailcontent from "@/components/Home/Mail/Mailcontent";

export default function Home() {
  const [sidebarWidth, setSidebarWidth] = useState<number>(150);

  const handleLayoutChange: LayoutGroupProps["onLayout"] = (
    layout: LayoutGroupProps
  ) => {
    const sidebarSize = layout[0]?.sizePixels;
    setSidebarWidth(sidebarSize);

    console.log(layout);
  };

  return (
    <div className="bg-lightgrey h-screen w-full">
      <ResizablePanelGroup direction="horizontal" onLayout={handleLayoutChange}>
        <ResizablePanel minSizePixels={125} maxSizePixels={210}>
          <Sidebar width={sidebarWidth} />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel minSizePixels={300} maxSizePixels={400}>
          <Inboxcom />
          <MailCom />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>
          <Mailcontent />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
