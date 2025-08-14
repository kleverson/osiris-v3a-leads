"use client";
import Link from "next/link";
import Image from "next/image";
import Button from "../components/Button";
import { useRouter } from "next/navigation";

interface Btn {
  icon: string;
  qrcode: string;
  url: string;
  nick: string;
}

const PageFinish = () => {
  const router = useRouter();

  const btns: Array<Btn> = [
    {
      icon: "/img/instagram.svg",
      qrcode: "/img/qr_instagram.png",
      url: "https://instagram.com",
      nick: "bbseguros",
    },
    {
      icon: "/img/facebook.svg",
      qrcode: "/img/qr_facebook.png",
      url: "https://facebook.com",
      nick: "BBSeguros",
    },
    {
      icon: "/img/linkedin.svg",
      qrcode: "/img/qr_linkedin.png",
      url: "https://linkedin.com",
      nick: "bb-seguros",
    },
    {
      icon: "/img/youtube.svg",
      qrcode: "/img/qr_youtube.png",
      url: "https://youtube.com",
      nick: "bbseguros",
    },
    {
      icon: "/img/tiktok.svg",
      qrcode: "/img/qr_tiktok.png",
      url: "https://tiktok.com",
      nick: "@bbseguros",
    },
    {
      icon: "/img/pinterest.svg",
      qrcode: "/img/qr_pinterest.png",
      url: "https://pinterest.com",
      nick: "bb_seguros",
    },
  ];

  return (
    <>
      <div className="wrapper max-h-screen flex flex-col justify-between">
        <div className="flex  gap-16 w-full flex-1 flex-col">
          <main className="flex flex-col row-start-2 sm:items-start px-6 md:px-20">
            <h2 className="text-2xl md:text-[56px]  text-[#0033A4] mb-4 leading-none font-['BancoDoBrasilTitle'] font-extrabold">
              Agradecemos <br /> a sua participação.
            </h2>
            <p className="text-2xl text-[#3C3C3C] font-light">
              <strong className="font-bold">Acompanhe a BB Seguros</strong> nas
              redes sociais <br /> e não perca nenhuma novidade.
            </p>
          </main>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-9 md:px-[60px] px-6 md:p-0">
            {btns.map((item: Btn, index: number) => (
              <a
                key={index}
                href={item.url}
                className="flex items-center gap-0"
              >
                <div className="icon bg-[url('/img/rounded-bg.png')] bg-no-repeat bg-contain flex items-center justify-start  rounded-full p-2 w-[79px] pr-0">
                  <img
                    src={item.icon}
                    alt=""
                    className={"h-[30px] w-[30px] md:h-[48px] md:w-[48px]"}
                  />
                </div>
                <div className="bg-[#0033a4] rounded-lg py-6 px-4 md:p-2 flex-1 relative left-[-9px] min-w-[120px]">
                  <div className="bg-white p-4 hidden md:block lg:block">
                    <img src={item.qrcode} alt="" />
                  </div>
                  <span className="block md:hidden lg:hidden text-base text-white font-normal">
                    {item.nick}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center w-full absolute bottom-0 md:bottom-[-60px]">
          <Image
            src={"/img/grafism.png"}
            width={719}
            height={490}
            alt={"grafismo"}
          />
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
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
