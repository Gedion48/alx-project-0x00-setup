// pages/landing.tsx
import React from "react";
import Card from "../components/ui/Card"; // Or "@/components/ui/Card" if alias works

const Landing: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />
      <Card />
    </div>
  );
};

export default Landing;
