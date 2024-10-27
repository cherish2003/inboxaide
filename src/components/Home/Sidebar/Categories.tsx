import React from "react";
import Customebadge, {
  CustomebadgeProps,
} from "@/components/common/Categorybadge";

interface CategoriesProps {
  categories: CustomebadgeProps[];
  isCollapsed?: boolean;
}

const Categories = ({ categories, isCollapsed }: CategoriesProps) => {
  return (
    <div className="max-h-48 sm:max-h-64 md:max-h-60 overflow-y-auto no-scrollbar">
      {categories.map((item, index) => (
        <Customebadge
          key={index}
          name={item.name}
          emoji={item.emoji}
          color={item.color}
          count={item.count}
          isCollapsed={isCollapsed}
        />
      ))}
    </div>
  );
};

export default Categories;
