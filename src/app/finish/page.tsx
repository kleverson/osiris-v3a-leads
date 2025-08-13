import Link from "next/link";

const PageFinish = () => {
  return (
    <div className="h-screen w-screen">
      <div className="flex flex-col items-center justify-center gap-5 h-full">
        <div className="text-center">
          <div className="flex flex-col gap-5">
            <h3 className="font-bold text-4xl">Obrigado</h3>
            <p>Obrigado pela sua inscrição, fique ligado!</p>
            <div className="flex justify-center">
              <Link
                href="/register"
                className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
              >
                Xpto cta teste
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageFinish;
