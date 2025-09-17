export default function Footer() {
    return (
        <footer className="border-t mt-16">
            <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-gray-600 flex flex-col md:flex-row items-center md:justify-between gap-4">
                <p>© {new Date().getFullYear()} Basque Gourmet Catering. All rights reserved.</p>
                <p>
                    <a className="hover:text-brand-600" href="/privacy">Privacy</a>
                    <span className="mx-2">·</span>
                    <a className="hover:text-brand-600" href="/contact">Contact</a>
                </p>
            </div>
        </footer>
    );
}