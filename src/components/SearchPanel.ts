import data from '@/data/categories.json';

export default function searchPanel(): string {

    return `
    <div class="search-panel" data-ts-search-panel>
        <form class="search-panel__body">
            <div class="search-panel__panel">
                <button type="button" class="button search-panel__button-categories icon__before icon__before--white-arrow-caret-down-fill" data-ts-search-panel-button-select-category><h3 class="search-panel__button-categories-title">Alle Kategorien</h3> </button>
                <input name="search" class="search-panel__input" placeholder="Suche in der Publicationen..." data-ts-search-panel-input/>
                <button type="submit" class="search-panel__button-search button icon__before icon__before--white-search" data-ts-search-panel-button-search>Suchen</button> 
            </div>
            <div class="search-panel__select-categories categories" data-ts-search-panel-dropdown>
                ${renderCategories("icon__after icon__after--chevron-right")}
                <ul class="categories__list" data-ts-dropdown-subcategories-list></ul>
            </div>
        </form>
    </div>
    `
}

function renderCategories(buttonClasses: string = ''): string {
    return `
    <ul class="categories__list" data-ts-dropdown-categories-list>
        ${Object.entries(data.categories)
            .map(([key, category])=> {
                return `
                    <li class="categories__item">
                        <button type="button" class="categories__title ${buttonClasses}" data-ts-dropdown-categories-item data-category-key="${key}">
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

