"use client";

import { usePathname } from "next/navigation";

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  console.log("pathname", pathname);

  const isFinish = pathname.includes("finish");

  return (
    <div
      className={`${
        isFinish ? "bg-[#A5A1DD]" : "bg-[#42489D]"
      } min-h-screen relative flex flex-col justify-between overflow-hidden`}
    >
      <div
        className={`flex justify-end items-end px-10 gap-20 ${
          isFinish ? "relative top-[40px]" : ""
        }`}
      >
        {!isFinish && (
          <img src="/img/boca.png" alt="" className="lg:w-[416px] w-[127px]" />
        )}

        <img
          src={isFinish ? "/img/coma_blue.png" : "/img/coma.png"}
          alt=""
          className="lg:w-[140px] w-[56px]"
        />
      </div>
      <div className="content relative z-20 flex-1">{children}</div>
      {!isFinish && (
        <>
          <img
            src="/img/core.png"
            className="absolute right-0 top-[55%] translate-y-[-50%] w-[152px]   lg:w-[333px]  transition-all"
            alt=""
          />
          <img
            src="/img/pimpao.png"
            className="absolute left-0  bottom-0 md:bottom-[60px] h-48  lg:h-[433px] transition-all"
            alt=""
          />
        </>
      )}
    </div>
  );
}
