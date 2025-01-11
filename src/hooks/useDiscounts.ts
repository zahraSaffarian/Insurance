import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchDiscounts = async () => {
  const { data } = await axios.get(
    "https://www.azki.com/api/product/third/third-discounts"
  );
  return data;
};

export const useDiscounts = () => {
  return useQuery({
    queryKey: ["discounts"],
    queryFn: fetchDiscounts,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};
