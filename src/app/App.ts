import Header from "@/components/Header";
import Podcasts from "@/sections/Podcasts.ts";
import Footer from "@/components/Footer.ts";


export default function App(): string {
    return `
    ${Header()}
    <main>
        ${Podcasts()}
    </main>
    ${Footer()}
    `
}