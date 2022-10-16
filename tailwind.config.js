/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                floating: "floating 1s ease-in-out infinite"
            },
            keyframes: {
                floating: {
                    "0%, 100%": {
                        transform: "translateY(0px)"
                    },
                    "50%": {
                        transform: "translateY(10px)"
                    }
                }   
            }
        },
    },
    plugins: [
        require("@catppuccin/tailwindcss")({
            prefix: "",
            defaultFlavour: "mocha",
        }),
    ],
};
