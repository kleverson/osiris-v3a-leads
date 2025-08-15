'use client';
import Button from './components/Button';
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();
    return (
        <div className="wrapper max-h-screen flex flex-col justify-between">
            <div className="flex items-start justify-start p-6 md:p-20 gap-16 w-full flex-1 pt-[50px]">
                <main className="flex flex-col row-start-2 items-start sm:items-start w-4/5">
                    <h2 className="text-4xl md:text-7xl text-[#F1EA3C] mb-2 leading-none font-['BancoDoBrasilTitle'] font-extrabold">
                        Queremos <br /> te conhecer
                        <br /> melhor
                    </h2>
                    <p className="text-base md:text-2xl text-white font-light">
                        Fale um pouco sobre você e receba
                        <br /> novidades que realmente importam.
                    </p>
                </main>
            </div>
            <div className="fixed bottom-0 w-full z-[99]">
                <div className="mx-20 justify-end flex">
                    <img
                        src="/img/BEBESEG.png"
                        className="absolute right-6 md:right-[80px] top-[-30px] translate-y-[-50%] w-[139px]  h-[27px] md:w-[230px] md:h-[40px] transition-all"
                        alt=""
                    />
                </div>
                <Button
                    text={'Cadastro'}
                    onClick={() => router.push('/register')}
                    theme="yellow"
                    sideArrow="right"
                />
            </div>
        </div>
    );
}
