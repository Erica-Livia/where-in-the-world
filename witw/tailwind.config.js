/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{jsx, js,ts, tsx}"],
    theme: {
        colors: {
            "dark-blue-(dark-mode-elements)": "#2B3844",
            "darkBlue" : "#3b4c5e",
            "very-dark-blue-(dark-mode-background)": "#202C36",
            "dark-gray-(light-mode-input)": "hsl(0, 0%, 52%)",
            "lightGray": "#FAFAFA",
            "white-(dark-mode-text)": "#FFFFFF",
            "light-mode-elements": "#FFFFFF",
            "darkWhite" : "#F2F2F2",
        },
        extend: {
            fontFamily: {
                sans: ["Nunito Sans", "sans-serif"],
            },
            fontWeight: {
                light: 300,
                semibold: 600,
                extraBold: 800,
            },
        },
    },
    plugins: [],
};
