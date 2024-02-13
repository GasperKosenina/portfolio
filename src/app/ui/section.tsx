import Link from "next/link";
import React, { ReactNode } from "react";
import Logo from "./logo";

interface SectionProps {
  title: string;
  showLevels: string;
  showLinkedIn?: string;
  children: ReactNode;
}

export default function Section({
  title,
  children,
  showLevels,
  showLinkedIn,
}: SectionProps) {
  return (
    <div className="flex flex-col mb-8">
      <div className="flex items-center mb-2">
        <h1 className="font-mono text-xl">{title}</h1>
        {showLinkedIn === "yes" && (
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/gašper-košenina-101337262/"
          >
            <Logo
              src="/linkedin-1.png"
              alt="linkedIn logo"
              width={50}
              height={50}
            />
          </Link>
        )}
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
