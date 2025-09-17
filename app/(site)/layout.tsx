import '../globals.css';
import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import { poppins } from '../fonts';

export const metadata: Metadata = {
    title: 'Basque Gourmet Catering',
    description: 'Catering for corporate events, and private parties, corporate events or weddings in flavour of Spain.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${poppins.className} min-h-screen bg-white text-gray-900`}>
                <header className="w-full">
                    <div id="logo" className="max-w-6xl mx-auto px-4 pt-2 -mb-1">
                        <a href="/" className="block text-2xl font-extrabold tracking-wide text-green-800">
                            <img
                                src="logo.svg"
                                alt="Bask logo"
                                className="h-64 h-64 md:h-48 object-cover"
                            />
                        </a>
                    </div>
                    <Nav />
                </header>
                <main className="min-h-[60vh]">{children}</main>
            </body>
        </html >
    );
}
