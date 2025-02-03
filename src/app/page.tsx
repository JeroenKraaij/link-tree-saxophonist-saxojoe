

import Background from '@/app/components/Background';
import Logo from '@/app/components/Logo';
import LinkButton from '@/app/components/Linkbuttons';

export default function Home() {
    const links = [
        { label: 'Official Website', url: 'https://www.saxojoe.nl' },
        { label: 'Official Bookings', url: 'https://www.saxojoe.nl/contact' },
        { label: 'Facebook', url: 'https://www.facebook.com/saxojoe' },
        { label: 'Instagram', url: 'https://www.instagram.com/saxophonist_saxojoe/' },
        { label: 'YouTube', url: 'https://www.youtube.com/@saxophonistsaxojoe' },
        { label: 'SoundCloud', url: 'https://soundcloud.com/saxojoe' },
    ];

    return (
        <Background>
            <Logo />
            <div className="flex flex-col gap-4 w-full max-w-sm">
                {links.map((link) => (
                    <LinkButton key={link.label} label={link.label} url={link.url} />
                ))}
            </div>
        </Background>
    );
}
