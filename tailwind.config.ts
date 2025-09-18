import type { Config } from 'tailwindcss'

const config: Config = {
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
                },
                baskbrown: {
                    200: '#cda175',
                    500: '#b87333',
                },
                baskgreen: {
                    200: '#048333',
                    500: '#02521f',
                }
            }
        }
    },
    plugins: []
};

export default config;
