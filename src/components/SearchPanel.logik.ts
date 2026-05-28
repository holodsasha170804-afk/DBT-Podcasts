import data from '@/data/categories.json';

const selectors = {
    root: '[data-ts-search-panel]',

    selectButton: '[data-ts-search-panel-button-select-category]',
    searchButton: '[data-ts-search-panel-button-search]',
    input: '[data-ts-search-panel-input]',

    dropdown: '[data-ts-search-panel-dropdown]',

    categoriesList: '[data-ts-dropdown-categories-list]',
    categoriesItem: '[data-ts-dropdown-categories-item]',

    subcategoriesList: '[data-ts-dropdown-subcategories-list]',
    subcategoriesItem: '[data-ts-dropdown-subcategories-item]',
};

// ========================================
// SEARCH PANEL
// ========================================

class SearchPanel {
    constructor(element: HTMLElement) {
        new SelectCategoryButton(element);
        new CategoriesDropdown(element);
    }
}

// ========================================
// SELECT CATEGORY BUTTON
// ========================================

class SelectCategoryButton {
    private root: HTMLElement;

    private selectButton: HTMLElement;
    private categoriesList: HTMLElement;
    private subcategoryList: HTMLElement;

    constructor(root: HTMLElement) {
        const selectButton =
            root.querySelector<HTMLElement>(selectors.selectButton);

        const categoriesList =
            root.querySelector<HTMLElement>(selectors.categoriesList);

        const subcategoryList =
            root.querySelector<HTMLElement>(selectors.subcategoriesList);

        if (
            !selectButton ||
            !categoriesList ||
            !subcategoryList
        ) {
            throw new Error(
                'CategoryButton: missing required DOM elements'
            );
        }

        this.root = root;

        this.selectButton = selectButton;
        this.categoriesList = categoriesList;
        this.subcategoryList = subcategoryList;

        this.bindEvents();
    }

    private bindEvents(): void {
        this.selectButton.addEventListener(
            'click',
            this.onButtonClick
        );

        document.addEventListener(
            'click',
            this.onOutsideClick
        );
    }

    private onButtonClick = (): void => {
        this.categoriesList.classList.toggle('is-expanded');

        this.closeSubcategories();
    };

    private onOutsideClick = (
        event: MouseEvent
    ): void => {
        const target = event.target as HTMLElement;

        const dropdown =
            this.root.querySelector<HTMLElement>(
                selectors.dropdown
            );

        const selectButton =
            this.root.querySelector<HTMLElement>(
                selectors.selectButton
            );

        if (!dropdown || !selectButton) return;

        const isInsideDropdown =
            dropdown.contains(target);

        const isButton =
            selectButton.contains(target);

        if (isInsideDropdown || isButton) return;

        this.closeAll();
    };

    private closeAll(): void {
        this.categoriesList.classList.remove('is-expanded');

        this.closeSubcategories();
    }

    private closeSubcategories(): void {
        this.subcategoryList.classList.remove(
            'is-expanded'
        );

        setTimeout(() => {
            this.subcategoryList.innerHTML = '';
        }, 300);
    }
}

// ========================================
// CATEGORIES DROPDOWN
// ========================================

class CategoriesDropdown {

    private categoriesList: HTMLElement;
    private subcategoryList: HTMLElement;
    private selectButton: HTMLElement;

    constructor(root: HTMLElement) {
        const categoriesList =
            root.querySelector<HTMLElement>(
                selectors.categoriesList
            );

        const subcategoryList =
            root.querySelector<HTMLElement>(
                selectors.subcategoriesList
            );

        const selectButton =
            root.querySelector<HTMLElement>(
                selectors.selectButton
            );

        if (
            !categoriesList ||
            !subcategoryList ||
            !selectButton
        ) {
            throw new Error(
                'CategoryDropdown: missing required DOM elements'
            );
        }

        this.categoriesList = categoriesList;
        this.subcategoryList = subcategoryList;
        this.selectButton = selectButton;

        this.bindEvents();
    }

    private bindEvents(): void {
        this.categoriesList.addEventListener(
            'click',
            this.onCategoryClick
        );

        this.subcategoryList.addEventListener(
            'click',
            this.onSubcategoryClick
        );
    }

    // ========================================
    // CATEGORY CLICK
    // ========================================

    private onCategoryClick = (
        event: MouseEvent
    ): void => {
        const target = (
            event.target as HTMLElement
        ).closest<HTMLElement>(selectors.categoriesItem);

        if (!target) return;

        const key = target.dataset.categoryKey;

        if (!key) return;

        this.renderSubcategories(key as keyof typeof data.categories);
    };

    // ========================================
    // SUBCATEGORY CLICK
    // ========================================

    private onSubcategoryClick = (
        event: MouseEvent
    ): void => {
        const target = (
            event.target as HTMLElement
        ).closest<HTMLElement>(selectors.subcategoriesItem);

        if (!target) return;

        const category = target.dataset.categoryValue;

        if (!category) return;

        this.selectButton.innerHTML = `<h3 class="search-panel__button-categories-title">${category}</h3>`;

        // close subcategories
        this.subcategoryList.classList.remove(
            'is-expanded'
        );

        // close categories
        this.categoriesList.classList.remove(
            'is-expanded'
        );

        // clear subcategories after animation
        setTimeout(() => {
            this.subcategoryList.innerHTML = '';
        }, 300);
    };

    // ========================================
    // RENDER
    // ========================================

    private renderSubcategories(
        key: keyof typeof data.categories
    ): void {
        const subcategories = Object.entries(
            data.categories[key].subcategories
        );

        this.subcategoryList.innerHTML = subcategories
            .map(([id, category]) => {
                return `
                    <li class="categories__item">
                        <button
                            type="button"
                            class="categories__title"
                            data-ts-dropdown-subcategories-item
                            data-category-value="${category}"
                        >
                            ${id} ${category}
                        </button>
                    </li>
                `;
            })
            .join('');

        this.subcategoryList.classList.add(
            'is-expanded'
        );
    }
}

// ========================================
// COLLECTION
// ========================================

export default class SearchPanelCollection {
    constructor() {
        this.init();
    }

    private init(): void {
        document
            .querySelectorAll<HTMLElement>(
                selectors.root
            )
            .forEach((element) => {
                new SearchPanel(element);
            });
    }
}