const selectors = {
    root: '[data-ts-podcast-catalog]',

    leftButton: '[data-ts-podcast-catalog-button-left]',
    rightButton: '[data-ts-podcast-catalog-button-right]',

    catalogList: '[data-ts-podcast-catalog-list]',
};

// ========================================
// PODCAST CATALOG
// ========================================

class PodcastCatalog {
    private root: HTMLElement;
    private leftButton: HTMLElement;
    private rightButton: HTMLElement;
    private catalog: HTMLElement;

    constructor(root: HTMLElement) {
        if (!root)
            throw new Error('PodcastCatalog: missing root DOM element');

        this.root = root;

        const leftButton = this.root.querySelector<HTMLElement>(selectors.leftButton);
        const rightButton = this.root.querySelector<HTMLElement>(selectors.rightButton);
        const catalogList = this.root.querySelector<HTMLElement>(selectors.catalogList);

        if (
            !leftButton ||
            !rightButton ||
            !catalogList
        ) {
            throw new Error('PodcastCatalog: missing required DOM elements');
        }

        this.leftButton = leftButton;
        this.rightButton = rightButton;
        this.catalog = catalogList;

        this.bindEvents()
    }

    onLeftButtonClick = (): void => {
        this.catalog.scrollLeft -= 768;
    }

    onRightButtonClick = (): void => {
        this.catalog.scrollLeft += 768;
    }

    bindEvents(): void {
        this.leftButton.addEventListener(
            'click',
            this.onLeftButtonClick
        );

        this.rightButton.addEventListener(
            'click',
            this.onRightButtonClick
        );
    }
}


// ========================================
// PODCAST CATALOG COLLECTION
// ========================================

export default class PodcastCatalogCollection {
    constructor() {
        this.init();
    }

    init(): void {
        document
            .querySelectorAll<HTMLElement>(selectors.root)
            .forEach((element) => {
            new PodcastCatalog(element);
            console.log("Element created");
            });
    }
}