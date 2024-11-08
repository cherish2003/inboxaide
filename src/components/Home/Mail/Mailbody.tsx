import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const Mailbody = ({ htmlContent }) => {
  return (
    <div className="h-full text-sm p-3 overflow-y-hidden flex flex-col">
      <Tabs defaultValue="text" className="h-full flex flex-col">
        <TabsList className="w-fit mb-4 mx-1">
          <TabsTrigger value="text">Text</TabsTrigger>
          <TabsTrigger value="html">HTML</TabsTrigger>
        </TabsList>

        <TabsContent
          value="text"
          className="flex-grow overflow-y-auto p-2 no-scrollbar"
        >
          <div className="min-h-[500px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            libero expedita. Nisi voluptatum architecto ipsum, voluptate, neque
            nulla amet odio hic vel quasi quia ullam molestias delectus at esse
            natus explicabo aspernatur. Maxime iste quidem voluptatum autem.
            Aliquid atque quae quaerat sapiente nam, ipsa, facere provident
            consequuntur ad exercitationem adipisci dolore magnam, magni quidem
          </div>
        </TabsContent>

        <TabsContent
          value="html"
          className="flex-grow overflow-y-auto p-2 no-scrollbar"
        >
          <div
            className="min-h-[500px]"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Mailbody;
