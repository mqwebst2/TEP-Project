class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div id="nav-bar">
        <div id="nav-bar__con">
          <div id="nav-bar__logo">
            <img src="./mw-logo.png" alt="Marques Webster" id="logo" />
          </div>

          <div id="nav-bar__menu">
            <nav id="nav-bar__menu-items">
              <ul class="menu-items__list">
                <li class="menu-items__list-item"><a href="#">Home</a></li>
                <li class="menu-items__list-item"><a href="#">About</a></li>
                <li class="menu-items__list-item"><a href="#">Resume</a></li>
                <li class="menu-items__list-item"><a href="#">Portfolio</a></li>
                <li class="menu-items__list-item"><a href="#">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('header-component', Header);
