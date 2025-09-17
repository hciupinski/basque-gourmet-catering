const sections = [
    {
        title: 'Canapés',
        items: [
            { name: 'Smoked Salmon Blini', price: '12 zł' },
            { name: 'Roasted Beet Crostini', price: '9 zł' }
        ]
    },
    {
        title: 'Mains',
        items: [
            { name: 'Herb Roast Chicken', price: '42 zł' },
            { name: 'Wild Mushroom Risotto (V)', price: '38 zł' }
        ]
    },
    {
        title: 'Desserts',
        items: [
            { name: 'Lemon Posset', price: '16 zł' },
            { name: 'Chocolate Tart', price: '18 zł' }
        ]
    }
];

export default function Page() {
    return (
        <main className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold">Menu</h1>
            <p className="text-gray-700 mt-2">Sample pricing. Ask for a tailored quote.</p>
            <div className="grid md:grid-cols-3 gap-8 mt-10">
                {sections.map((s) => (
                    <section key={s.title} className="bg-white border rounded-2xl p-6">
                        <h2 className="font-semibold text-lg">{s.title}</h2>
                        <ul className="mt-4 space-y-3">
                            {s.items.map((i) => (
                                <li key={i.name} className="flex justify-between"><span>{i.name}</span><span className="text-gray-600">{i.price}</span></li>
                            ))}
                        </ul>
                    </section>
                ))}
            </div>
        </main>
    );
}