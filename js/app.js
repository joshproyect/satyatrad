import { cargarTraducciones } from "./component/traducciones.js";
import { cargarTitulo768Content } from "./component/titulo768.js";
import { cargarMenuContent } from "./component/menu.js";
import { cargarEventClickLinks } from "./component/menu.js";
import { restaurarMenuHamburguesa } from "./component/menu.js";
import { cargarTituloContent } from "./component/titulo.js";
import { cargarAccueilContent } from "./component/accueil.js";
import { setUpArrowEvents } from "./component/carrusel.js";
//import { carruselAutoInicio } from "./component/carrusel.js";
import { cargarPortfolioContent } from "./component/portfolio.js";
import { cargarEventClickButtonsPortfolio } from "./component/portfolio.js";
import { cargarQuisuisjeContent } from "./component/quisuisje.js";
import { cargarContactoContent } from "./component/contacto.js";

export let traducc;

document.addEventListener('DOMContentLoaded', function() {
    
    document.querySelector('.logo-overlay').addEventListener('click', function() {
        restaurarMenuHamburguesa();
    });

    // Se añade el evento sobre el menú hamburguesa

    // Función para alternar la clase 'show' en el menú hamburguesa
    document.querySelector('.hamburguer').addEventListener('click', function() {
        document.querySelector('#menu-list').classList.toggle('show');
        document.querySelector('.hamburguer').classList.toggle('active');
    });

    // Se añade evento sobre el cambio de idioma
    document.getElementById('language').addEventListener('change', function() {  
        restaurarMenuHamburguesa();
        cargarTraducciones(document.getElementById('language').value)
            .then(traducciones => {
                traducc = traducciones;
                // Titulo oculto en pantallas superiores a 768px
                document.getElementById('titulo768').innerHTML = cargarTitulo768Content(traducc);
                // Menu
                document.getElementById('menu').innerHTML = cargarMenuContent(traducc);
                cargarEventClickLinks();
                // Titulo
                document.getElementById('titulo').innerHTML = cargarTituloContent(traducc);
                // Seccion-Pagina
                let sectionId = window.location.hash.substring(1);
                switch (sectionId) {
                    case "accueil":
                        document.getElementById('main-content').innerHTML = cargarAccueilContent(traducc);
                        setUpArrowEvents();  // Llama a la función para asignar eventos de las flechas
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
                // Cierra el menú al cambiar de página
                document.querySelector('#menu-list').classList.remove('show');
            })
            .catch(error => {
                console.error('Error en la carga de traducciones:', error);
            });

    });

    // Manejar el evento de cambio de hash en la URL
    window.addEventListener('hashchange', function() {
        restaurarMenuHamburguesa();
        // Seccion-Pagina
        let sectionId = window.location.hash.substring(1);
        if (typeof traducc === 'undefined') {
            cargarTraducciones(selectedOption.textContent)
                .then(traducciones => {
                    traducc = traducciones;
                    switch (sectionId) {
                        case "accueil":
                            document.getElementById('main-content').innerHTML = cargarAccueilContent(traducc);
                            setUpArrowEvents();  // Llama a la función para asignar eventos de las flechas
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
                    // Cierra el menú al cambiar de página
                    document.querySelector('#menu-list').classList.remove('show');
                })
                .catch(error => {
                    console.error('Error en la carga de traducciones:', error);
                });
        } else {
            switch (sectionId) {
                case "accueil":
                    document.getElementById('main-content').innerHTML = cargarAccueilContent(traducc);
                    setUpArrowEvents();  // Llama a la función para asignar eventos de las flechas
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
            // Cierra el menú al cambiar de página
            document.querySelector('#menu-list').classList.remove('show');
        }
    });

    // Sección de inicio   
    window.location.hash = "accueil";
    restaurarMenuHamburguesa();
    cargarTraducciones(document.getElementById('language').value)

        .then(traducciones => {
            traducc = traducciones;
            // Titulo oculto en pantallas superiores a 768px
            document.getElementById('titulo768').innerHTML = cargarTitulo768Content(traducc);
            // Menu
            document.getElementById('menu').innerHTML = cargarMenuContent(traducc);
            cargarEventClickLinks();
            // Titulo
            document.getElementById('titulo').innerHTML = cargarTituloContent(traducc);
            // Seccion-Pagina
            let sectionId = window.location.hash.substring(1);
            switch (sectionId) {
                case "accueil":
                    document.getElementById('main-content').innerHTML = cargarAccueilContent(traducc);
                    setUpArrowEvents();
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
            // Cierra el menú al cambiar de página
            document.querySelector('#menu-list').classList.remove('show');
        })
        .catch(error => {
            console.error('Error en la carga de traducciones:', error);
        });
});

/* Desplazamiento horizontal del contenedor de logos: */
/*
function setUpArrowEvents() {       // Función para configurar los eventos de las flechas
    const logosContainer = document.getElementById('logosContainer');
    const leftArrow = document.getElementById('leftArrow');
    const rightArrow = document.getElementById('rightArrow');

    if (leftArrow && rightArrow && logosContainer) { // if para prevenir errores si no existen los elementos en el dom
        // Función para desplazar a la izquierda
        leftArrow.addEventListener('click', function() {
            logosContainer.scrollBy({
                left: -300, // Ajusta este valor según el ancho de los logos
                behavior: 'smooth'
            });
        });

        // Función para desplazar a la derecha
        rightArrow.addEventListener('click', function() {
            logosContainer.scrollBy({
                left: 300, // Ajusta este valor según el ancho de los logos
                behavior: 'smooth'
            });
        });
    }
}
*/
/* Apertura y cierre del menú hamburguesa */

document.addEventListener('DOMContentLoaded', function() {
    const hamburguesa = document.querySelector('.hamburguer');
    const enlaces = document.querySelector('#menu-list');

    // Función para alternar la clase 'show' en el menú
    function toggleMenu() {
        enlaces.classList.toggle('show');
        hamburguesa.classList.toggle('active');
    }

    // Función para cerrar el menú
    window.closeNav = function() {
        enlaces.classList.remove('show');
        hamburguesa.classList.remove('active');
    }

    // Event listener para el menú hamburguesa
    hamburguesa.addEventListener('click', toggleMenu);
});

