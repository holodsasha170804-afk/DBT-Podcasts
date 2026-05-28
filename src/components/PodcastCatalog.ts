import PodcastCard from "@/components/PodcastCard.ts";
import type {Author, Podcast} from "@/types.ts";

export default function podcastCatalog(podcasts: Podcast[], authors: Author[], title: string): string {
    return `
        <div class="podcast-catalog" data-ts-podcast-catalog>
            <a href="/" class="h1 podcast-catalog__look-more icon__after icon__after--chevron-right" data-ts-podcast-catalog-look-more>
                ${title}
            </a>
            <div class="podcast-catalog__carousel carousel">
                <button class="podcast-catalog__button-left icon__before icon__before--chevron-right" data-ts-podcast-catalog-button-left></button>
                <ul class="podcast-catalog__list" data-ts-podcast-catalog-list>
                    ${getPodcastCards(podcasts, authors)}
                </ul>
                <button class="podcast-catalog__button-right icon__after icon__after--chevron-right" data-ts-podcast-catalog-button-right></button>
            </div>
        </div>
        `;
}

function getPodcastCards(podcasts: Podcast[], authors: Author[]){
    return podcasts.map((podcast) => PodcastCard(podcast, authors)).join('');
}