/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        container: {
            screens: {
                'sm': '600px',
                'md': '728px',
                'lg': '984px',
                'xl': '1240px',
                '2xl': '1400px',
            },
        },
        extend: {
            fontFamily: {
                logo: ['Cinzel'],
                body: ['Lato'],
            },
            spacing: {
                42: '170px',
            },
            backgroundImage: {
                header: "linear-gradient(to bottom, rgba(0, 179, 255, 0.15), rgba(0, 24, 34, 0.9)), url('./assets/background.jpg')",
            },
        },
    },
    plugins: [daisyui],
    daisyui: {
        themes: ['cupcake'],
    },
};
