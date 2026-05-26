import data from '@/data/categories.json';

export default function SearchPanel(): string {
    return `
    <div class="container search-panel">
        <form class="search-panel__body">
            <div class="search-panel__panel">
                <button type="button" class="button search-panel__button-categories icon__before icon__before--white-arrow-caret-down-fill" data-ts-categories-button>Alle Kategorien</button>
                <input name="search" class="search-panel__input" placeholder="Suche in der Publicationen..."/>
                <button type="submit" class="search-panel__button-search button icon__before icon__before--white-search">Suchen</button> 
            </div>
            <div class="search-panel__select-categories categories" data-ts-categories>
                ${renderCategories("icon__after icon__after--chevron-right")}
                <ul class="categories__list" data-ts-subcategories-list></ul>
            </div>
        </form>
    </div>
    `
}

function renderCategories(buttonClasses: string = ''): string {
    return `
    <ul class="categories__list" data-ts-categories-list>
        ${Object.entries(data.categories)
            .map(([key, category])=> {
                return `
                    <li class="categories__item">
                        <button type="button" class="categories__title ${buttonClasses}" data-ts-categories-item data-category-key="${key}">
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

