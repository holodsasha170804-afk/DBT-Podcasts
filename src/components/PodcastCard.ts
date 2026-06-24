import type {Author, Podcast} from "@/types.ts";


export default function PodcastCard(
    podcast: Podcast,
    authors: Author[]
): string {
    return `
        <li class="podcast-catalog__list-item">
            <a href="/" class="podcast-card">
                <button class="podcast-card__button" type="button">
                    <svg class="podcast-card__play-circle" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M38 19C38 29.4934 29.4934 38 19 38C8.50659 38 0 29.4934 0 19C0 8.50659 8.50659 0 19 0C29.4934 0 38 8.50659 38 19ZM16.1277 12.0962C15.7658 11.8376 15.2896 11.8031 14.8941 12.0066C14.4986 12.2102 14.25 12.6177 14.25 13.0625V24.9375C14.25 25.3823 14.4986 25.7898 14.8941 25.9934C15.2896 26.1969 15.7658 26.1624 16.1277 25.9038L24.4402 19.9663C24.7523 19.7434 24.9375 19.3835 24.9375 19C24.9375 18.6165 24.7523 18.2566 24.4402 18.0337L16.1277 12.0962Z" fill="#058555"/>
                        <path d="M19 0.5C29.2173 0.5 37.5 8.78273 37.5 19C37.5 29.2173 29.2173 37.5 19 37.5C8.78273 37.5 0.5 29.2173 0.5 19C0.5 8.78273 8.78273 0.5 19 0.5ZM16.418 11.6895C15.9036 11.3222 15.227 11.2733 14.665 11.5625C14.1032 11.8518 13.75 12.4305 13.75 13.0625V24.9375C13.75 25.5695 14.1032 26.1482 14.665 26.4375C15.227 26.7267 15.9036 26.6778 16.418 26.3105L24.7305 20.373C25.1739 20.0563 25.4375 19.545 25.4375 19C25.4375 18.455 25.1739 17.9437 24.7305 17.627L16.418 11.6895Z" stroke="black" stroke-opacity="0.6" stroke-linejoin="round"/>
                    </svg>
                </button>
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