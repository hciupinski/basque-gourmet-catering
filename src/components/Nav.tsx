'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import logosmalltext from '@/public/logo-small-text.svg';

const menuLinks = [
    { href: '/menu/pintxos', label: 'pintxos' },
    { href: '/menu/tapas', label: 'tapas' },
    { href: '/menu/tapas-set', label: 'tapas set' }
];

const primaryLinks = [
    { href: '/', label: 'o basku' },
    ...menuLinks,
    { href: '/gallery', label: 'galeria' },
    { href: '/contacts', label: 'kontakt' }
];

export default function Nav() {
    const pathname = usePathname() || '/';
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname.startsWith(href);
    };

    return (
        <>
            <button
                type="button"
                className="md:hidden inline-flex h-12 w-12 items-center justify-center rounded-full text-baskgreen transition hover:bg-baskgreen/10 focus:outline-none focus:ring-2 focus:ring-baskgreen"
                onClick={() => setIsOpen(true)}
                aria-expanded={isOpen}
                aria-haspopup="true"
                aria-label="Otwórz menu"
            >
                <span className="sr-only">Otwórz menu</span>
                <span className="flex h-5 w-6 flex-col items-center justify-between">
                    <span className="block h-0.5 w-full rounded bg-baskgreen"></span>
                    <span className="block h-0.5 w-full rounded bg-baskgreen"></span>
                    <span className="block h-0.5 w-full rounded bg-baskgreen"></span>
                </span>
            </button>

            <nav className="hidden md:block w-full bg-baskgreen text-white">
                <div className="w-full mx-auto px-4">
                    <ul className="relative flex items-center gap-10 text-lg font-medium">
                        <li>
                            <Link
                                href="/"
                                className={`inline-block py-3 px-4 transition-colors ${isActive('/') ? 'bg-green-800' : 'hover:bg-green-800'
                                    }`}
                            >
                                o basku
                            </Link>
                        </li>

                        <li className="group relative">
                            <span
                                className={`inline-block py-3 px-4 cursor-default transition-colors ${pathname.startsWith('/menu') ? 'bg-green-800' : 'group-hover:bg-green-800'
                                    }`}
                            >
                                menu
                            </span>
                            <div className="absolute left-0 top-full hidden group-hover:block">
                                <div className="mt-2 w-44 rounded-md border border-green-900 bg-white text-green-900 shadow-lg">
                                    {menuLinks.map((link) => (
                                        <Link key={link.href} href={link.href} className="block px-4 py-2 hover:bg-green-50">
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </li>

                        <li>
                            <Link
                                href="/gallery"
                                className={`inline-block py-3 px-4 transition-colors ${isActive('/gallery') ? 'bg-green-800' : 'hover:bg-green-800'
                                    }`}
                            >
                                galeria
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/contacts"
                                className={`inline-block py-3 px-4 transition-colors ${isActive('/contacts') ? 'bg-green-800' : 'hover:bg-green-800'
                                    }`}
                            >
                                kontakt
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex flex-col bg-baskgreen text-white md:hidden">
                    <div className="flex items-center justify-between px-6 py-4">
                        <Link href="/" className="inline-flex items-center" onClick={() => setIsOpen(false)}>
                            <Image src={logosmalltext} alt="Bask logo" className="h-20 w-auto pt-4" />
                        </Link>
                        <button
                            type="button"
                            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/40 text-3xl leading-none transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
                            onClick={() => setIsOpen(false)}
                            aria-label="Zamknij menu"
                        >
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="flex-1 overflow-y-auto px-6 pb-12">
                        <ul className="flex flex-col gap-6 pt-10 text-3xl font-semibold uppercase tracking-[0.3em]">
                            {primaryLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="block text-white/90 transition hover:text-white"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
}
