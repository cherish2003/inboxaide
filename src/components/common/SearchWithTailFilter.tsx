"use client";

import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import Customebadge, { CustomebadgeProps } from "./Categorybadge";
import { Search, X } from "lucide-react";
import { motion } from "framer-motion";
import Searchbadge from "./Searchbadge";

const data = [
  { id: 1, name: "Work", type: "Task" },
  { id: 2, name: "Design", type: "Project" },
  { id: 3, name: "Subscription", type: "Task" },
  { id: 4, name: "IMPORTANT!", type: "Note" },
  { id: 5, name: "Personal", type: "Project" },
];

const filters = [
  { name: "important", color: "#FF0000", emoji: "🔥" },
  { name: "cool", color: "#008000", emoji: "🐹" },
  { name: "Subscription", color: "#90d51c", emoji: "✅" },
  { name: "Blogwork", color: "#ffd703", emoji: "✏️" },
  { name: "Personal", color: "#45b0ff", emoji: "❤️" },
];

export default function SearchWithTailFilter() {
  const [query, setQuery] = useState<string>("");
  const [activeFilters, setActiveFilters] = useState<CustomebadgeProps[]>([]);
  const [filteredData, setFilteredData] = useState(data);

  // useEffect(() => {
  //   let filtered = data;

  //   if (query) {
  //     filtered = filtered.filter((item) =>
  //       item.name.toLowerCase().includes(query.toLowerCase())
  //     );
  //   }

  //   if (activeFilters.length > 0) {
  //     filtered = filtered.filter((item) => activeFilters.includes(item.type));
  //   }

  //   setFilteredData(filtered);
  //   console.log(activeFilters);
  // }, [query, activeFilters]);

  const handleAddFilter = (filter: CustomebadgeProps) => {
    if (!activeFilters.includes(filter)) {
      setActiveFilters((prev) => [...prev, filter]);
    }
  };

  const handleRemoveFilter = (filter: CustomebadgeProps) => {
    setActiveFilters((prev) => prev.filter((f) => f !== filter));
  };

  return (
    <div className="w-full mx-auto space-y-4">
      <div className="relative">
        <Search className="absolute left-2 top-3 h-4 w-4 text-muted-foreground focus:outline-none" />
        <div className="flex flex-wrap items-center pl-8 bg-white border rounded-md">
          {activeFilters.map((filter, index) => (
            <Searchbadge
              key={index}
              option="search"
              name={filter.name}
              color={filter.color}
              emoji={filter.emoji}
              filter={filter}
              handleRemoveFilter={handleRemoveFilter}
              
            />
          ))}
          <Input
            placeholder="Search for mail..."
            className="flex-1 border-none outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Horizontal Scrollable Filters */}
      <div className="flex space-x-2 overflow-x-auto no-scrollbar">
        {filters.map((item, index) => (
          <div key={index} onClick={() => handleAddFilter(item)}>
            <Customebadge
              name={item.name}
              emoji={item.emoji}
              color={item.color}
            />
          </div>
        ))}
      </div>

      {/* Filtered Results */}
      {/* <div className="mt-4">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div
              key={item.id}
              className="p-2 bg-gray-100 border-b border-gray-200"
            >
              {item.name}
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">No results found</div>
        )}
      </div> */}
    </div>
  );
}
