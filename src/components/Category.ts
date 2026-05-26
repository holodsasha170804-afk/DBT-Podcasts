import data from '@/data/categories.json';

const rootSelector = '[data-ts-categories-item]';

class Category {
    private buttonElement: HTMLElement;
    private subcategoryList: HTMLElement | null;

    private readonly selectors = {
        selectButton: '[data-ts-categories-button]',
        subcategoryList: '[data-ts-subcategories-list]',
        subcategoryItem: '[data-ts-subcategories-item]',
    };

    constructor(element: HTMLElement) {
        this.buttonElement = element;

        this.subcategoryList =
            document.querySelector<HTMLElement>(
                this.selectors.subcategoryList
            );

        this.bindEvents();
    }

    private onButtonClick = (): void => {
        this.renderSubcategories();
        this.onSubcategoryClick();
    };

    private renderSubcategories(): void {
        const key = this.buttonElement.dataset.categoryKey;

        if (!key) return;

        const subcategories:[string, string][]  = Object.entries(data.categories[key as keyof typeof data.categories].subcategories);

        if (!this.subcategoryList) return;

        this.subcategoryList.innerHTML = `
        ${subcategories.map(([key, category])=> {
            return `
                    <li class="categories__item">
                        <button type="button" class="categories__title" data-ts-subcategories-item data-category-value="${category}">
                            ${key} ${category}
                        </button>
                    </li>
                `
        })
            .join('')}
        `;

        this.subcategoryList.classList.add('is-expanded');
    }

    onSubcategoryClick = (): void => {
        const subcategoryItems: NodeListOf<HTMLElement> = document.querySelectorAll<HTMLElement>(this.selectors.subcategoryItem);

        subcategoryItems.forEach((item) => {
            item.addEventListener('click', (): void => {
                const category: string | undefined = item.dataset.categoryValue;
                const selectButton = document.querySelector<HTMLElement>(this.selectors.selectButton);

                if (!category) return;
                if (!selectButton) return;

                selectButton.textContent = category;

            });
        });
    }


    private bindEvents(): void {
        this.buttonElement.addEventListener(
            'click',
            this.onButtonClick
        );

    }
}

class CategoryCollection {
    constructor() {
        this.init();
    }

    private init(): void {
        document
            .querySelectorAll<HTMLElement>(rootSelector)
            .forEach((el) => {
                new Category(el);
            });
    }
}

export default CategoryCollection;