export function cargarQuisuisjeContent (traducc) {
    const quisuisjeContent = `
        <article id="quiensoy" class="active">
                <div class="quiensoy-h">
                    <h2>${traducc.quisuisje.titulo1}</h2>
                    <h1>${traducc.quisuisje.titulo2}</h1>
                </div>
                <div class="content-quiensoy">
                    <div class="image-quiensoy">
                        <img src="./assets/img/retrato Mari Fouz.jpeg" alt="Mari Fouz">
                    </div>
                    <div class="quiensoy-p">
                        <p>${traducc.quisuisje.p1}</p>
                        <p>${traducc.quisuisje.p2}</p>
                        <p>${traducc.quisuisje.p3}</p>
                        <p>${traducc.quisuisje.p4}</p>
                        <p>${traducc.quisuisje.p5}</p>
                        <p>${traducc.quisuisje.p6}</p>
                    </div>
                </div>
        </article>
        
        <article id="educacion">
            <div class="formation">
                <h2>${traducc.quisuisje.titulo3}</h2>
                <ul>
                    <li>${traducc.quisuisje.li1}</li>
                    <li>${traducc.quisuisje.li2}</li>
                    <li>${traducc.quisuisje.li3}</li>
                    <li>${traducc.quisuisje.li4}</li>
                    <li>${traducc.quisuisje.li5}</li>
                    <li>${traducc.quisuisje.li6}</li>
                </ul>
            </div>
            <div class="servicios">
                <h2>${traducc.quisuisje.titulo4}</h2>
                <ul>
                    <li>${traducc.quisuisje.p7}</li>
                    <li>${traducc.quisuisje.p8}</li>
                    <li>${traducc.quisuisje.p9}</li>
                </ul>
            </div>
        </article>
    `;
    return quisuisjeContent;
}
