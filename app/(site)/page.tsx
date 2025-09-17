export default function Page() {
    return (
        <div>
            {/* Hero image bar */}
            <section className="w-full">
                <div className="max-w-6xl mx-auto px-4 py-6">
                    <div className="overflow-hidden rounded-md shadow">
                        <img
                            src="bg.png"
                            alt="Pintxos and tapas sets"
                            className="w-full h-64 md:h-80 object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* O BASKU */}
            <section className="max-w-3xl mx-auto px-6 pb-24">
                <h2 className="text-center text-2xl md:text-3xl font-semibold tracking-wide text-amber-700">o BASKu</h2>
                <p className="mt-6 text-lg text-center leading-8 text-amber-800">
                    <strong className="font-bold">Bask</strong>owie jak mało kto potrafią cieszyć się dobrym towarzystwem i pysznym jedzeniem. Do perfekcji opanowali sztukę małych przekąsek (które nazywają PINTXOS) i to oni oraz ich kultura są inspiracją dla mojej firmy. Jeśli szukacie niebanalnych połączeń smaków i chcecie zaskoczyć swoich gości ciekawą kuchnią - zapraszam do kontaktu!
                </p>
            </section>
        </div>
    );
}