'use client';

import Link from 'next/link';

interface LinkButtonProps {
    label: string;
    url: string;
}

export default function LinkButton({ label, url }: LinkButtonProps) {
    return (
        <Link href={url} target="_blank" rel="noopener noreferrer">
            <div className="px-6 py-4 bg-white/10 backdrop-blur-md rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer font-semibold text-white text-lg text-center border border-white/20 hover:border-white">
                {label}
            </div>
        </Link>
    );
}
