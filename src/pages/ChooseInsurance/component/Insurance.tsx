import React from "react";
import { useNavigate } from "react-router-dom";

interface InsuranceProps {
  name: string;
  image: string;
  route: string;
  enabled: boolean;
}

const Insurance: React.FC<InsuranceProps> = ({
  name,
  image,
  route,
  enabled,
}) => {
  const navigate = useNavigate(); // For navigation

  const handleClick = () => {
    if (enabled) {
      navigate(route);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={` p-5 rounded-lg border border-gray-200 transition-all duration-300 ease-in-out ${
        enabled
          ? "bg-white hover:shadow-lg cursor-pointer"
          : "bg-gray-200 cursor-not-allowed opacity-50"
      }`}
    >
      <div className="flex justify-center mb-4">
        <img src={image} alt={name} className="w-16 h-16 object-cover" />
      </div>

      <h3 className="text-center text-lg font-semibold">{name}</h3>
    </div>
  );
};

export default Insurance;
