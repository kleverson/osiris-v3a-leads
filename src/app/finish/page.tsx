'use client';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../components/Button';
import { useRouter } from 'next/navigation';

const PageFinish = () => {
    const router = useRouter();

    return (
        <>
            <div className="wrapper h-[60vh] flex flex-col items-center justify-center">
                <div className="flex w-full flex-col">
                    <main className="flex flex-col row-start-2 sm:items-start px-6 md:px-20">
                        <h2 className="text-2xl md:text-[56px]  text-[#0033A4] text-center mb-[10px] md:mb-4 leading-none font-['BancoDoBrasilTitle'] font-extrabold">
                            Agradecemos <br className="hidden md:block" /> a sua
                            participação.
                        </h2>
                    </main>
                </div>
                <div className="flex justify-center items-end w-full absolute bottom-[60px]">
                    <img src="/img/grafism.png" alt="grafism" />
                </div>
            </div>
            <div className="fixed bottom-0 w-full">
                <Button
                    text={'INÍCIO'}
                    onClick={() => router.push('/')}
                    theme="blue"
                    sideArrow="left"
                />
            </div>
        </>
    );
};

export default PageFinish;
