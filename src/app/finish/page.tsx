"use client";
import Link from "next/link";
import Image from "next/image";
import Button from "../components/Button";
import { useRouter } from "next/navigation";

const PageFinish = () => {
  const router = useRouter();

  return (
    <>
      <div className="wrapper max-h-screen flex flex-col justify-between bg-[#A5A1DD]">
        <div className="flex items-center justify-center gap-16 w-full flex-1 flex-col">
          <main className="flex flex-col row-start-2 items-center sm:items-start  w-4/5 md:w-2/3">
            <h2 className="text-2xl md:text-[56px]  text-[#0033A4] mb-4 leading-none font-['BancoDoBrasilTitle'] font-extrabold">
              Agradecemos sua participação.
            </h2>
            <p className="text-2xl text-[#3C3C3C] font-light">
              <strong className="font-bold">Acompanhe a BB Seguros</strong> nas
              redes sociais e não perca nenhuma novidade.
            </p>
          </main>

          <div className="hidden grid-cols-3 md:grid gap-9">
            <a href="" className="flex items-center">
              <div className="icon bg-[#0033a4] rounded-full p-2">
                <img src="/img/instagram.svg" alt="" />
              </div>
              <div className="bg-[#0033a4] rounded-lg p-2">
                <div className="bg-white p-4">
                  <img src="/img/qr_instagram.png" alt="" />
                </div>
              </div>
            </a>
            <a href="" className="flex items-center">
              <div className="icon bg-[#0033a4] rounded-full p-2">
                <img src="/img/facebook.svg" alt="" />
              </div>
              <div className="bg-[#0033a4] rounded-lg p-2">
                <div className="bg-white p-4">
                  <img src="/img/qr_facebook.png" alt="" />
                </div>
              </div>
            </a>
            <a href="" className="flex items-center">
              <div className="icon bg-[#0033a4] rounded-full p-2">
                <img src="/img/linkedin.svg" alt="" />
              </div>
              <div className="bg-[#0033a4] rounded-lg p-2">
                <div className="bg-white p-4">
                  <img src="/img/qr_linkedin.png" alt="" />
                </div>
              </div>
            </a>
            <a href="" className="flex items-center">
              <div className="icon bg-[#0033a4] rounded-full p-2">
                <img src="/img/youtube.svg" alt="" />
              </div>
              <div className="bg-[#0033a4] rounded-lg p-2">
                <div className="bg-white p-4">
                  <img src="/img/qr_youtube.png" alt="" />
                </div>
              </div>
            </a>
            <a href="" className="flex items-center">
              <div className="icon bg-[#0033a4] rounded-full p-2">
                <img src="/img/tiktok.svg" alt="" />
              </div>
              <div className="bg-[#0033a4] rounded-lg p-2">
                <div className="bg-white p-4">
                  <img src="/img/qr_tiktok.png" alt="" />
                </div>
              </div>
            </a>
            <a href="" className="flex items-center">
              <div className="icon bg-[#0033a4] rounded-full p-2">
                <img src="/img/pinterest.svg" alt="" />
              </div>
              <div className="bg-[#0033a4] rounded-lg p-2">
                <div className="bg-white p-4">
                  <img src="/img/qr_pinterest.png" alt="" />
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center w-full">
          <Image
            src={"/img/grafism.png"}
            width={719}
            height={490}
            alt={"grafismo"}
          />
        </div>
        <Button
          text={"INÍCIO"}
          onClick={() => router.push("/")}
          theme="blue"
          sideArrow="left"
        />
      </div>
    </>
  );
};

export default PageFinish;
