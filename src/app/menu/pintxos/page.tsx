import logosmall from '@/public/logo-small.svg';
import Image from 'next/image';

const pintxos = [
    {
        name: 'JAMON',
        description: 'JAMON SERRANO / SAŁATKA Z JAJKA',
        price: '55/99'
    },
    {
        name: 'CHORIZO',
        description: 'GRILLOWANE CHORIZO / PIMIENTO DE PADRON',
        price: '55/99'
    },
    {
        name: 'GILDA',
        description: 'ANCHOVIES / OLIWKI / PAPRYCZKI GUINDILLAS',
        price: '59/109'
    },
    {
        name: 'KOZI SER',
        description: 'KOZI SER PLEŚNIOWY / KONFITURA Z BIAŁEJ CEBULI',
        price: '59/109',
        note: '🥦'
    },
    {
        name: 'TUNA',
        description: 'PIECZONA PAPRYKA / SAŁATKA Z TUŃCZYKA',
        price: '65/115'
    },
    {
        name: 'FUET',
        description: 'KATALOŃSKI FUET/"TATAR" Z POMIDORA/AIOLI',
        price: '59/109'
    },
    {
        name: 'CRABOO',
        description: 'SAŁATKA KRABOWA/KAWIOR',
        price: '65/115'
    },
    {
        name: 'BURAK',
        description: 'PIECZONY BURAK/FETA/OLIWKI KALAMATA',
        price: '59/109',
        note: '🥦'
    },
    {
        name: 'GAMBA',
        description: 'SAŁATKA KREWETKOWA/MIÓD CHILLI/JAJKO',
        price: '89/159'
    },
    {
        name: 'CHAMPINION',
        description: 'FASZEROWANE JAJKO/PIECZARKA W SHERRY',
        price: '69/129',
        note: '🥦'
    },
    {
        name: 'BACALAO',
        description: 'DORSZ W CIEŚCIE/PIPERADE/ZIOŁA',
        price: '89/159'
    },
    {
        name: 'BAKŁAZAN',
        description: 'PIECZONY BAKŁAZAN/RICOTTABAZYLIA/GAŁKA M.',
        price: '69/119',
        note: '🥦'
    },
    {
        name: 'PATE',
        description: 'PATE Z WĄTRÓBKI/ORZECH WŁOSKI/KAKAO',
        price: '75/129',
    },
    {
        name: 'TATARAK',
        description: 'SIEKANY TATAR WOŁOWY/FRYTOWANE KAPARY/AIOLI',
        price: '79/149',
    },
    {
        name: 'CABRALES',
        description: 'ASTURYJSKI SER CABRALES/CARNE DE MEMBRILLO',
        price: '75/129',
        note: '🥦'
    },
    {
        name: 'MORCILLA',
        description: 'PLEŚNIOWY KOZI SER/KASZANKA/KONFITURA',
        price: '69/129',
    },

];

export default function Page() {
    return (
        <main className="max-w-4xl mx-auto px-4 py-8 text-baskgreen">
            <header className="relative">
                <h1 className="text-center text-5xl sm:text-6xl font-light tracking-[0.4em] text-baskgreen-light">pintxos</h1>
            </header>

            <ul className="mt-8 space-y-2">
                <li key={0} className="flex items-baseline justify-between">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-2">
                        </div>
                    </div>
                    <p className="text-sm md:text-xl font-light tracking-[0.4em] text-baskgreen-light whitespace-nowrap">
                        5/10 małych porcji
                    </p>
                </li>
                {pintxos.map((item) => (
                    <li key={item.name} className="flex items-baseline justify-between">
                        <div className="max-w-xl">
                            <div className="flex items-center gap-2">
                                <h2 className="text-xl md:text-3xl font-semibold uppercase text-baskgreen">{item.name}</h2>
                                {item.note && <span className="text-lg md:text-2xl" aria-label="option">{item.note}</span>}
                            </div>
                            <p className="text-sm uppercase text-baskbrown">
                                {item.description}
                            </p>
                        </div>
                        <span className="text-xl md:text-3xl font-semibold text-baskgreen whitespace-nowrap">{item.price}</span>
                    </li>
                ))}
            </ul>

            <div className="mt-16">
                <h1 className="text-xl font-light text-baskgreen-light">🥦 - VEGE</h1>
            </div>

            <div className="flex justify-center">
                <Image
                    src={logosmall}
                    alt="Bask logo"
                    className="h-40 w-24 md:h-48 object-cover flex"
                />
            </div>
        </main>
    );
}
