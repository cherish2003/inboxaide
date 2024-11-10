"use client";
import Fromtocard from "@/components/common/Fromtocard";
import Searchbadge from "@/components/common/Searchbadge";
import Mailbody from "./Mailbody";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeftCircle, Reply, Send } from "lucide-react";
import Mailinput from "./Mailinput";
import {
  ExpandableChat,
  ExpandableChatBody,
  ExpandableChatFooter,
  ExpandableChatHeader,
} from "@/components/ui/chat/expandable-chat";
import Mailbot from "./Mailbot";
import { ChatMessageList } from "@/components/ui/chat/chat-message-list";
import { ChatBubble, ChatBubbleAvatar } from "@/components/ui/chat/chat-bubble";
import { ChatInput } from "@/components/ui/chat/chat-input";

const Mailcontent = () => {
  const [replyVisible, setReplyVisible] = useState(false);
  const [sidebarvisible, setsidebarvisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleReply = () => {
    setReplyVisible((prev) => !prev);
    setIsVisible(!isVisible);
  };

  const handleExitComplete = () => setIsVisible(false);

  return (
    <div className="bg-white h-screen p-3 relative">
      <div className="flex justify-between h-[3%]">
        <div className="flex gap-1">
          <Searchbadge
            name="important"
            color="#FF0000"
            emoji="🔥"
            count="20"
            option="mail"
          />
          <Searchbadge
            name="work"
            color="#A020F0"
            emoji="🧳"
            count="20"
            option="mail"
          />
        </div>
        <div className="font-semibold text-sm text-darkgrey2">
          Today, 16 July 2021, 11:45
        </div>
      </div>

      <div className="text-xl font-bold text-darkgrey2 p-3 mt-2 h-[5%]">
        Re: Internship interested in your company
      </div>

      <Fromtocard />
      <div className="h-[80%] ">
        <Mailbody htmlContent={``} />
      </div>
      <div className="absolute bottom-2 w-full">
        {isVisible && <Mailinput onExitComplete={handleExitComplete} />}
        {!isVisible && (
          <Button
            variant="outline"
            className="flex flex-row"
            onClick={toggleReply}
          >
            <Reply size={20} className="mr-1" /> Reply
          </Button>
        )}
      </div>
      <Mailbot />
    </div>
  );
};

export default Mailcontent;
