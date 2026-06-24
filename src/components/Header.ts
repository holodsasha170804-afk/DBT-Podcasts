import Logo from "@/assets/images/dbt-logo.svg";
import type {NavigationItem} from "@/types.ts";
import { renderNavigation } from "@/utils/utils.ts";
import player from "@/components/Player.ts";

const navigationPrimary: NavigationItem[] = [
    {
        label: 'SUCHE',
        href: '/',
        iconAfter: 'icon__after icon__after--white-arrow-caret-down-fill',
    },
    {
        label: 'BLÄTERN',
        href: '/',
        iconAfter: 'icon__after icon__after--white-arrow-caret-down-fill',
    },
    {
        label: 'SEMESTERAPPARATE',
        href: '/',
        iconAfter: 'icon__after icon__after--white-arrow-caret-down-fill',
    },
    {
        label: 'PUBLIZIEREN',
        href: '/',
        iconAfter: 'icon__after icon__after--white-arrow-caret-down-fill',
    },
];

const navigationSecondary: NavigationItem[] = [
    {
        label: '0',
        href: '/',
        iconBefore: 'icon__before icon__before--white-bookmark-fill',
        iconAfter: 'icon__after icon__after--white-arrow-caret-down-fill',
        extraClasses: 'h4',
    },
    {
        label: 'FAQ',
        href: '/',
        iconAfter: 'icon__before icon__before--white-question-circle-fill',
    },
    {
        label: 'ANMELDEN',
        href: '/',
        iconAfter: 'icon__before icon__before--white-box-arrow-in-right',
    },
];


const headerNavigation = {
    primary: navigationPrimary,
    secondary: navigationSecondary,
};

export default function Header(): string {
    return`
      <header class="header">
        <nav class="header__navbar">
            <div class="header__navbar-inner container">
                <a class="header__logo" href="/">
                    <img 
                        class="header__logo-image"
                        src="${Logo}" 
                        alt="DBT-Logo" 
                        width="150" height="105"
                        title="Home"
                    />
                </a>
                <div class="header__navbar-tabs">
                    ${renderNavigation(headerNavigation.primary, "header")}
                    ${renderNavigation(headerNavigation.secondary, "header")}
                </div>
            </div>
        </nav>
        <div class="header__player">
            <div class="header__player-inner container">
                ${player()}
            </div>
        </div>
      </header>
    `
}

