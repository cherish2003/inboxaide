import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const HoverButton = ({ icon: Icon, text, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className="flex items-center p-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl focus:outline-none"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Icon */}
      <motion.div className="flex items-center">
        <Icon className="w-6 h-6" />
      </motion.div>

      {/* Text - only appears on hover */}
      <AnimatePresence>
        <motion.div
          className="overflow-hidden ml-2"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "auto", opacity: 1 }}
          exit={{ width: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className="whitespace-nowrap">{text}</span>
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
};

export default HoverButton;
