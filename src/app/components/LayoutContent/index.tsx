'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function LayoutContent({
    children
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    console.log('pathname', pathname);

    const isFinish = pathname.includes('finish');

    return (
        <div
            className={`${
                isFinish ? 'bg-[#A5A1DD]' : 'bg-[#42489D]'
            } min-h-screen max-h-screen relative flex flex-col justify-between overflow-hidden`}
        >
            <div className={`flex justify-end items-end px-10 gap-20`}>
                {!isFinish && (
                    <motion.img
                        src="/img/boca.png"
                        alt=""
                        className="lg:w-[416px] w-[127px]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    />
                )}

                <motion.img
                    src={isFinish ? '/img/coma_blue.png' : '/img/coma.png'}
                    alt=""
                    className="lg:w-[140px] w-[56px] relative top-6 md:top-[40px]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                />
            </div>
            <div className="content relative z-20 flex-1">
                {children}

                {!isFinish && (
                    <>
                        <motion.img
                            src="/img/core.png"
                            className="absolute right-0 top-[55%] translate-y-[-50%] w-[152px] lg:w-[333px] transition-all"
                            alt=""
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                        />
                        <motion.img
                            src="/img/pimpao.png"
                            className="absolute left-0 bottom-0 md:bottom-[60px] h-48 lg:h-[433px] transition-all"
                            alt=""
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.6 }}
                        />{' '}
                    </>
                )}
            </div>
        </div>
    );
}
