import Image from "next/image";
import React from "react";

interface ItemProps {
  name: string;
  logoSrc: string;
  alt: string;
  width: number;
  height: number;
  level?: string;
}

export default function Item({
  name,
  logoSrc,
  alt,
  width,
  height,
  level,
}: ItemProps) {
  let levelDot;
  if (level === "beginner") {
    levelDot = "bg-green-500"; // Green dot for beginner level
  } else if (level === "intermediate") {
    levelDot = "bg-yellow-500"; // Yellow dot for intermediate level
  } else if (level === "advanced") {
    levelDot = "bg-blue-500"; // Blue dot for advanced level
  }

  return (
    <div className="flex items-center my-2">
      {/* <span className={`rounded-full h-6 w-6 ${levelDot}  mr-2`}></span> */}
      <span className="mr-2">{name}</span>
      <Image src={logoSrc} alt={alt} width={width} height={height} />
    </div>
  );
}
