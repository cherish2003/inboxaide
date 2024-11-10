"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  ChatBubble,
  ChatBubbleAction,
  ChatBubbleMessage,
} from "@/components/ui/chat/chat-bubble";
import { ChatInput } from "@/components/ui/chat/chat-input";
import { ChatMessageList } from "@/components/ui/chat/chat-message-list";
import {
  ExpandableChat,
  ExpandableChatBody,
  ExpandableChatFooter,
  ExpandableChatHeader,
} from "@/components/ui/chat/expandable-chat";
import { AnimatePresence, motion } from "framer-motion";
import {
  CopyIcon,
  CornerDownLeft,
  Mic,
  Paperclip,
  RefreshCcw,
  Send,
  Volume2,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ChatAiIcons = [
  {
    icon: CopyIcon,
    label: "Copy",
  },
  {
    icon: RefreshCcw,
    label: "Refresh",
  },
  {
    icon: Volume2,
    label: "Volume",
  },
];

export default function Mailbot() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      avatar: "https://example.com/avatar1.jpg",
      name: "User",
      role: "user",
      message: "Hello, can you help me?",
      isLoading: false,
    },
    {
      id: 2,
      avatar: "",
      name: "ChatBot",
      role: "ai",
      message: "Sure! What do you need help with?",
      isLoading: false,
    },
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const getMessageVariant = (role) => (role === "ai" ? "received" : "sent");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!input) return;

    const userMessage = {
      id: messages.length + 1,
      avatar: "https://example.com/avatar1.jpg",
      name: "User",
      role: "user",
      message: input,
      isLoading: false,
    };

    setMessages([...messages, userMessage]);
    setInput("");
    formRef.current?.reset();

    // Simulate AI response
    setIsLoading(true);
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        avatar: "",
        name: "ChatBot",
        role: "ai",
        message: "Thank you for your message! Here’s a response from AI.",
        isLoading: false,
      };
      setMessages((prevMessages) => [...prevMessages, aiResponse]);
      setIsLoading(false);
    }, 2000);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      handleSendMessage(e);
    }
  };

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <ExpandableChat size="md" position="bottom-right">
      <ExpandableChatHeader className="flex-col text-center justify-center">
        <h1 className="text-xl font-semibold">Chat with your mail ✨</h1>
        <div className="flex gap-2 items-center pt-2 mt-2">
          <Button variant="secondary" size={"sm"}>
            Summarize ✍🏻
          </Button>
          <Button variant="secondary">Translate 唥</Button>
          <Button variant="secondary">Prioritize 🔔</Button>
        </div>
      </ExpandableChatHeader>
      <ExpandableChatBody>
        <div className="relative flex h-full flex-col rounded-xl bg-muted/40 p-4 lg:col-span-2">
          <ChatMessageList ref={messagesContainerRef}>
            <AnimatePresence>
              {messages.map((message, index) => {
                const variant = getMessageVariant(message.role);
                return (
                  <motion.div
                    key={message.id}
                    layout
                    initial={{ opacity: 0, scale: 1, y: 50, x: 0 }}
                    animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                    exit={{ opacity: 0, scale: 1, y: 1, x: 0 }}
                    transition={{
                      opacity: { duration: 0.1 },
                      layout: {
                        type: "spring",
                        bounce: 0.3,
                        duration: index * 0.05 + 0.2,
                      },
                    }}
                    className="flex flex-col gap-2"
                  >
                    <ChatBubble key={index} layout="ai">
                      <Avatar className="size-8 border">
                        <AvatarImage
                          src={message.role === "ai" ? "" : message.avatar}
                          alt="Avatar"
                          className={message.role === "ai" ? "dark:invert" : ""}
                        />
                        <AvatarFallback>
                          {message.role === "ai" ? "🤖" : "👤"}
                        </AvatarFallback>
                      </Avatar>
                      <ChatBubbleMessage isLoading={message.isLoading}>
                        {message.message}
                        {message.role === "ai" && (
                          <div className="flex items-center mt-1.5 gap-1">
                            {!message.isLoading &&
                              ChatAiIcons.map((icon, index) => {
                                const Icon = icon.icon;
                                return (
                                  <ChatBubbleAction
                                    className="size-6"
                                    key={index}
                                    icon={<Icon className="size-3" />}
                                  />
                                );
                              })}
                          </div>
                        )}
                      </ChatBubbleMessage>
                    </ChatBubble>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </ChatMessageList>
          <div className="flex-1" />
        </div>
      </ExpandableChatBody>
      <ExpandableChatFooter>
        <form
          ref={formRef}
          onSubmit={handleSendMessage}
          className="relative rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
        >
          <ChatInput
            ref={inputRef}
            onChange={handleInputChange}
            placeholder="Type your message here..."
            className="min-h-12 max-w-[95%] border-0 resize-none rounded-lg bg-background p-3 shadow-none focus-visible:ring-0 mx-1 mt-1 "
            value={input}
          />
          <div className="flex items-center p-3 pt-0">
            <Button variant="ghost" size="icon">
              <Paperclip className="size-4" />
              <span className="sr-only">Attach file</span>
            </Button>

            <Button variant="ghost" size="icon">
              <Mic className="size-4" />
              <span className="sr-only">Use Microphone</span>
            </Button>

            <Button size="sm" className="ml-auto gap-1.5">
              Send Message
              <CornerDownLeft className="size-3.5" />
            </Button>
          </div>
        </form>
      </ExpandableChatFooter>
    </ExpandableChat>
  );
}
