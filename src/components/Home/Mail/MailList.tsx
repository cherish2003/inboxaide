import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Mail from "./Mail";

interface MailList {}
const tags = [
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
];
const MailList = () => {
  return (
    <ScrollArea className="p-3 h-full">
      <Mail
        sender="Albert Flores"
        subject="Re: Design Review & UX Audit"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis voluptatibus magni itaque atque, inventore aspernatur dolorum at nemo iste error!"
        timeAgo="15m"
        tags={tags}
        avatar="https://via.placeholder.com/40"
        key={1}
      />
      <Mail
        sender="Albert Flores"
        subject="Re: Design Review & UX Audit"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis voluptatibus magni itaque atque, inventore aspernatur dolorum at nemo iste error!"
        timeAgo="15m"
        tags={tags}
        avatar="https://via.placeholder.com/40"
        key={2}
      />
      <Mail
        sender="Albert Flores"
        subject="Re: Design Review & UX Audit"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis voluptatibus magni itaque atque, inventore aspernatur dolorum at nemo iste error!"
        timeAgo="15m"
        tags={tags}
        avatar="https://via.placeholder.com/40"
        key={3}
      />
      <Mail
        sender="Albert Flores"
        subject="Re: Design Review & UX Audit"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis voluptatibus magni itaque atque, inventore aspernatur dolorum at nemo iste error!"
        timeAgo="15m"
        tags={tags}
        avatar="https://via.placeholder.com/40"
        key={3}
      />
      <Mail
        sender="Albert Flores"
        subject="Re: Design Review & UX Audit"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis voluptatibus magni itaque atque, inventore aspernatur dolorum at nemo iste error!"
        timeAgo="15m"
        tags={tags}
        avatar="https://via.placeholder.com/40"
        key={3}
      />
      <Mail
        sender="Albert Flores"
        subject="Re: Design Review & UX Audit"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis voluptatibus magni itaque atque, inventore aspernatur dolorum at nemo iste error!"
        timeAgo="15m"
        tags={tags}
        avatar="https://via.placeholder.com/40"
        key={3}
      />
    </ScrollArea>
  );
};

export default MailList;
