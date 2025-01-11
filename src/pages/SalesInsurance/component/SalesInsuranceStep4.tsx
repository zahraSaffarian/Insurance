import React from "react";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "..";

interface StepProps {
  formMethods: UseFormReturn<FormValues>;
}

const SalesInsuranceStep4: React.FC<StepProps> = ({ formMethods }) => {
  const { getValues } = formMethods;

  const formData = getValues();

  return (
    <div>
      <h2 className="text-[16px] font-normal text-gray-500 mb-10">
        خلاصه اطلاعات
      </h2>
      <ul className=" pl-6 text-gray-700">
        <li className="mb-5 ">
          <strong className="ml-3">نوع خودرو:</strong>
          {formData.vehicleType?.title || "نامشخص"}
        </li>
        <li className="mb-5 ">
          <strong className="ml-3">مدل خودرو:</strong>
          {formData.vehicleModel?.title || "نامشخص"}
        </li>
        <li className="mb-5 ">
          <strong className="ml-3">شرکت بیمه:</strong>
          {formData.insuranceCompany?.title || "نامشخص"}
        </li>
        <li className="mb-5 ">
          <strong className="ml-3">درصد تخفیف ثالث:</strong>
          {formData.discountSales !== null
            ? `${formData.discountSales?.title}%`
            : "نامشخص"}
        </li>
        <li className="mb-5 ">
          <strong className="ml-3">درصد تخفیف حوادث راننده:</strong>
          {formData.discountDriver !== null
            ? `${formData.discountDriver?.title}%`
            : "نامشخص"}
        </li>
      </ul>
    </div>
  );
};

export default SalesInsuranceStep4;
