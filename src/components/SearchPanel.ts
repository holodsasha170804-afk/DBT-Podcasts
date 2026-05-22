export default function SearchPanel(): string {
    return `
    <div class="container search-panel">
        <div class="search-panel__body">
            <button type="button" class="button search-panel__button-categories icon__before icon__before--white-arrow-caret-down-fill">Alle Kategorien</button>
            <input type="text" class="search-panel__input" placeholder="Suche in der Publicationen..."/>
            <button type="button" class="search-panel__button-search button icon__before icon__before--white-search">Suchen</button>
        </div>
        <div class="search-panel__select-category categories">
       
        </div>
    </div>
    `
}