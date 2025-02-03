'use client';

import { ReactNode } from 'react';

interface BackgroundProps {
    children: ReactNode;
}

export default function Background({ children }: BackgroundProps) {
    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center text-white px-4 relative"
            style={{
                backgroundImage: `
                    linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 10%, rgba(0, 0, 0, 0.9)),
                    url("/The Rhythm Collective Saxofonist Saxojoe.webp")
                `,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {children}
        </div>
    );
}
