'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center text-white px-4 relative"
            style={{
                backgroundImage: `
                    linear-gradient(to bottom, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.9)),
                    url("/The Rhythm Collective Saxofonist Saxojoe.webp")
                `,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Logo */}
            <div className="mb-10">
                <Image
                    src="/Logo Saxofonist Saxojoe.png"
                    alt="Saxojoe Logo"
                    width={150}
                    height={150}
                    className="rounded-full shadow-2xl border-4 border-white"
                />
            </div>

            {/* Link Tree */}
            <div className="flex flex-col gap-4 w-full max-w-sm">
                {[
                    { label: 'Official Website', url: 'https://www.saxojoe.nl' },
                    { label: 'Official Bookings', url: 'https://www.saxojoe.nl/contact' },
                    { label: 'Facebook', url: 'https://www.facebook.com/saxojoe' },
                    { label: 'Instagram', url: 'https://www.instagram.com/saxophonist_saxojoe/' },
                    { label: 'YouTube', url: 'https://www.youtube.com/@saxophonistsaxojoe' },
                    { label: 'SoundCloud', url: 'https://soundcloud.com/saxojoe' },
                ].map((link) => (
                    <Link key={link.label} href={link.url} target="_blank" rel="noopener noreferrer">
                        <div
                            className="px-6 py-4 bg-white/10 backdrop-blur-md rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer font-semibold text-white text-lg text-center border border-white/20 hover:border-white"
                        >
                            {link.label}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
