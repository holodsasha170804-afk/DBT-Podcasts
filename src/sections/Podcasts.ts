import authors from '@/data/authors.json';
import podcasts from '@/data/podcasts.json';
import searchPanel from "@/components/SearchPanel";
import podcastCatalog from "@/components/PodcastCatalog.ts";


export default function Podcasts(): string {
    return `
    <section class="container podcasts">
        ${searchPanel()}
        ${podcastCatalog(podcasts.podcasts, authors.authors, "Neu")}
        ${podcastCatalog(podcasts.podcasts, authors.authors, "TOP-Podcasts")}
        ${podcastCatalog(podcasts.podcasts, authors.authors, "Gesundheit")}
        ${podcastCatalog(podcasts.podcasts, authors.authors, "Recht")}
    </section>`;
};
