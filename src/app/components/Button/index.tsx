'use client';

import { useEffect, useState } from 'react';

type Props = {
    isLoading?: boolean;
    theme: 'blue' | 'yellow';
    text: string;
    onClick: () => void;
    sideArrow: 'left' | 'right';
};
const Button = ({ isLoading, theme, text, onClick, sideArrow }: Props) => {
    return (
        <button
            className={`w-full py-4 md:py-8 uppercase flex justify-center items-center gap-[6px] z-[999] relative font-bold cursor-pointer ${
                theme === 'yellow'
                    ? 'bg-[#F1EA3C] text-[#42489D]'
                    : 'bg-[#0033A4] text-[#EFE8A4]'
            } ${sideArrow === 'right' ? 'flex-row' : 'flex-row-reverse'}`}
            onClick={onClick}
        >
            <div className="flex gap-2 items-center text-base md:text-2xl">
                {isLoading && (
                    <div className="w-6 h-6 border-4 border-white border-t-[#42489D] rounded-full animate-spin"></div>
                )}
                {text}
            </div>

            {!isLoading && (
                <div className={sideArrow === 'left' ? 'rotate-[180deg]' : ''}>
                    <svg
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M2.5 8.00001H14.5M14.5 8.00001L8.83333 2.33334M14.5 8.00001L8.83333 13.6667"
                            stroke={theme === 'yellow' ? `#42489D` : '#EFE8A4'}
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            )}
        </button>
    );
};

export default Button;
