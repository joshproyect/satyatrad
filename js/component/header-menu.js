export function cargarMenuContent (traducc) {
    let menuContent = `
            <ul>
                <li><a href="#accueil">${traducc.headerMenu.accueil}</a></li>
                <li><a href="#portfolio">${traducc.headerMenu.portfolio}</a></li>
                <li><a href="#quisuisje">${traducc.headerMenu.quisuisje}</a></li>
                <li><a href="#contacto">${traducc.headerMenu.contacto}</a></li>
            </ul>
    `;
    return menuContent;
}