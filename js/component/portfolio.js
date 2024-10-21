export function cargarPortfolioContent (traducc) {
    const portfolioContent = `
        <section id="portfolio" class="portfolio">
            <div class="filtros">
                <button class="filtro" data-filtro="tout">${traducc.portfolio.btn1}</button>
                <button class="filtro" data-filtro="bd">${traducc.portfolio.btn2}</button>
                <button class="filtro" data-filtro="roman-graphique">${traducc.portfolio.btn3}</button>
                <button class="filtro" data-filtro="webtoon">Webtoon</button>
                <button class="filtro" data-filtro="es-fr">ES>FR</button>
                <button class="filtro cat_fr" data-filtro="cat-fr">CAT>FR</button>
                <button class="filtro" data-filtro="en-fr">EN>FR</button>
            </div>
            <div class="mosaico">
                <div class="item" data-filtro="bd es-fr">
                    <a href="https://www.glenat.com/24x32-glenat-bd/le-premier-dumas-tome-03-9782344059975" target="_blank">
                        <img src="./assets/img/portadas/Le Premier Dumas T.3.jpeg" alt="Comic 1">
                    </a>
                </div>
                <div class="item" data-filtro="roman-graphique es-fr">
                    <a href="https://www.dupuis.com/seriebd/maree-haute/23981" target="_blank">
                        <img src="./assets/img/portadas/Marée Haute.jpg" alt="Comic 2">
                    </a>
                </div>
                <div class="item" data-filtro="bd es-fr">
                    <a href="https://www.humano.com/album/37907" target="_blank">
                        <img src="./assets/img/portadas/MH_CHATS_RVB_56625_R400.jpg" alt="Comic 3">
                    </a>
                </div>
                <div class="item" data-filtro="bd es-fr">
                    <a href="https://editionspaquet.com/catalogue/876-les-cinq-drapeaux-t1-liberte-egalite-fraternite-9782889324576.html" target="_blank">
                        <img src="./assets/img/portadas/5 drapeaux.jpg" alt="Comic 4">
                    </a>
                </div>
                <div class="item" data-filtro="bd es-fr">
                    <a href="https://www.dupuis.com/molly-wind/bd/molly-wind-tome-1-bibliothecaire-du-far-west/122194" target="_blank">
                        <img src="./assets/img/portadas/molly-wind-bibliothecaire-du-far.jpg" alt="Comic 5">
                    </a>
                </div>
                <div class="item" data-filtro="bd roman-graphique es-fr">
                    <a href="https://www.humano.com/serie/540" target="_blank">
                        <img src="./assets/img/portadas/PilleurCimetiere_Couv_56426_R400.jpg" alt="Comic 6">
                    </a>
                </div>
                <div class="item" data-filtro="bd es-fr">
                    <a href="https://www.glenat.com/24x32-glenat-bd/le-premier-dumas-tome-02-9782344054284" target="_blank">
                        <img src="./assets/img/portadas/Premier Dumas T.2.jpeg" alt="Comic 7">
                    </a>
                </div>
                <div class="item" data-filtro="bd es-fr">
                    <a href="https://www.glenat.com/24x32-glenat-bd/une-revolution-nommee-raspoutine-9782344050132" target="_blank">
                        <img src="./assets/img/portadas/revolution nommée raspoutine.jpg" alt="Comic 8">
                    </a>
                </div>
                <div class="item" data-filtro="bd es-fr">
                    <a href="https://www.glenat.com/24x32-glenat-bd/le-premier-dumas-tome-01-9782344045251" target="_blank">
                        <img src="./assets/img/portadas/premier dumas T.1 couv.jpeg" alt="Comic 9">
                    </a>
                </div>
                <div class="item" data-filtro="webtoon en-fr">
                    <a href="https://www.pocketcomics.com/comic/9769" target="_blank">
                        <img src="./assets/img/portadas/Destin doré au delà du temps.jpg" alt="Comic 10">
                    </a>
                </div>
                <div class="item" data-filtro="webtoon en-fr">
                    <a href="https://www.pocketcomics.com/comic/8642" target="_blank">
                        <img src="./assets/img/portadas/Mon destin était de te sauver.jpg" alt="Comic 11">
                    </a>
                </div>
                <div class="item" data-filtro="webtoon en-fr">
                    <a href="https://www.pocketcomics.com/comic/9754" target="_blank">
                        <img src="./assets/img/portadas/Ange à l_aura dorée.jpg" alt="Comic 12">
                    </a>
                </div>
                <div class="item" data-filtro="webtoon en-fr">
                    <a href="https://www.pocketcomics.com/comic/8297" target="_blank">
                        <img src="./assets/img/portadas/Monsieur, gardez vos distances.jpg" alt="Comic 13">
                    </a>
                </div>
                <div class="item" data-filtro="webtoon en-fr">
                    <a href="https://www.pocketcomics.com/comic/8055" target="_blank">
                        <img src="./assets/img/portadas/LA PRINCESSE FAIT ECOLE BUISSONNIERE HD.jpg" alt="Comic 14">
                    </a>
                </div>
            </div>
        </section>
    `;
    return portfolioContent;
}

export function cargarEventClickButtonsPortfolio (traducc) {
    const filtros = document.querySelectorAll('.filtro');
    const items = document.querySelectorAll('.item');

    filtros.forEach(filtro => {
        filtro.addEventListener('click', function() {
            const filtroSeleccionado = this.getAttribute('data-filtro');

            items.forEach(item => {
                if (filtroSeleccionado === 'tout' || item.getAttribute('data-filtro').includes(filtroSeleccionado)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
};
    
/* function filtrarPorCategoria(jsonData, categoria) {
    // Extraer el array de portfolio del JSON
    const portfolio = jsonData.portfolio;

    // Filtrar los objetos cuya categoría coincida con la especificada
    const resultado = portfolio.filter(item => item.cat.includes(categoria));

    return resultado;
} */
