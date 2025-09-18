import foodbg from '@/public/bg.webp';
import Image from 'next/image';

export default function Page() {
    return (
        <div>
            {/* O BASKU */}
            <section className="max-w-3xl mx-auto px-6 pb-8 md:pb-24 mt-6 md:mt-0">
                <h2 className="text-center text-2xl md:text-3xl font-semibold tracking-wide text-baskbrown">o BASKu</h2>
                <p className="mt-6 text-lg text-center leading-8 text-baskbrown">
                    <strong className="font-bold">Bask</strong>owie jak mało kto potrafią cieszyć się dobrym towarzystwem i pysznym jedzeniem. Do perfekcji opanowali sztukę małych przekąsek (które nazywają PINTXOS) i to oni oraz ich kultura są inspiracją dla mojej firmy. Jeśli szukacie niebanalnych połączeń smaków i chcecie zaskoczyć swoich gości ciekawą kuchnią - zapraszam do kontaktu!
                </p>
            </section>
            <section className="block md:hidden w-full">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="overflow-hidden rounded-md shadow">
                        <Image
                            src={foodbg}
                            alt="Pintxos and tapas sets"
                            className="w-full h-48 object-cover md:h-80"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}