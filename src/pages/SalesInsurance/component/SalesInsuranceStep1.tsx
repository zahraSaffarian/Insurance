import React, { useMemo, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import Select from "@app/components/common/Select";
import { useVehicleTypes } from "@app/hooks/useVehicleTypes";
import { VehicleType, Usage } from "@app/types/VehicleType";
import { FormValues } from "..";
import arrow from "@app/assets/images/arrow.svg";
import Button from "@app/components/common/Button";

interface StepOneProps {
  formMethods: UseFormReturn<FormValues>;
  goToPreviousStep: () => void;
  goToNextStep: () => void;
}

const SalesInsuranceStep1: React.FC<StepOneProps> = ({
  formMethods,
  goToPreviousStep,
  goToNextStep,
}) => {
  const {
    watch,
    setValue,
    formState: { errors },
  } = formMethods;
  const [vehicleTypeId, setVehicleTypeId] = useState<number>(0);
  const [vehicleModelId, setVehicleModelId] = useState<number>(0);
  const vehicleType = watch("vehicleType");
  const { data, isLoading, isError } = useVehicleTypes();

  const models = useMemo(
    () =>
      data
        ?.find((item: VehicleType) => item.id === vehicleTypeId)
        ?.usages?.map((usage: Usage) => ({
          value: usage.id,
          label: usage.title,
        })) || [],
    [data, vehicleTypeId]
  );

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
        نوع و مدل خودروی خود را انتخاب کنید
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4">
          <Select
            label="نوع خودرو"
            options={data.map((company: VehicleType) => ({
              value: company.id,
              label: company.title,
            }))}
            value={vehicleTypeId}
            onChange={(value: number) => {
              setVehicleTypeId(value);
              setValue(
                "vehicleType",
                data?.find((item) => item.id === value)
              );
              setVehicleModelId(null);
              setValue("vehicleModel", null);
            }}
            error={errors.vehicleType?.message}
          />
        </div>
        <div className="mb-4">
          <Select
            label="مدل خودرو"
            options={models}
            value={vehicleModelId}
            onChange={(value: number) => {
              setVehicleModelId(value);
              setValue(
                "vehicleModel",
                vehicleType?.usages?.find((item) => item.id === value)
              );
            }}
            error={errors.vehicleModel?.message}
            disabled={!vehicleTypeId}
          />
        </div>
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
          بازگشت
        </Button>
        <Button
          onClick={goToNextStep}
          size="small"
          variant="line"
          type="button"
          disabled={!vehicleTypeId && !vehicleModelId}
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

export default SalesInsuranceStep1;
