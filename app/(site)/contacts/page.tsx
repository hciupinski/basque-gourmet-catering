'use client';
import { useState } from 'react';

export default function Page() {
    const [status, setStatus] = useState('');

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus('Sending...');
        const form = e.currentTarget;
        const data = Object.fromEntries(new FormData(form) as any);
        try {
            const resp = await fetch('https://formspree.io/f/yourid', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            setStatus(resp.ok ? "Thanks! We'll be in touch soon." : 'Something went wrong.');
            if (resp.ok) form.reset();
        } catch {
            setStatus('Network error.');
        }
    }

    return (
        <main className="max-w-2xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold">Request a Quote</h1>
            <p className="text-gray-700 mt-2">Tell us about your event and we’ll get back to you.</p>
            <form onSubmit={onSubmit} className="mt-8 space-y-4">
                <input name="name" required placeholder="Full name" className="w-full border px-4 py-3 rounded-xl" />
                <input name="email" type="email" required placeholder="Email" className="w-full border px-4 py-3 rounded-xl" />
                <input name="phone" placeholder="Phone (optional)" className="w-full border px-4 py-3 rounded-xl" />
                <input name="date" type="date" className="w-full border px-4 py-3 rounded-xl" />
                <input name="guests" type="number" min={1} placeholder="Guests" className="w-full border px-4 py-3 rounded-xl" />
                <textarea name="message" required placeholder="What are you planning?" className="w-full border px-4 py-3 rounded-xl min-h-[120px]"></textarea>
                <button className="px-5 py-3 rounded-xl bg-brand-600 text-white">Send</button>
                <p className="text-sm">{status}</p>
            </form>
        </main>
    );
}