const config = {
    content: [
        './app/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './pages/**/*.{ts,tsx}',
        './public/**/*.html'
    ],
    safelist: [
        {
            pattern: /(bg|text|border)-(baskbrown|baskgreen)-(200|500)/
        }
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
