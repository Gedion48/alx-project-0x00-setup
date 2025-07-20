// pages/landing.tsx
import React from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Landing Page</h1>

      <Card />

      <div className="mt-6 space-y-2">
        <Button title="Small Button" style="text-sm rounded-sm" />
        <Button title="Medium Button" style="text-base rounded-md" />
        <Button title="Large Button" style="text-lg rounded-full" />
      </div>
    </div>
  );
};

export default Landing;
