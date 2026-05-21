import type {NavigationItem} from "@/types.ts";
import { renderNavigation } from "@/utils/utils.ts";
import Logo from "@/assets/images/mycore_logo_powered.png"

const navigationFooter: NavigationItem[] = [
    {
        label: 'Impressum',
        href: '/',
        iconAfter: 'icon__after icon__after--pipe',
    },
    {
        label: 'Barrierefreiheit',
        href: '/',
        iconAfter: 'icon__after icon__after--pipe',
    },
    {
        label: 'Datenschutzerklärung',
        href: '/',
        iconAfter: 'icon__after icon__after--pipe',
    },
    {
        label: 'Kontakt',
        href: '/',
    },
]


export default function Footer(): string {
    return`
    <footer class="footer">
        <div class="container">
            <div class="footer__inner">
                ${renderNavigation(navigationFooter, "footer")}
                <p class="footer__copyright icon__after icon__after--blue-info-circle-fill">© 2000 - 2026 UrMEL. Alle Rechte vorbehalten.</p>
            </div>
            <div class="footer__extra">
                <a class="footer__powered-by" target="_blank" href="https://www.mycore.de/">                    
                    <img 
                        class="footer__logo-image"
                        src="${Logo}" 
                        alt="MyCore-Logo" 
                        width="120" height="35"
                        title="MyCore-Home-Page"
                    /></a>
            </div>
        </div>
    </footer>`;
}