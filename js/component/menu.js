export function cargarMenuContent (traducc) {
    let menuContent = `
                <ul class="menu-list" id="menu-list">
                    <li><a href="#accueil" onclick="closeNav()">${traducc.headerMenu.accueil}</a></li>
                    <li><a href="#portfolio" onclick="closeNav()">${traducc.headerMenu.portfolio}</a></li>
                    <li><a href="#quisuisje" onclick="closeNav()">${traducc.headerMenu.quisuisje}</a></li>
                    <li><a href="#contacto" onclick="closeNav()">${traducc.headerMenu.contacto}</a></li>
                </ul>
    `;
    return menuContent;
}