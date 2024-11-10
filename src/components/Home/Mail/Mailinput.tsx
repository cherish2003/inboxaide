import AnimatedButton from "@/components/common/AnimatedButton";
import StackingButton from "@/components/common/StackingButton";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Send } from "lucide-react";
import React, { useState } from "react";

const Mailinput = ({ onExitComplete }) => {
  const [isExiting, setIsExiting] = useState(false);

  const handleExit = () => {
    setIsExiting(true);
  };

  return (
    <AnimatePresence onExitComplete={onExitComplete}>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="w-[95%] p-2 shadow-md border-orange-700 bg-lightgrey rounded-lg mx-2 mb-1"
        >
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2 mt-2">
              <Textarea
                placeholder="Type your message here."
                className="resize-none"
              />
            </div>
            <div className="flex justify-start">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      className="self-end ml-1"
                      size={"icon"}
                      variant={"outline"}
                    >
                      <Send />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Send </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      className="self-end ml-1 "
                      size={"icon"}
                      variant={"outline"}
                    >
                      ✍🏻
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Quick reply</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      className="self-end ml-1 "
                      size={"icon"}
                      variant={"outline"}
                    >
                      🪄
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Personalize</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      onClick={handleExit}
                      size={"icon"}
                      variant={"outline"}
                      color="#f6f8fa"
                      className="ml-1"
                    >
                      <ChevronDown />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Close</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Mailinput;
