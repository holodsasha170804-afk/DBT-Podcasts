import type {NavigationItem} from "@/types.ts";


function renderNavigation(items: NavigationItem[], rootClass: string): string {
    return`
    <ul class="${rootClass}__menu">
        ${items.map((item) => {
            const classes = [
                item.iconBefore,
                item.iconAfter,
                item.extraClasses
            ]
                .filter(Boolean)
                .join(' ');

            return `
            <li class="${rootClass}__menu-item">
                <a 
                    class="${classes}"
                    href="${item.href}"
                >
                    ${item.label}
                </a>
            </li>
        `}).join('')}
    </ul>
    `
}

export { renderNavigation };