import logosmall from '@/public/logo-small.svg';
import Image from 'next/image';

type SetItem = {
    name: string;
    qty: string;
};

type TapasSet = {
    name: string;
    servings: string;
    price: string;
    items: SetItem[];
    note?: string;
};

const sets: TapasSet[] = [
    {
        name: 'MAŁY BASK',
        servings: 'Dla 4-6 osób',
        price: '289',
        items: [
            { name: 'KROKIETY SERRANO', qty: 'x10' },
            { name: 'GILDA', qty: 'x10' },
            { name: 'KOZI SER', qty: 'x10' },
            { name: 'TUNA', qty: 'x10' },
            { name: 'FUET', qty: 'x10' }
        ]
    },
    {
        name: 'ŚREDNI BASK',
        servings: 'Dla 6-8 osób',
        price: '379',
        items: [
            { name: 'KROKIETY SERRANO', qty: 'x10' },
            { name: 'GILDA', qty: 'x10' },
            { name: 'KOZI SER', qty: 'x10' },
            { name: 'TUNA', qty: 'x10' },
            { name: 'FUET', qty: 'x10' },
            { name: 'KROKIETY POLLO', qty: 'x10' },
            { name: 'TORTILLA DE PATATAS', qty: 'x1' }
        ]
    },
    {
        name: 'CARNE',
        servings: 'Dla 4-6 osób',
        price: '329',
        items: [
            { name: 'KROKIETY SERRANO', qty: 'x10' },
            { name: 'MORCILLA', qty: 'x10' },
            { name: 'TATARAK', qty: 'x10' },
            { name: 'PATE', qty: 'x10' },
            { name: 'FUET', qty: 'x10' }
        ]
    },
    {
        name: 'VERDE',
        note: '🥦',
        servings: 'Dla 4-6 osób',
        price: '299',
        items: [
            { name: 'TORTILLA DE PATATAS', qty: 'x10' },
            { name: 'BAKŁAŻAN', qty: 'x10' },
            { name: 'KOZI SER', qty: 'x10' },
            { name: 'BURAK', qty: 'x10' },
            { name: 'CHAMPINIÓN', qty: 'x10' }
        ]
    },
    {
        name: 'ESPECIAL',
        servings: 'Dla 4-6 osób',
        price: '359',
        items: [
            { name: 'KROKIETY SERRANO', qty: 'x10' },
            { name: 'GAMBA', qty: 'x10' },
            { name: 'MORCILLA', qty: 'x10' },
            { name: 'TATARAK', qty: 'x10' },
            { name: 'CABRALES', qty: 'x10' }
        ]
    },
    {
        name: 'DUŻY BASK',
        servings: 'Dla 8-10 osób',
        price: '569',
        items: [
            { name: 'KROKIETY SERRANO', qty: 'x20' },
            { name: 'GILDA', qty: 'x10' },
            { name: 'KOZI SER', qty: 'x10' },
            { name: 'TUNA', qty: 'x10' },
            { name: 'FUET', qty: 'x10' },
            { name: 'KROKIETY POLLO', qty: 'x10' },
            { name: 'TORTILLA DE PATATAS', qty: 'x1' },
            { name: 'CRABOO', qty: 'x10' },
            { name: 'SALMOREJO 1L', qty: 'x1' }
        ]
    }
];

export default function Page() {
    return (
        <main className="max-w-6xl mx-auto px-4 py-16 text-baskbrown">
            <header className="text-center">
                <h1 className="text-5xl sm:text-6xl font-light uppercase text-baskgreen-light">
                    bask-sety
                </h1>
            </header>

            <section className="mt-16 grid gap-12 md:grid-cols-2 xl:grid-cols-3">
                {sets.map((set) => (
                    <article key={set.name} className="space-y-2">
                        <div className="flex items-end justify-between">
                            <div>
                                <p className="text-xs uppercase text-baskbrown-light">
                                    {set.servings}
                                </p>
                                <div className="flex items-center gap-2">
                                    <h2 className="text-3xl font-semibold uppercase text-baskgreen">
                                        {set.name}
                                    </h2>
                                    {set.note && <span className="text-2xl" aria-hidden="true">{set.note}</span>}
                                </div>
                            </div>
                            <span className="text-3xl font-semibold text-baskgreen">{set.price}</span>
                        </div>

                        <ul className="space-y-1">
                            {set.items.map((item) => (
                                <li key={`${set.name}-${item.name}`} className="flex justify-between">
                                    <span
                                        className={`text-lg uppercase text-baskbrown'}`}
                                    >
                                        {item.name}
                                    </span>
                                    <span className="text-lg font-medium text-baskgreen">{item.qty}</span>
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </section>

            <div className="my-8 flex justify-between">
                <h1 className="flex align-midle text-xl font-light text-baskbrown">🥦 - VEGE</h1>
                <aside className="max-w-124 flex md:col-span-2 xl:col-span-1 border border-dashed border-baskbrown-light rounded-3xl p-6 text-center">
                    <p className="text-sm uppercase tracking-[0.3em] text-baskbrown">
                        Chcesz stworzyć swój własny set?
                    </p>
                    <p className="mt-3 text-base text-baskgreen">
                        Wybierz swoje pozycje z menu <span className="font-semibold">pintxos</span> lub menu{' '}
                        <span className="font-semibold">tapas</span> i napisz do nas, a my wycenimy Twój zestaw.
                    </p>
                </aside>
            </div>

            <div className="flex justify-center">
                <Image
                    src={logosmall}
                    alt="Bask logo"
                    className="h-24 h-24 md:h-48 object-cover flex"
                />
            </div>
        </main>
    );
}
