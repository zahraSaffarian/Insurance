import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchVehicleTypes = async () => {
  const { data } = await axios.get(
    "https://www.azki.com/api/product/vehicle/types"
  );
  return data;
};

export const useVehicleTypes = () => {
  return useQuery({
    queryKey: ["vehicleTypes"],
    queryFn: fetchVehicleTypes,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};
