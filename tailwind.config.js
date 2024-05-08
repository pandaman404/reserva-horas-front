/** @type {import('tailwindcss').Config} */
export default {
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
            colors: {
                'ui-primary': 'rgb(42, 207, 207)',
                'ui-black': 'rgb(53, 50, 62)',
                'ui-gray': 'rgb(243, 244, 246)',
            },
            spacing: {
                42: '170px',
            },
            backgroundImage: {
                header: "linear-gradient(to bottom, rgba(0, 179, 255, 0.15), rgba(0, 24, 34, 0.9)), url('./assets/background.jpg')",
            },
        },
    },
    plugins: [],
};
