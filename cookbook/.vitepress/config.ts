import { defineConfig } from "vitepress";
import { withPwa } from "@vite-pwa/vitepress";

export default withPwa(
    defineConfig({
        lang: "de-CH",
        title: "Ein Rezeptbuch",
        description: "Just playing around.",
        cleanUrls: true,
        themeConfig: {
            logo: "/assets/logo.jpg",
            nav: [
                { text: "Startseite", link: "/" },
                { text: "Über", link: "/about" }
            ]
        },
        base: "/cookbook/",
        head: [
            [
                "link",
                { rel: "apple-touch-icon", href: "assets/apple-touch-icon-180x180.png" }
            ],
            [
                "link",
                {
                    rel: "mask-icon",
                    href: "assets/maskable-icon-512x512.png",
                    color: "#5bbad5"
                }
            ],
            ["link", { rel: "shortcut icon", href: "assets/favicon.ico" }],
            ["meta", { name: "msapplication-TileColor", content: "#da532c" }]
        ],
        pwa: {
            manifest: {
                name: "Ein Rezeptbuch",
                short_name: "Rezeptbuch",
                description: "Ein Rezeptbuch für alle Fälle",
                theme_color: "#42c5f5",
                background_color: "#42f5bc",
                display: "standalone",
                icons: [
                    {
                        src: "assets/pwa-64x64.png",
                        sizes: "64x64",
                        type: "image/png"
                    },
                    {
                        src: "assets/pwa-192x192.png",
                        sizes: "192x192",
                        type: "image/png"
                    },
                    {
                        src: "assets/pwa-512x512.png",
                        sizes: "512x512",
                        type: "image/png"
                    }
                ]
            },
            workbox: {
                globPatterns: [
                    "**/*.{js,css,html,png,jpg,jpeg,svg,gif,ico,webp,woff,woff2,ttf,otf,eot,webmanifest,xml,txt,md}"
                ]
            }
        }
    })
);