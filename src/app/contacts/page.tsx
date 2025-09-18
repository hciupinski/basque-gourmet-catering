'use client';
import { useState } from 'react';

export default function Page() {
    const [status, setStatus] = useState('');

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus('Wysyłanie...');
        const form = e.currentTarget;
        const data = Object.fromEntries(new FormData(form) as any);
        try {
            const resp = await fetch('https://formspree.io/f/yourid', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            setStatus(resp.ok ? "Dzięki! Odezwiemy się wkrótcę." : 'Coś poszło nie tak.');
            if (resp.ok) form.reset();
        } catch {
            setStatus('Problem z siecią.');
        }
    }

    return (
        <main className="max-w-2xl mx-auto px-4 py-12">
            <h1 className="text-3xl text-baskgreen font-bold">Złóz zamówienie</h1>
            <p className="text-baskgreen-light mt-2">Opisz swoj zamówienie, a my odezwiemy się do Ciebie!</p>
            <form onSubmit={onSubmit} className="mt-8 space-y-4">
                <input name="name" required placeholder="Imię i nazwisko" className="w-full border border-baskbrown px-4 py-3 rounded-xl" />
                <input name="email" type="email" required placeholder="Email" className="w-full border border-baskbrown px-4 py-3 rounded-xl" />
                <input name="phone" required placeholder="Telefon" className="w-full border border-baskbrown px-4 py-3 rounded-xl" />
                <input name="date" type="date" className="w-full border border-baskbrown px-4 py-3 rounded-xl" />
                <input name="guests" type="number" min={1} placeholder="Ilość gości" className="w-full border border-baskbrown px-4 py-3 rounded-xl" />
                <textarea name="message" required placeholder="Na co masz ochotę?" className="w-full border border-baskbrown px-4 py-3 rounded-xl min-h-[120px]"></textarea>
                <button className="px-5 py-3 rounded-xl bg-baskbrown text-white">Wyślij</button>
                <p className="text-sm">{status}</p>
            </form>
        </main>
    );
}