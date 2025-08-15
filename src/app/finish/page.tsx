'use client';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../components/Button';
import { useRouter } from 'next/navigation';

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
            icon: '/img/instagram.svg',
            qrcode: '/img/qr_instagram.png',
            url: 'https://instagram.com',
            nick: 'bbseguros'
        },
        {
            icon: '/img/facebook.svg',
            qrcode: '/img/qr_facebook.png',
            url: 'https://facebook.com',
            nick: 'BBSeguros'
        },
        {
            icon: '/img/linkedin.svg',
            qrcode: '/img/qr_linkedin.png',
            url: 'https://linkedin.com',
            nick: 'bb-seguros'
        },
        {
            icon: '/img/youtube.svg',
            qrcode: '/img/qr_youtube.png',
            url: 'https://youtube.com',
            nick: 'bbseguros'
        },
        {
            icon: '/img/tiktok.svg',
            qrcode: '/img/qr_tiktok.png',
            url: 'https://tiktok.com',
            nick: '@bbseguros'
        },
        {
            icon: '/img/pinterest.svg',
            qrcode: '/img/qr_pinterest.png',
            url: 'https://pinterest.com',
            nick: 'bb_seguros'
        }
    ];

    return (
        <>
            <div className="wrapper max-h-screen flex flex-col justify-between">
                <div className="flex gap-[30px] md:gap-16 w-full flex-1 flex-col">
                    <main className="flex flex-col row-start-2 sm:items-start px-6 md:px-20">
                        <h2 className="text-2xl md:text-[56px]  text-[#0033A4] mb-[10px] md:mb-4 leading-none font-['BancoDoBrasilTitle'] font-extrabold">
                            Agradecemos <br className="hidden md:block" /> a sua
                            participação.
                        </h2>
                        <p className="text-base md:text-2xl text-[#3C3C3C] font-light">
                            <strong className="font-bold">
                                Acompanhe a BB Seguros
                            </strong>{' '}
                            nas redes sociais <br className="hidden md:block" />{' '}
                            e não perca nenhuma novidade.
                        </p>
                    </main>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-9 md:px-[60px] px-6 md:p-0">
                        {btns.map((item: Btn, index: number) => (
                            <a
                                key={index}
                                href={item.url}
                                className="flex items-center gap-0 bg-[url('/img/bg_mobile.png')] bg-no-repeat bg-[size:100%_100%] gap-6 p-[3px]"
                            >
                                <div className="icon flex items-center justify-start  rounded-full  p-[2px]">
                                    <img
                                        src={item.icon}
                                        alt=""
                                        className={
                                            'h-[30px] w-[30px] md:h-[48px] md:w-[48px]'
                                        }
                                    />
                                </div>
                                {/* py-6 px-4 md:p-2 flex-1 relative left-[-9px] min-w-[120px] md:bg-[url('/img/rounded-bg.png')]*/}
                                <div className="rounded-lg h-[40px] flex justify-center items-center relative left-[-9px] flex-1">
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
