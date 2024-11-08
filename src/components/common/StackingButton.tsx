import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronRight,
  Send,
  SendHorizonal,
  Check,
} from "lucide-react";

const StackingButtonWithCheck = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    // setTimeout(() => setIsClicked(false), 1500); 
  };

  return (
    <button
      onClick={handleClick}
      className="relative inline-flex items-center justify-center p-3 px-1 py-2 overflow-hidden font-medium transition duration-300 ease-out border border-darkgrey2 rounded-full shadow-md group bg-white h-10 w-20"
    >
      <AnimatePresence>
        {!isClicked && (
          <motion.span
            className="absolute inset-0 flex items-center justify-center w-full h-full text-black bg-white"
            initial={{ scale: 1 }}
            animate={{ scale: 1 }}
            whileHover={{ x: 0 }}
            whileTap={{ scale: 0.6 }}
            exit={{ scale: 0.2, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <SendHorizonal className="text-black" />
          </motion.span>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isClicked && (
          <motion.span
            className="absolute inset-0 flex items-center justify-center w-full h-full text-green-500"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Check className="text-green-500" />
          </motion.span>
        )}
      </AnimatePresence>

      <motion.span
        className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease text-black bg-white"
        animate={{ opacity: 1 }}
      >
        Send
      </motion.span>
    </button>
  );
};

export default StackingButtonWithCheck;
