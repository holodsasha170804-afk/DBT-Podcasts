
export default class SelectCategory {

    private button: HTMLElement;
    private categories: HTMLElement;
    private subcategories: HTMLElement;

    constructor() {
        const button = document.querySelector<HTMLElement>('[data-ts-categories-button]');
        const categories = document.querySelector<HTMLElement>('[data-ts-categories-list]');
        const subcategories = document.querySelector<HTMLElement>('[data-ts-subcategories-list]');

        if (!button || !categories || !subcategories) {
            throw new Error('SelectCategory: missing required DOM elements');
        }

        this.button = button;
        this.categories = categories;
        this.subcategories = subcategories;

        this.bindEvents();
    }

    private bindEvents(): void {
        this.button?.addEventListener("click", this.onButtonClick);
        document.addEventListener("click", this.onOutsideClick);
    }


    private onOutsideClick = (event: MouseEvent): void => {
        const target = event.target as HTMLElement;

        const isClickInside =
            this.categories.contains(target) ||
            this.button.contains(target);

        if (isClickInside) return;

        this.closeAll();
    };

    private closeAll(): void {
        this.categories.classList.remove('is-expanded');
        this.closeSubcategories();
    }

    private closeSubcategories(): void {
        this.subcategories.classList.remove('is-expanded');
        setTimeout(() => this.subcategories.innerHTML = ``, 600);
    }

    private onButtonClick = (): void =>  {
        this.categories?.classList.toggle('is-expanded');
        this.subcategories?.classList.remove('is-expanded');
        this.closeSubcategories();
    }
}