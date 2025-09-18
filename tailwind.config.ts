const config = {
    content: [
        './app/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './pages/**/*.{ts,tsx}',
        './public/**/*.html'
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    50: '#fff7ed',
                    100: '#ffedd5',
                    400: '#fb923c',
                    600: '#ea580c'
                }
            }
        }
    },
    plugins: []
};

export default config;
