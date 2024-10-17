export function cargarAccueilContent (traducc) {
    const accueilContent = `
        <article id="inicio" class="active">
            <div class="content">
                <div class="parafo-articulo">
                    <h2>
                        ${traducc.accueil.titulo}
                    </h2>
                    <h1>
                        SATYA DANIEL
                    </h1>
                    <p>
                        ${traducc.accueil.p1}
                    </p>
                    <p>
                        ${traducc.accueil.p2}
                    </p>
                    <p>                       
                        ${traducc.accueil.p3}
                    </p>
                </div>
                <div class="boton-articulo">
                    <button>
                        <a href="./src/contacto.html"> ${traducc.accueil.boton}</a>
                    </button>
                </div>
            </div>
            <div class="image">
                <img src="./assets/img/Satya modifé coupé.jpg" alt="Logo">  
            </div>
        </article>

        <div class="empresas-confian-container">
            <div class="empresas-confian">
                <h2>${traducc.accueil.tituloEnlace}</h2>
                <div class="logos-empresas">
                    <img src="./assets/img/logos/Dynamite-logo1648922779596.png" alt="Logo Empresa 1">
                    <img src="./assets/img/logos/glénat.png" alt="Logo Empresa 2">
                    <img src="./assets/img/logos/logo humanos.jpg" alt="Logo Empresa 3">
                    <img src="./assets/img/logos/logo Jungle.jpg" alt="Logo Empresa 4">
                    <img src="./assets/img/logos/logo metal hurlant.jpg" alt="Logo Empresa 5">
                    <img src="./assets/img/logos/logo paquet.jpg" alt="Logo Empresa 6">
                    <img src="./assets/img/logos/logo_dupuis_rouge3.png" alt="Logo Empresa 7">
                    <img src="./assets/img/logos/NHN_Corp_Logo.svg.png" alt="Logo Empresa 8">
                </div>
            </div>
        </div>
`;
    return accueilContent;
}