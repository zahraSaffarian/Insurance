import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Input from "@app/components/common/Input";
import Button from "@app/components/common/Button";
import _ from "lodash";

type FormValues = {
  nikName: string;
  lastName: string;
  phone: string;
  password: string;
};

const PersianRegex = /^[\u0600-\u06FF\s]+$/;
const PhoneRegex = /^09[0-9]{9}$/;
const PasswordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{4,10}$/;

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);

    const clonedData = _.cloneDeep(data);
    localStorage.setItem("userData", JSON.stringify(clonedData));

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setLoading(false);
    reset();
    navigate("/choose-insurance");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="نام"
          placeholder="نام"
          error={errors.nikName?.message}
          register={register("nikName", {
            required: "نام اجباری است.",
            pattern: {
              value: PersianRegex,
              message: "نام باید شامل حروف فارسی باشد.",
            },
          })}
        />

        <Input
          label="نام‌خانوادگی"
          placeholder="نام‌خانوادگی"
          error={errors.lastName?.message}
          register={register("lastName", {
            required: "نام‌خانوادگی اجباری است.",
            pattern: {
              value: PersianRegex,
              message: "نام‌خانوادگی باید شامل حروف فارسی باشد.",
            },
          })}
        />
      </div>
      <Input
        label="شماره موبایل"
        placeholder="شماره موبایل"
        type="tel"
        error={errors.phone?.message}
        register={register("phone", {
          required: "شماره موبایل اجباری است.",
          pattern: {
            value: PhoneRegex,
            message: "فرمت موبایل نامعتبر است.",
          },
        })}
      />
      <Input
        label="رمز عبور"
        placeholder="رمز عبور"
        type="password"
        error={errors.password?.message}
        register={register("password", {
          required: "رمز عبور اجباری است.",
          pattern: {
            value: PasswordRegex,
            message:
              " رمز عبور باید شامل حداقل یک عدد حداقل یک حرف بزرگ لاتین و حداقل یک حرف کوچک لاتین باشد و طول آن حداکثر ۴ و حداقل ۱۰ کاراکتر باشد.",
          },
        })}
      />
      <div className="flex justify-end">
        <Button size="small" variant="fill" type="submit" disabled={loading}>
          {loading ? (
            <span className="flex items-center justify-center text-sm ">
              <svg
                className="animate-spin h-4 w-4 ml-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
              در حال ارسال...
            </span>
          ) : (
            "ثبت نام"
          )}
        </Button>
      </div>
    </form>
  );
};

export default Login;
