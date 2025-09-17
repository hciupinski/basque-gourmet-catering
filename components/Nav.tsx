'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
    const pathname = usePathname() || '/';

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname.startsWith(href);
    };

    return (
        <nav className="w-full bg-green-900 text-white">
            <div className="max-w-6xl mx-auto px-4">
                <ul className="relative flex items-center gap-10 text-lg font-medium">
                    {/* about */}
                    <li>
                        <Link
                            href="/"
                            className={
                                'inline-block py-3 px-4 transition-colors ' +
                                (isActive('/') ? 'bg-green-800' : 'hover:bg-green-800')
                            }
                        >
                            o basku
                        </Link>
                    </li>

                    {/* menu with dropdown */}
                    <li className="group relative">
                        <span
                            className={
                                'inline-block py-3 px-4 cursor-default transition-colors ' +
                                (pathname.startsWith('/menu') ? 'bg-green-800' : 'group-hover:bg-green-800')
                            }
                        >
                            menu
                        </span>
                        <div className="absolute left-0 top-full hidden group-hover:block">
                            <div className="mt-2 w-44 rounded-md border border-green-900 bg-white text-green-900 shadow-lg">
                                <Link href="/menu/pintxos" className="block px-4 py-2 hover:bg-green-50">pintxos</Link>
                                <Link href="/menu/tapas" className="block px-4 py-2 hover:bg-green-50">tapas</Link>
                                <Link href="/menu/tapas-set" className="block px-4 py-2 hover:bg-green-50">tapas set</Link>
                            </div>
                        </div>
                    </li>

                    {/* gallery */}
                    <li>
                        <Link
                            href="/gallery"
                            className={
                                'inline-block py-3 px-4 transition-colors ' +
                                (isActive('/gallery') ? 'bg-green-800' : 'hover:bg-green-800')
                            }
                        >
                            galeria
                        </Link>
                    </li>

                    {/* contact */}
                    <li>
                        <Link
                            href="/contacts"
                            className={
                                'inline-block py-3 px-4 transition-colors ' +
                                (isActive('/contacts') ? 'bg-green-800' : 'hover:bg-green-800')
                            }
                        >
                            kontakt
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}