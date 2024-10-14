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
    }
    
    // Función para mostrar la sección correspondiente
    function showSection(sectionId) {
      //const section = translations[sectionId];
      switch (sectionId) {
        case "accueil":
              mainContent.innerHTML = cargarAccueilContent();
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