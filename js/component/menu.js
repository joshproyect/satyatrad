export function cargarMenuContent (traducc) {
    let menuContent = `
                <ul class="menu-list" id="menu-list">
                    <li><a href="#accueil">${traducc.headerMenu.accueil}</a></li>
                    <li><a href="#portfolio">${traducc.headerMenu.portfolio}</a></li>
                    <li><a href="#quisuisje">${traducc.headerMenu.quisuisje}</a></li>
                    <li><a href="#contacto" >${traducc.headerMenu.contacto}</a></li>
                </ul>
    `;
    return menuContent;
}

// Cerrar menu hamburguesa
export function cargarEventClickLinks (traducc) {
    document.querySelectorAll('#manu-list > a').forEach(a => {
        a.addEventListener('click', function() {
            document.querySelector('#menu-list').classList.remove('show');
        });
    });
};