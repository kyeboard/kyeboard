/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                floating: "floating 1s ease-in-out infinite",
                grow: "grow 0.6s ease-in-out forwards",
                fade_in: "fade_in 0.6s ease-in-out forwards"
            },
            keyframes: {
                floating: {
                    "0%, 100%": {
                        transform: "translateY(0px)",
                    },
                    "50%": {
                        transform: "translateY(10px)",
                    },
                },
                grow: {
                    "0%": {
                        height: "0px",
                        opacity: 0.9
                    },
                    "100%": {
                        height: "100vh",
                        opacity: 1
                    },
                },
                fade_in: {
                    "0%": {
                        opacity: 0,
                        transform: "translateY(-10px)"
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translateY(0px)"
                    },
                },
            },
            screens: {
                sm: "730px",
                sd: "1050px",
                md: "1350px"
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
