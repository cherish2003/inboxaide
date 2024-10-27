"use client";
import Searchbadge, { searchbadgeProps } from "@/components/common/Searchbadge";
import { motion } from "framer-motion";
import React from "react";

interface MailProps {
  sender: string;
  subject: string;
  content: string;
  timeAgo: string;
  tags: searchbadgeProps[];
}

const Mail = ({ sender, subject, content, timeAgo, tags }: MailProps) => {
  const truncatedContent =
    content.length > 88 ? content.substring(0, 85) + "..." : content;

  return (
    <motion.div
      className="mt-2 p-4 rounded-lg flex flex-col space-y-4 hover:bg-white cursor-pointer "
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="flex flex-col">
            <span className="font-bold text-gray-800">{sender}</span>
            <span className="text-sm text-gray-500 font-semibold">
              {subject}
            </span>
            <span className="text-sm font-light text-gray-400">{truncatedContent}</span>
          </div>
        </div>
        <div className="text-xs text-gray-400 flex">
          {timeAgo}
        </div>
      </div>

      <div className="flex space-x-2">
        {tags?.map((tag, index) => (
          <Searchbadge
            key={index}
            name={tag.name}
            emoji={tag.emoji}
            color={tag.color}
            option="mail"
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Mail;
