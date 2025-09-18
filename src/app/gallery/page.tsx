const pics = [
    'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop'
];

export default function Page() {
    return (
        <main className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-3xl text-baskgreen font-bold">Galeria</h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                {pics.map((src) => (
                    <img key={src} className="rounded-xl aspect-square object-cover" src={src} alt="Food presentation" />
                ))}
            </div>
        </main>
    );
}