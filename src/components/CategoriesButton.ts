
export default class CategoriesButton {

    private button: HTMLElement | null ;
    private dropdown: HTMLElement | null;

    constructor() {
        this.button = document.querySelector('[data-ts-categories-button]');
        this.dropdown = document.querySelector('[data-ts-categories]');

        this.bindEvents();
    }

    private bindEvents() {
        this.button?.addEventListener("click", this.onButtonClick)
    }


    private onButtonClick = (): void =>  {
        this.dropdown?.classList.toggle('is-expanded');
    }
}