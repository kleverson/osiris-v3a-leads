"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Payload } from "@/data/types";
import validateDocument from "@/utils/validation";
import { useForm, Controller } from "react-hook-form";
import { IMaskInput } from "react-imask";
import { useRouter } from "next/navigation";
import Button from "../components/Button";
import { useState } from "react";

const PageRegister = () => {
  const router = useRouter();

  const [checked, setChecked] = useState(false);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Payload>();

  const onSubmit = async (data: Payload) => {
    console.log(data);
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    await res.json();

    if (!res.ok) {
      console.log("[error]", res);
    } else {
      router.push("/finish");
      console.log("[submit] is correct");
    }
  };

  const FormError = ({ message }: { message?: string }) => {
    return (
      <p className="mt-2 text-sm text-red-600 dark:text-red-500">
        <span className="font-medium">Oops!</span> {message}!
      </p>
    );
  };

  return (
    <div className="wrapper max-h-screen flex flex-col justify-between min-h-screen">
      <div className="flex items-center justify-center gap-16 w-full flex-1">
        <main className="flex flex-col row-start-2 items-center sm:items-start w-1/2">
          <h2 className="font-bold text-[56px] text-[#F1EA3C] mb-4 leading-none">
            Precisamos de algumas informações
          </h2>
          <p className="text-2xl text-white font-light">
            Nos ajude a saber mais sobre você.
          </p>

          <div className="my-10 bg-[#9AD6D3] rounded-3xl p-[60px] w-full">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <div className="flex">
                <div className="field flex-1">
                  <Controller
                    name="document"
                    control={control}
                    rules={{
                      required: "O CPF é obrigatório",
                      validate: (value) =>
                        validateDocument(value) || "CPF inválido",
                    }}
                    render={({ field }) => (
                      <IMaskInput
                        {...field}
                        mask="000.000.000-00"
                        className="bg-white p-4 rounded-2xl border-b border-b-[#42489D] text-[#3C3C3C] text-base w-full"
                        placeholder="CPF"
                        onAccept={(value: string) => field.onChange(value)}
                      />
                    )}
                  />
                  {errors.document && (
                    <FormError message={errors.document.message} />
                  )}
                </div>
              </div>
              <div className="field">
                <input
                  placeholder="Nome"
                  className="bg-white p-4 rounded-2xl border-b border-b-[#42489D] text-[#3C3C3C] text-base w-full"
                  {...register("name", {
                    required: "O nome é obrigatório",
                    minLength: { value: 2, message: "Mínimo 2 caracteres" },
                  })}
                />
                {errors.name && <FormError message={errors.name.message} />}
              </div>
              <div className="flex justify-between gap-4">
                <div className="flex-1 field">
                  <input
                    placeholder="Email"
                    className="bg-white p-4 rounded-2xl border-b border-b-[#42489D] text-[#3C3C3C] text-base w-full"
                    type="email"
                    {...register("email", {
                      required: "O e-mail é obrigatório",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Formato de e-mail inválido",
                      },
                    })}
                  />
                  {errors.email && <FormError message={errors.email.message} />}
                </div>

                <div className="field">
                  <Controller
                    name="phone"
                    control={control}
                    rules={{
                      required: "O telefone é obrigatório",
                      minLength: { value: 14, message: "Telefone inválido" },
                    }}
                    render={({ field }) => (
                      <IMaskInput
                        {...field}
                        className="bg-white p-4 rounded-2xl border-b border-b-[#42489D] text-[#3C3C3C] text-base w-full"
                        mask="(00) 00000-0000"
                        placeholder="Telefone"
                        onAccept={(value: string) => field.onChange(value)}
                      />
                    )}
                  />
                  {errors.phone && <FormError message={errors.phone.message} />}
                </div>
              </div>

              <div className="my-4">
                <label
                  htmlFor="accept"
                  className="text-[#3C3C3C] text-base font-normal flex items-center gap-2 cursor-pointer select-none"
                >
                  <input
                    type="checkbox"
                    id="accept"
                    className="hidden peer"
                    {...register("accept", {
                      required: "Você precisa aceitar para continuar",
                    })}
                    onChange={(e) => setChecked(e.currentTarget.checked)}
                  />
                  <span className="w-5 h-5 rounded-sm flex items-center justify-center transition-colors duration-200">
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {checked && (
                        <path
                          d="M5.83337 10.9167L8.33337 13.4167L14.1667 7.58333"
                          stroke="#42489D"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      )}
                      <path
                        d="M9.99996 18.8333C14.6023 18.8333 18.3333 15.1023 18.3333 10.5C18.3333 5.89762 14.6023 2.16666 9.99996 2.16666C5.39758 2.16666 1.66663 5.89762 1.66663 10.5C1.66663 15.1023 5.39758 18.8333 9.99996 18.8333Z"
                        stroke="#42489D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  Quero receber atualizações, promoções e conteúdos exclusivos.
                </label>
                {errors.accept && <FormError message={errors.accept.message} />}
              </div>
            </form>
          </div>
        </main>
      </div>

      <Button
        isLoading={isSubmitting}
        text={isSubmitting ? "Enviando..." : "Enviar"}
        onClick={handleSubmit(onSubmit)}
        theme="yellow"
        sideArrow="right"
      />
    </div>
  );
};

export default PageRegister;
