import { cargarAccueilContent } from "./component/accueil.js";
import { cargarPortfolioContent } from "./component/portfolio.js";
import { cargarEventClickButtonsPortfolio } from "./component/portfolio.js"
import { cargarQuisuisjeContent } from "./component/quisuisje.js";
import { cargarContactoContent } from "./component/contacto.js";

document.addEventListener('DOMContentLoaded', function() {
  
  const mainContent = document.getElementById('main-content');
    let translations = {};

    // Sección de inicio
    window.location.hash = "accueil";

    // Manejar el evento de cambio de hash en la URL
    window.addEventListener('hashchange', handleRouteChange);

    // Manejar el evento de clic en los enlaces del menú
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const sectionId = this.getAttribute('href').substring(1);
        window.location.hash = sectionId;
        handleRouteChange();
      });
    });

    // Función para manejar el cambio de ruta
    function handleRouteChange() {
      const hash = window.location.hash.substring(1);
      showSection(hash);
      closeNav(); // Cierra el menú al cambiar de página
    }
    
    // Función para mostrar la sección correspondiente
    function showSection(sectionId) {
      //const section = translations[sectionId];
      switch (sectionId) {
        case "accueil":
              mainContent.innerHTML = cargarAccueilContent();
         
              setUpArrowEvents();  // Llama a la función para asignar eventos de las flechas
              break;
        case "portfolio":
              mainContent.innerHTML = cargarPortfolioContent();
              cargarEventClickButtonsPortfolio();
              break;
        case "quisuisje":
            mainContent.innerHTML = cargarQuisuisjeContent();
            break;
        case "contacto":
              mainContent.innerHTML = cargarContactoContent();
              break;
        default:
              mainContent.innerHTML = 'Error al cargar sección';
      }
    }
  
  
    // Mostrar la sección correspondiente al cargar la página
    handleRouteChange();
  });


/* Desplazamiento horizontal del contenedor de logos: */
 // document.addEventListener('DOMContentLoaded', function() {
function setUpArrowEvents() {       // Función para configurar los eventos de las flechas

    const logosContainer = document.getElementById('logosContainer');
    const leftArrow = document.getElementById('leftArrow');
    const rightArrow = document.getElementById('rightArrow');

   if (leftArrow && rightArrow && logosContainer) {//if para prevenir errores si no existen los elementos en el dom
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
   //}); //estos venian del DomContentLoaded

/* Apertura y cierre del menú hamburguesa */
document.addEventListener('DOMContentLoaded', function() {
    const hamburguesa = document.querySelector('.hamburguer');
    const enlaces = document.querySelector('#menu-list');

    // Función para alternar la clase 'show' en el menú
    function toggleMenu() {
      enlaces.classList.toggle('show');
  }

    // Función para cerrar el menú
    window.closeNav = function() {
      enlaces.classList.remove('show');
  }

  // Event listener para el menú hamburguesa
  hamburguesa.addEventListener('click', toggleMenu);

});
