// components/ui/Card.tsx
import Pill from "./Pill";

const Card: React.FC = () => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white my-4">
      <h2 className="text-lg font-semibold mb-2">This is a Card</h2>
      <div className="flex gap-2">
        <Pill title="ALX" />
        <Pill title="Next.js" />
        <Pill title="TypeScript" />
      </div>
    </div>
  );
};

export default Card;
