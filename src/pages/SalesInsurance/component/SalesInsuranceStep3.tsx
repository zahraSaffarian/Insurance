import React, { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import Select from "@app/components/common/Select";
import { useDiscounts } from "@app/hooks/useDiscounts";
import { Discount } from "@app/types/Discount";
import Button from "@app/components/common/Button";
import { FormValues } from "..";

interface StepThreeProps {
  formMethods: UseFormReturn<FormValues>;
  goToNextStep: () => void;
}

const SalesInsuranceStep3: React.FC<StepThreeProps> = ({
  formMethods,
  goToNextStep,
}) => {
  const {
    watch,
    setValue,
    formState: { errors },
  } = formMethods;
  const [discountSalesId, setDiscountSalesId] = useState<number>(0);
  const [discountDriverId, setDiscountDriverId] = useState<number>(0);

  const { data, isLoading, isError } = useDiscounts();

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
        درصد تخفیف بیمه شخص ثالث و حوادث راننده را وارد کنید.
      </h2>
      <div className="mb-4">
        <Select
          label="درصد تخفیف ثالث"
          options={data?.map((discount: Discount) => ({
            value: discount.id,
            label: discount.title,
          }))}
          value={discountSalesId}
          onChange={(value: number) => {
            setDiscountSalesId(value);
            setValue(
              "discountSales",
              data?.find((item) => item.id === value)
            );
          }}
          error={errors.discountSales?.message}
        />
      </div>
      <div className="mb-4">
        <Select
          label="درصد تخفیف حوادث راننده"
          options={data?.map((discount: Discount) => ({
            value: discount.id,
            label: discount.title,
          }))}
          value={discountDriverId}
          onChange={(value: number) => {
            setDiscountDriverId(value);
            setValue(
              "discountDriver",
              data?.find((item) => item.id === value)
            );
          }}
          error={errors.discountDriver?.message}
        />
      </div>

      <div className="w-full flex justify-end">
        <Button
          onClick={goToNextStep}
          size="small"
          variant="fill"
          type="button"
          disabled={!discountSalesId && !discountDriverId}
        >
          استعلام قیمت
        </Button>
      </div>
    </>
  );
};

export default SalesInsuranceStep3;
