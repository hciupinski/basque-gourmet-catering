import logosmall from '@/public/logo-small.svg';
import Image from 'next/image';

const tapas = [
    {
        name: 'KROKIETY SERRANO',
        description: 'BESZAMEL / JAMON SERRANO',
        price: '59/109'
    },
    {
        name: 'KROKIETY POLLO',
        description: 'PIECZONY KURCZAK / MAJONEZ DAKTYLOWY',
        price: '59/109'
    },
    {
        name: 'KROKIETY FETA',
        description: 'ZIEMNIAK / SER FETA / ZIOŁA',
        price: '49/89',
        note: '🥦'
    },
    {
        name: 'KROKIETY CABRALES',
        description: 'ASTURYJSKI SER CABRALES / BESZAMEL',
        price: '59/109',
        note: '🥦'
    },
    {
        name: 'TORTILLA DE PATATAS',
        description: 'HISZPAŃSKI "OMLET" / AIOLI / PIMIENTON',
        price: '49/89',
        note: '🥦'
    },
    {
        name: 'TORTILLA CON CHORIZO',
        description: 'HISZPAŃSKI "OMLET" Z CHORIZO / AIOLI',
        price: '59/109'
    },
    {
        name: 'EMPANADAS CARNE',
        description: 'PIECZONE PIERÓŻKI (KURCZAK / SZPINAK / CIECIORKA)',
        price: '69/129'
    },
    {
        name: 'EMPANADAS QUESO',
        description: 'PIECZONE PIERÓŻKI (KOZI SER / MIÓD / ZIOŁA)',
        price: '69/129',
        note: '🥦'
    },
    {
        name: 'SALMOREJO 1L / 2L',
        description: 'ANDALUZYJSKI AROMATYCZNY CHŁODNIK / GRZANKI',
        price: '49/89',
        note: '🥦'
    },
    {
        name: 'BROWNIE DULCE DE LECHE',
        description: 'PODWÓJNIE CZEKOLADOWE CIASTO Z DDL',
        price: '89/159'
    },
    {
        name: 'SERNIK BASKIJSKI',
        description: 'LEGENDARNY KREMOWY SERNIK BASKÓW',
        price: '109/200'
    }
];

export default function Page() {
    return (
        <main className="max-w-4xl mx-auto px-4 py-8 text-orange-800">
            <header className="relative">
                <h1 className="text-center text-5xl sm:text-6xl font-light tracking-[0.4em] text-orange-700">tapas</h1>
            </header>

            <ul className="mt-8 space-y-2">
                <li key={0} className="flex items-baseline justify-between">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-2">
                        </div>
                    </div>
                    <p className="text-xl font-light tracking-[0.4em] text-orange-700 whitespace-nowrap">
                        5/10 małych porcji
                    </p>
                </li>
                {tapas.map((item) => (
                    <li key={item.name} className="flex items-baseline justify-between">
                        <div className="max-w-xl">
                            <div className="flex items-center gap-2">
                                <h2 className="text-3xl font-semibold uppercase text-orange-900">{item.name}</h2>
                                {item.note && <span className="text-2xl" aria-label="option">{item.note}</span>}
                            </div>
                            <p className="text-sm uppercase text-green-800">
                                {item.description}
                            </p>
                        </div>
                        <span className="text-3xl font-semibold text-orange-900 whitespace-nowrap">{item.price}</span>
                    </li>
                ))}
            </ul>

            <div className="mt-16">
                <h1 className="text-xl font-light text-orange-700">🥦 - VEGE</h1>
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
