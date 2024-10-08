document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('main-content');
    let translations = {};
  
    // Cargar las traducciones por defecto (español)
    fetchTranslations('es');
  
    // Función para cargar las traducciones desde un archivo JSON
    function fetchTranslations(language) {
      fetch(`locales/${language}.json`)
        .then(response => response.json())
        .then(data => {
          translations = data;
          handleRouteChange();
        })
        .catch(error => console.error('Error loading translations:', error));
    }
  
    // Función para mostrar la sección correspondiente
    function showSection(sectionId) {
      const section = translations[sectionId];
      if (section) {
        mainContent.innerHTML = `
          <section id="${sectionId}" class="active">
            <h1>${section.title}</h1>
            <p>${section.content}</p>
          </section>
        `;
      } else {
        mainContent.innerHTML = '';
      }
    }
  
    // Función para manejar el cambio de ruta
    function handleRouteChange() {
      const hash = window.location.hash.substring(1);
      showSection(hash);
    }
  
    // Manejar el evento de clic en los enlaces del menú
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const sectionId = this.getAttribute('href').substring(1);
        window.location.hash = sectionId;
        handleRouteChange();
      });
    });
  
    // Manejar el evento de cambio de idioma
    document.getElementById('language-select').addEventListener('change', function() {
      const selectedLanguage = this.value;
      fetchTranslations(selectedLanguage);
    });
  
    // Manejar el evento de cambio de hash en la URL
    window.addEventListener('hashchange', handleRouteChange);
  
    // Mostrar la sección correspondiente al cargar la página
    handleRouteChange();
  });