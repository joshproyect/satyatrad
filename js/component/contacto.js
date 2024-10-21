export function cargarContactoContent (traducc) {
    const contactoContent = `
        <section id="contacto" class="contacto">
            <div class="contacto-info">
                <h2>SATYA DANIEL</h2>
                <ul>
                    <li>
                        <strong><i class="fas fa-map-marker-alt"></i>${traducc.contacto.strong4}</strong> 
                        <span>${traducc.contacto.span1}</span>
                    </li>
                    <li>
                        <strong><i class="fas fa-envelope"></i>${traducc.contacto.strong1}</strong> 
                        <span><a href="mailto:satya.daniel@yahoo.fr">satya.daniel@yahoo.fr</a></span>
                    </li>
                    <!-- De momento prefiere no poner el telefono
                    <li>
                        <strong><i class="fas fa-phone"></i>${traducc.contacto.strong2}</strong> 
                        <span>(+34) 666 95 80 84</span>
                    </li>
                    <li>
                        <strong><i class="fas fa-phone"></i>${traducc.contacto.strong3}</strong> 
                        <span>(+34) 639 00 22 38</span>
                    </li>
                    -->
                    <li>
                        <strong><i class="fab fa-linkedin"></i>${traducc.contacto.strong5}</strong> 
                        <span><a href="https://www.linkedin.com/in/satya-daniel-traductrice-bd" target="_blank">www.linkedin.com/in/satya-daniel-traductrice-bd</a></span>
                    </li>
                    <li>
                        <strong><i class="fab fa-instagram"></i>Instagram :</strong> 
                        <span><a href="https://www.instagram.com/satyatrad/?hl=fr" target="_blank">https://www.instagram.com/satyatrad/?hl=fr</a></span>
                    </li>
                </ul>
            </div>
        </section>

        <section id="colaboradores" class="colaboradores">
            <div class="enlaces">
                <h2>${traducc.contacto.titulo1}</h2>
            </div>
            <div class="div-colaboradores">
                <div class="colaborador">
                    <a href="https://www.laurentbonneau.com/" target="_blank">
                        <h3>Laurent Bonneau</h3>
                        <p>${traducc.contacto.p1}</p>
                    </a>
                </div>
                <div class="colaborador">
                    <a href="https://marifouz.com/" target="_blank">
                        <h3>Mari Fouz</h3>
                        <p>${traducc.contacto.p2}</p>
                    </a>
                </div>
                <div class="colaborador">
                    <a href="https://www.linkedin.com/in/xavier-lamiel-b1491918/" target="_blank">
                        <h3>Xavier Lamiel</h3>
                        <p>${traducc.contacto.p3}</p>
                    </a>
                </div>
                <div class="colaborador">
                    <a href="https://www.linkedin.com/in/davide-maulella-555b3a215/" target="_blank">
                        <h3>Davide Maulella</h3>
                        <p>${traducc.contacto.p4}</p>
                    </a>
                </div>
            </div>
        </section>
`;
    return contactoContent;
}