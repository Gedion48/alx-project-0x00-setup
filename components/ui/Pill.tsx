// components/ui/Pill.tsx
import React from "react";

interface PillProps {
  title: string;
}

const Pill: React.FC<PillProps> = ({ title }) => {
  return (
    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm mr-2">
      {title}
    </span>
  );
};

export default Pill;
