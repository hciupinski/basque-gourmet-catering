import '@/src/styles/globals.css';
import type { Metadata } from 'next';
import Nav from '@/src/components/Nav';
import { poppins } from '@/src/utils/fonts';
import logo from '@/public/logo.svg';
import foodbg from '@/public/bg.webp';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Basque Gourmet Catering',
    description: 'Catering for corporate events, and private parties, corporate events or weddings in flavour of Spain.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${poppins.className} min-h-screen bg-white text-gray-900`}>
                <header className="w-full">
                    <div
                        id="logo"
                        className="mx-auto px-4 md:px-0 pt-2 md:-mb-1"
                    >
                        <div className="flex items-center justify-between md:block">
                            <a href="/" className="block text-2xl font-extrabold tracking-wide text-green-800">
                                <Image
                                    src={logo}
                                    alt="Bask logo"
                                    className="h-23 w-32 object-cover md:h-48 md:w-74 md:pl-10 md:-mb-[1px]"
                                />
                            </a>
                            <Nav />
                        </div>
                    </div>
                </header>
                <section className="hidden md:block w-full">
                    <div className="max-w-6xl mx-auto px-4 py-6">
                        <div className="overflow-hidden rounded-md shadow">
                            <Image
                                src={foodbg}
                                alt="Pintxos and tapas sets"
                                className="w-full h-48 object-cover md:h-80"
                            />
                        </div>
                    </div>
                </section>
                <main className="min-h-[60vh]">{children}</main>
            </body>
        </html>
    );
}
