import SearchPanel from "@/components/SearchPanel";

export default function Podcasts(): string {
    return `
    <section class="podcasts">
        ${SearchPanel()}
    </section>`;
};
