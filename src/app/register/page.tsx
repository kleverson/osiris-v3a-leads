"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Payload } from "@/data/types";
import validateDocument from "@/utils/validation";
import { useForm, Controller } from "react-hook-form";
import { IMaskInput } from "react-imask";
import { useRouter } from "next/navigation";

const PageRegister = () => {
  const router = useRouter();

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

    const json = await res.json();

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
    <div className="h-screen w-screen">
      <div className="flex flex-col items-center justify-center gap-5 h-full">
        <div className="text-center">
          <h3 className="font-bold text-4xl">Cadastro</h3>
          <p>lorem ipsum sit dolor amet</p>
        </div>
        <div className="border-2 border-white rounded-2xl px-5 py-4 flex flex-col justify-center w-1/2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="field mb-5">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nome:
              </label>
              <input
                placeholder="Nome"
                className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                {...register("name", {
                  required: "O nome é obrigatório",
                  minLength: { value: 2, message: "Mínimo 2 caracteres" },
                })}
              />
              {errors.name && <FormError message={errors.name.message} />}
            </div>

            <div className="field mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email:
              </label>
              <input
                placeholder="Email"
                className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
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

            <div className="flex justify-between mb-5 gap-4">
              <div className="field flex-1">
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Telefone:
                </label>
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
                      className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                      mask="(00) 00000-0000"
                      placeholder="Telefone"
                      onAccept={(value: string) => field.onChange(value)}
                    />
                  )}
                />
                {errors.phone && <FormError message={errors.phone.message} />}
              </div>

              <div className="field flex-1">
                <label
                  htmlFor="document"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  CPF:
                </label>
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
                      className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
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

            <div className="flex justify-center w-full">
              <button
                type="submit"
                disabled={isSubmitting}
                className="cursor-pointer rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
              >
                {isSubmitting && (
                  <svg
                    className="w-5 h-5 mr-2 animate-spin text-white"
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
                )}
                {isSubmitting ? "Enviando..." : "Cadastrar"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PageRegister;
