import Logo from "@/assets/images/dbt-logo.svg";

export default function Header() {
    return`
      <header class="header" data-js-header>
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
                    <ul class="header__menu">
                        <li class="header__menu-item">
                            <a class="icon__after icon__after--white-arrow-caret-down-fill" href="/">SUCHE</a>
                        </li>
                        <li class="header__menu-item">
                            <a class="icon__after icon__after--white-arrow-caret-down-fill" href="/">BLÄTTERN</a>
                        </li>
                        <li class="header__menu-item">
                            <a class="icon__after icon__after--white-arrow-caret-down-fill" href="/">SEMESTERAPPARATE</a>
                        </li>
                        <li class="header__menu-item">
                            <a class="icon__after icon__after--white-arrow-caret-down-fill" href="/">PUBLIZIEREN</a>
                        </li>
                    </ul>
                    <ul class="header__menu">
                        <li class="header__menu-item">
                            <a class="icon__after icon__before icon__after--white-arrow-caret-down-fill icon__before--white-bookmark-fill h4" href="/">0</a>
                        </li>
                        <li class="header__menu-item">
                            <a class="icon__before icon__before--white-question-circle-fill" href="/">FAQ</a>
                        </li>
                        <li class="header__menu-item">
                            <a class="icon__before icon__before--white-box-arrow-in-right" href="/">ANMELDEN</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="header__player">
            <div class="header__player-inner container">
           
            </div>
        </div>
      </header>
    `
}