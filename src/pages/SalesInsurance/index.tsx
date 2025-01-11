import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import SalesInsuranceStep1 from "./component/SalesInsuranceStep1";
import SalesInsuranceStep2 from "./component/SalesInsuranceStep2";
import SalesInsuranceStep3 from "./component/SalesInsuranceStep3";
import SalesInsuranceStep4 from "./component/SalesInsuranceStep4";
import { VehicleType, Usage } from "@app/types/VehicleType";
import { InsuranceCompany } from "@app/types/InsuranceCompany";
import { Discount } from "@app/types/Discount";

export interface FormValues {
  vehicleType: VehicleType | null;
  vehicleModel: Usage | null;
  insuranceCompany?: InsuranceCompany | null;
  discountSales?: Discount | null;
  discountDriver?: Discount | null;
}

const SalesInsurance: React.FC = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const formMethods = useForm<FormValues>({
    defaultValues: {
      vehicleType: null,
      vehicleModel: null,
    },
  });

  const { handleSubmit } = formMethods;

  const onSubmit: SubmitHandler<FormValues> = (formData) => {
    console.log("Form Data:", formData);
  };

  const goToPreviousStep = () => {
    if (step === 1) {
      navigate(-1);
    } else {
      setStep((prevStep) => prevStep - 1);
    }
  };

  const goToNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SalesInsuranceStep1
            formMethods={formMethods}
            goToPreviousStep={goToPreviousStep}
            goToNextStep={goToNextStep}
          />
        );
      case 2:
        return (
          <SalesInsuranceStep2
            formMethods={formMethods}
            goToPreviousStep={goToPreviousStep}
            goToNextStep={goToNextStep}
          />
        );
      case 3:
        return (
          <SalesInsuranceStep3
            formMethods={formMethods}
            goToNextStep={goToNextStep}
          />
        );
      case 4:
        return <SalesInsuranceStep4 formMethods={formMethods} />;
      default:
        return null;
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-2xl mx-auto"
    >
      {renderStep()}
    </form>
  );
};

export default SalesInsurance;
