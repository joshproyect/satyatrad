import { cargarTraducciones } from "./component/traducciones.js";
import { cargarTituloContent } from "./component/header-titulo.js";
import { cargarAccueilContent } from "./component/accueil.js";
import { cargarPortfolioContent } from "./component/portfolio.js";
import { cargarEventClickButtonsPortfolio } from "./component/portfolio.js"
import { cargarQuisuisjeContent } from "./component/quisuisje.js";
import { cargarContactoContent } from "./component/contacto.js";
import { cargarMenuContent } from "./component/header-menu.js";

export let traducc;

document.addEventListener('DOMContentLoaded', function() {

    // Se añado evento sobre el cambio de idioma
    document.getElementById('language').addEventListener('change', function() {    
        cargarTraducciones(document.getElementById('language').value)
            .then(traducciones => {
                traducc = traducciones;
                // Menu
                document.getElementById('header-menu').innerHTML = cargarMenuContent(traducc);
                // Titulo
                document.getElementById('header-titulo').innerHTML = cargarTituloContent(traducc);
                // Seccion-Pagina
                let sectionId = window.location.hash.substring(1);
                switch (sectionId) {
                    case "accueil":
                        document.getElementById('main-content').innerHTML = cargarAccueilContent(traducc);
                        break;
                    case "portfolio":
                        document.getElementById('main-content').innerHTML = cargarPortfolioContent(traducc);
                        cargarEventClickButtonsPortfolio(traducc);
                        break;
                    case "quisuisje":
                        document.getElementById('main-content').innerHTML = cargarQuisuisjeContent(traducc);
                        break;
                    case "contacto":
                        document.getElementById('main-content').innerHTML = cargarContactoContent(traducc);
                        break;
                    default:
                        document.getElementById('main-content').innerHTML = 'Error al cargar sección';
                }                
            })
            .catch(error => {
                console.error('Error en la carga de traducciones:', error);
            });
    });

    // Manejar el evento de clic en los enlaces del menú
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            window.location.hash = sectionId;
            if (typeof traducc === 'undefined') {
                cargarTraducciones(document.getElementById('language').value)
                    .then(traducciones => {
                        traducc = traducciones;
                        switch (sectionId) {
                            case "accueil":
                                document.getElementById('main-content').innerHTML = cargarAccueilContent(traducc);
                                break;
                            case "portfolio":
                                document.getElementById('main-content').innerHTML = cargarPortfolioContent(traducc);
                                cargarEventClickButtonsPortfolio(traducc);
                                break;
                            case "quisuisje":
                                document.getElementById('main-content').innerHTML = cargarQuisuisjeContent(traducc);
                                break;
                            case "contacto":
                                document.getElementById('main-content').innerHTML = cargarContactoContent(traducc);
                                break;
                            default:
                                document.getElementById('main-content').innerHTML = 'Error al cargar sección';
                        }                
                    })
                    .catch(error => {
                        console.error('Error en la carga de traducciones:', error);
                    });
            } else {
                switch (sectionId) {
                    case "accueil":
                        document.getElementById('main-content').innerHTML = cargarAccueilContent(traducc);
                        break;
                    case "portfolio":
                        document.getElementById('main-content').innerHTML = cargarPortfolioContent(traducc);
                        cargarEventClickButtonsPortfolio(traducc);
                        break;
                    case "quisuisje":
                        document.getElementById('main-content').innerHTML = cargarQuisuisjeContent(traducc);
                        break;
                    case "contacto":
                        document.getElementById('main-content').innerHTML = cargarContactoContent(traducc);
                        break;
                    default:
                        document.getElementById('main-content').innerHTML = 'Error al cargar sección';
                }      
            }
        });
    });

    // Manejar el evento de cambio de hash en la URL
    window.addEventListener('hashchange', function() {
        // Seccion-Pagina
        let sectionId = window.location.hash.substring(1);
        if (typeof traducc === 'undefined') {
            cargarTraducciones(document.getElementById('language').value)
                .then(traducciones => {
                    traducc = traducciones;
                    switch (sectionId) {
                        case "accueil":
                            document.getElementById('main-content').innerHTML = cargarAccueilContent(traducc);
                            break;
                        case "portfolio":
                            document.getElementById('main-content').innerHTML = cargarPortfolioContent(traducc);
                            cargarEventClickButtonsPortfolio(traducc);
                            break;
                        case "quisuisje":
                            document.getElementById('main-content').innerHTML = cargarQuisuisjeContent(traducc);
                            break;
                        case "contacto":
                            document.getElementById('main-content').innerHTML = cargarContactoContent(traducc);
                            break;
                        default:
                            document.getElementById('main-content').innerHTML = 'Error al cargar sección';
                    }                
                })
                .catch(error => {
                    console.error('Error en la carga de traducciones:', error);
                });
        } else {
            switch (sectionId) {
                case "accueil":
                    document.getElementById('main-content').innerHTML = cargarAccueilContent(traducc);
                    break;
                case "portfolio":
                    document.getElementById('main-content').innerHTML = cargarPortfolioContent(traducc);
                    cargarEventClickButtonsPortfolio(traducc);
                    break;
                case "quisuisje":
                    document.getElementById('main-content').innerHTML = cargarQuisuisjeContent(traducc);
                    break;
                case "contacto":
                    document.getElementById('main-content').innerHTML = cargarContactoContent(traducc);
                    break;
                default:
                    document.getElementById('main-content').innerHTML = 'Error al cargar sección';
            }      
        }
    });


    // Sección de inicio   
    window.location.hash = "accueil";
    cargarTraducciones(document.getElementById('language').value)
        .then(traducciones => {
            traducc = traducciones;
            // Menu
            document.getElementById('header-menu').innerHTML = cargarMenuContent(traducc);
            // Titulo
            document.getElementById('header-titulo').innerHTML = cargarTituloContent(traducc);
            // Seccion-Pagina
            let sectionId = window.location.hash.substring(1);
            switch (sectionId) {
                case "accueil":
                    document.getElementById('main-content').innerHTML = cargarAccueilContent(traducc);
                    break;
                case "portfolio":
                    document.getElementById('main-content').innerHTML = cargarPortfolioContent(traducc);
                    cargarEventClickButtonsPortfolio(traducc);
                    break;
                case "quisuisje":
                    document.getElementById('main-content').innerHTML = cargarQuisuisjeContent(traducc);
                    break;
                case "contacto":
                    document.getElementById('main-content').innerHTML = cargarContactoContent(traducc);
                    break;
                default:
                    document.getElementById('main-content').innerHTML = 'Error al cargar sección';
            }                
        })
        .catch(error => {
            console.error('Error en la carga de traducciones:', error);
        });

});
