import React from "react";
import Pill from "./Pill";

const Card: React.FC = () => {
  return (
    <div className="border p-4 rounded-lg shadow-md mt-4">
      <h2 className="text-lg font-bold mb-2">Card Component</h2>
      <div className="p-2 flex gap-2 mt-2">
        <Pill title="Top Villa" />
        <Pill title="Self CheckIn" />
        <Pill title="Free Reschedule" />
      </div>
    </div>
  );
};

export default Card;
