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
        description: 'SIEKANY TATR WOŁOWY/FRYTOWANE KAPARY/AIOLI',
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
        <main className="max-w-4xl mx-auto px-4 py-8 text-green-800">
            <header className="relative">
                <h1 className="text-center text-5xl sm:text-6xl font-light tracking-[0.4em] text-green-700">pintxos</h1>
            </header>

            <ul className="mt-8 space-y-2">
                <li key={0} className="flex items-baseline justify-between">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-2">
                        </div>
                    </div>
                    <p className="text-xl font-light tracking-[0.4em] text-green-700 whitespace-nowrap">
                        5/10 małych porcji
                    </p>
                </li>
                {pintxos.map((item) => (
                    <li key={item.name} className="flex items-baseline justify-between">
                        <div className="max-w-xl">
                            <div className="flex items-center gap-2">
                                <h2 className="text-3xl font-semibold uppercase text-green-900">{item.name}</h2>
                                {item.note && <span className="text-2xl" aria-label="option">{item.note}</span>}
                            </div>
                            <p className="text-sm uppercase text-orange-400">
                                {item.description}
                            </p>
                        </div>
                        <span className="text-3xl font-semibold text-green-900 whitespace-nowrap">{item.price}</span>
                    </li>
                ))}
            </ul>

            <div className="mt-16">
                <h1 className="text-xl font-light text-green-700">🥦 - VEGE</h1>
            </div>

            <div className="flex justify-center">
                <img
                    src="logo-small.svg"
                    alt="Bask logo"
                    className="h-24 h-24 md:h-48 object-cover flex"
                />
            </div>
        </main>
    );
}
