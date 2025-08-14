"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./components/Button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="wrapper max-h-screen flex flex-col justify-between min-h-screen">
      <div className="flex items-center justify-center gap-16 w-full flex-1">
        <main className="flex flex-col row-start-2 items-center sm:items-start w-1/2">
          <h2 className="font-bold text-8xl text-[#F1EA3C] mb-4 leading-none">
            Queremos te conhecer melhor
          </h2>
          <p className="text-2xl text-white font-light">
            Fale um pouco sobre você e receba novidades que realmente importam.
          </p>
        </main>
      </div>
      <div className="my-10 mx-20 justify-end flex">
        <Image
          src={"/img/BEBESEG.png"}
          alt={"marca bbseg"}
          height={40}
          width={230}
        />
      </div>
      <Button
        text={"Cadastro"}
        onClick={() => router.push("/register")}
        theme="yellow"
        sideArrow="right"
      />
    </div>
  );
}
