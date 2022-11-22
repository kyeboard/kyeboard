/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                floating: "floating 1s ease-in-out infinite",
                grow: "grow 0.5s ease-in-out forwards",
                shrink: "shrink 0.5s ease-in-out forwards",
                fade_in: "fade_in 0.5s ease-in-out forwards",
                fade_out: "fade_out 0.5s ease-in-out forwards",
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
                shrink: {
                    "0%": {
                        height: "100vh",
                        opacity: 1,
                    },
                    "100%": {
                        height: "0px",
                        opacity: 0,
                    },
                },
                grow: {
                    "0%": {
                        height: "0px",
                        opacity: 0.9,
                    },
                    "100%": {
                        height: "100vh",
                        opacity: 1,
                    },
                },
                fade_in: {
                    "0%": {
                        opacity: 0,
                        transform: "translateY(-10px)",
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translateY(0px)",
                    },
                },
                fade_out: {
                    "0%": {
                        opacity: 1,
                        transform: "translateY(0px)",
                    },
                    "100%": {
                        opacity: 0,
                        transform: "translateY(-10px)",
                    },
                },
            },
            screens: {
                sm: "730px",
                sd: "1050px",
                md: "1350px",
            },
            colors: {
                "base": "#1D192B",
                "surface0": "#332D41",
                "text": "#FFFBFE",
                "surface1": "#4A4458"
            }
        },
    },
    plugins: [
        // require("@catppuccin/tailwindcss")({
        //     prefix: "",
        //     defaultFlavour: "mocha",
        // }),
    ],
};
