import React, { ReactNode } from "react";

interface SectionProps {
  title: string;
  showLevels: string;
  children: ReactNode;
}

export default function Section({ title, children, showLevels }: SectionProps) {
  return (
    <div className="flex flex-col mb-8">
      <div className="flex items-center mb-2">
        <h1 className="font-mono text-xl">{title}</h1>
        {showLevels === "yes" && (
          <div className="ml-3">
            <span className="text-green-500 mr-2"> 🟢 Beginner</span>
            <span className="text-yellow-500 mr-2"> 🟡 Intermediate</span>
            <span className="text-blue-500"> 🔵 Advanced</span>
          </div>
        )}
      </div>
      {children}
    </div>
  );
}
