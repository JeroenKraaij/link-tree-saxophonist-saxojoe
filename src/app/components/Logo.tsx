'use client';

import Image from 'next/image';

export default function Logo() {
    return (
        <div className="mb-10">
            <Image
                src="/Logo Saxofonist Saxojoe.png"
                alt="Saxojoe Logo"
                width={150}
                height={150}
                className="rounded-full shadow-2xl border-4 border-white"
            />
        </div>
    );
}
