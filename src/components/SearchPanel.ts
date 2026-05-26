import data from '@/data/categories.json';

export default function SearchPanel(): string {
    return `
    <div class="container search-panel">
<<<<<<< HEAD
        <form class="search-panel__body">
            <div class="search-panel__panel">
                <button type="button" class="button search-panel__button-categories icon__before icon__before--white-arrow-caret-down-fill" data-ts-categories-button>Alle Kategorien</button>
                <input name="search" class="search-panel__input" placeholder="Suche in der Publicationen..."/>
                <button type="submit" class="search-panel__button-search button icon__before icon__before--white-search">Suchen</button> 
            </div>
            <div class="search-panel__select-categories categories">
                ${renderCategories()}
            </div>
        </form>
=======
        <div class="search-panel__body">
            <button type="button" class="button search-panel__button-categories icon__before icon__before--white-arrow-caret-down-fill">Alle Kategorien</button>
            <input type="text" class="search-panel__input" placeholder="Suche in der Publicationen..."/>
            <button type="button" class="search-panel__button-search button icon__before icon__before--white-search">Suchen</button>
        </div>
        <div class="search-panel__select-category categories">
            <div>This is Test</div>
        </div>
>>>>>>> af4442ae964faa662d47fd3f6daa6b746da355d4
    </div>
    `
}

function renderCategories(): string {
    return `
    <ul class="categories__list" data-ts-categories>
        ${Object.entries(data.categories)
            .map(([key, category])=> {
                return `
                    <li class="categories__item">
                        <button type="button" class="categories__title icon__after icon__after--chevron-right">
                            ${key + ' ' + category.name}
                        </button>
                    </li>
                `
            })
            .join('')
        }
    </ul>
    `;
}

