import localFont from 'next/font/local';

export const poppins = localFont({
    src: [
        {
            path: '../public/fonts/Poppins-Light.ttf',
            weight: '300',
            style: 'normal'
        },
        {
            path: '../public/fonts/Poppins-Regular.ttf',
            weight: '400',
            style: 'normal'
        },
        {
            path: '../public/fonts/Poppins-SemiBold.ttf',
            weight: '600',
            style: 'normal'
        },
        {
            path: '../public/fonts/Poppins-Bold.ttf',
            weight: '700',
            style: 'normal'
        }
    ],
    variable: '--font-poppins',
    display: 'swap'
});
