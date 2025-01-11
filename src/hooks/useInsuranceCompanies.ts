import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { InsuranceCompany } from "../types/InsuranceCompany";

const fetchInsuranceCompanies = async (): Promise<InsuranceCompany[]> => {
  const { data } = await axios.get(
    "https://www.azki.com/api/product/third/companies"
  );
  return data;
};

export const useInsuranceCompanies = () => {
  return useQuery({
    queryKey: ["insuranceCompanies"],
    queryFn: fetchInsuranceCompanies,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};
