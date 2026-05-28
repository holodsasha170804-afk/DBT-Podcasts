import type {Author, Podcast} from "@/types.ts";


export default function PodcastCard(
    podcast: Podcast,
    authors: Author[]
): string {
    return `
        <li class="podcast-catalog__list-item">
            <a href="/" class="podcast-card">
                <img class="podcast-card__image" loading="lazy" src="${podcast.posterUrl}" alt="" width="200" height="200">
                <div class="podcast-card__content">
                    <h3 class="podcast-card__title">${podcast.title}</h3>
                    <h3 class="h4 podcast-card__author">${podcast.authorIds.map((id) => getAuthorNames(id, authors)).join(', ')}</h3>
                    <div class="podcast-card__extra">
                        <div class="podcast-card__extra-episode icon__before icon__before--black-headphones">${getEpisodesCount(podcast.episodes.length)}</div>
                        <div class="podcast-card__extra-average icon__before icon__before--yellow-star-fill">${podcast.ratings.average}</div>
                    </div>
                </div>
            </a>
        </li>
        `;
}


function getAuthorNames(id: string, authors: Author[]):string {
    return `${authors.find((author: Author) => author.id === id)?.name}`;
}

function getEpisodesCount(count: number): string {
    return `${count} ${count === 1 ? 'Folge' : 'Folgen'}`;
}