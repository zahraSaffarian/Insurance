import React, { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import Select from "@app/components/common/Select";
import { useInsuranceCompanies } from "@app/hooks/useInsuranceCompanies";
import { InsuranceCompany } from "@app/types/InsuranceCompany";
import { FormValues } from "..";
import arrow from "@app/assets/images/arrow.svg";
import Button from "@app/components/common/Button";
interface StepTwoProps {
  formMethods: UseFormReturn<FormValues>;
  goToPreviousStep: () => void;
  goToNextStep: () => void;
}

const SalesInsuranceStep2: React.FC<StepTwoProps> = ({
  formMethods,
  goToPreviousStep,
  goToNextStep,
}) => {
  const {
    setValue,
    formState: { errors },
  } = formMethods;
  const [insuranceCompanyId, setInsuranceCompanyId] = useState<number>(0);

  const { data, isLoading, isError } = useInsuranceCompanies();

  if (isLoading)
    return <div className="min-h-[100px]">درحال دریافت اطلاعات...</div>;
  if (isError)
    return (
      <div className="text-[12px] min-h-[100px] text-red-600 ">
        خطا در دریافت اطلاعات
      </div>
    );
  return (
    <>
      <h2 className="text-[16px] font-normal text-gray-500 mb-10">
        شرکت بیمه گر قبلی خود را در این بخش وارد کنید.
      </h2>
      <div className="mb-4">
        <Select
          label="شرکت بیمه"
          options={data.map((company: InsuranceCompany) => ({
            value: company.id,
            label: company.title,
          }))}
          value={insuranceCompanyId}
          onChange={(value: number) => {
            setInsuranceCompanyId(value);
            setValue(
              "insuranceCompany",
              data?.find((item) => item.id === value)
            );
          }}
          error={errors.insuranceCompany?.message}
        />
      </div>
      <div className="flex justify-between mt-8">
        <Button
          onClick={goToPreviousStep}
          size="small"
          variant="line"
          type="button"
          className="text-brand-400"
        >
          <img
            src={arrow}
            alt="arrow"
            className="transform rotate-180 w-2 absolute top-[40%] right-[15px]"
          />
          مرحله قبل
        </Button>
        <Button
          onClick={goToNextStep}
          size="small"
          variant="line"
          type="button"
          disabled={!insuranceCompanyId}
        >
          <img
            src={arrow}
            alt="arrow"
            className="transform  w-2 absolute top-[40%] left-[15px]"
          />
          مرحله بعد
        </Button>
      </div>
    </>
  );
};

export default SalesInsuranceStep2;
