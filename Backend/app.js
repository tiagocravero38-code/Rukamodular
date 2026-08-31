document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. DICCIONARIO DE TRADUCCIONES COMPLETO ---
    const translations = {
        'Spanish': {
            'nav-modules': 'Módulos',
            'nav-about': 'Nosotros',
            'nav-contact': 'Contacto',
            'nav-queries': 'Consultas',
            'bottom-text': 'SE ADAPTA A VOS',
            'intro-title': 'DISEÑO Y CONSTRUCCIÓN DE <br> ARQUITECTURA MODULAR',
            'intro-desc': 'En RUKA MODULAR, diseñamos y producimos módulos habitables versátiles, transportables y eficientes, pensados para experiencias turísticas, inversión inmobiliaria, vivienda permanente o ampliaciones rápidas. Hacemos arquitectura responsable, que privilegia la calidad del espacio, el diseño minimalista y el respeto por el entorno.',
            'intro-link': 'Conocé nuestros módulos',
            
            // Textos RUKA MONOAMBIENTE
            'mono-title': 'RUKA MONOAMBIENTE',
            'mono-desc': 'Pensado para quienes buscan una solución compacta, funcional y estética, sin resignar confort ni calidad constructiva. Ideal para turismo, uso residencial temporal o permanente, estudios, oficinas o espacios de retiro.',
            'mono-tour-text': 'Ingresá al recorrido virtual:',
            'mono-price': 'Desde U$D 26.900 + IVA',
            
            // Textos RUKA 1 DORMITORIO
            'dor-title': 'RUKA I DORMITORIO',
            'dor-desc': 'Propone una forma de habitar simple y eficiente, separando claramente las áreas públicas y privadas, sin perder la relación con el entorno. Un refugio contemporáneo, cálido y funcional.',
            'dor-tour-text': 'Ingresá al recorrido virtual:',
            'dor-price': 'Desde U$D 37.900 + IVA',

            // Textos RUKA QUINCHO
            'quincho-title': 'RUKA QUINCHO',
            'quincho-desc': 'Un espacio de reunión y disfrute, donde el interior y el exterior se integran de forma natural. Un módulo versátil, funcional y de fuerte identidad, ideal para acompañar viviendas, complejos turísticos o casas de fin de semana.',
            'quincho-tour-text': 'Ingresá al recorrido virtual:',
            'quincho-price': 'Desde U$D 41.900 + IVA',

            // Textos NOSOTROS (CONOCENOS)
            'about-title': 'CONOCENOS',
            'about-subtitle': 'NOSOTROS',
            'about-p1': 'Hola, somos un equipo de profesionales emprendedores con una profunda pasión por la arquitectura y un compromiso con la excelencia. Nos enfocamos en realizar un acompañamiento integral a nuestros clientes, desde la idea hasta la instalación.',
            'about-p2': 'Nuestro objetivo es ser una alternativa inteligente, sustentable y accesible en soluciones modulares para habitar, invertir o expandirse, combinando el diseño, la funcionalidad y la conexión con el entorno.',
            'about-p3': 'Aspiramos a transformar la manera en que las personas conciben el espacio: más simple, flexible, natural, con estilo y calidad.',
            'about-team': 'BRUNO, LUIS Y MARIA',

            // Textos DETALLES INTERIORES
            'interior-title': 'DETALLES DE LOS INTERIORES',
            'interior-subtitle': 'MATERIALES DE ALTA CALIDAD, TERMINACIONES CUIDADAS, GARANTIZANDO CONFORT, ESTÉTICA Y SEGURIDAD.',

            // Textos TESTIMONIOS
            'test-sub-1': '"Buscábamos algo simple, rápido y que se integrara al paisaje"',
            'test-text-1': 'ELEGIMOS RUKA MODULAR PARA INICIAR NUESTRO PROYECTO TURÍSTICO Y FUE UNA GRAN DECISIÓN. EL DISEÑO ES FUNCIONAL, CÁLIDO Y SE ADAPTA PERFECTAMENTE AL ENTORNO NATURAL. VALORAMOS MUCHO EL ACOMPAÑAMIENTO PROFESIONAL EN TODO EL PROCESO, DESDE LA IDEA INICIAL HASTA EL MONTAJE. HOY EL MÓDULO ES UNO DE LOS MÁS ELEGIDOS POR NUESTROS HUÉSPEDES.',
            'test-sub-2': '"Una forma distinta de habitar"',
            'test-text-2': 'QUERÍAMOS UNA VIVIENDA PEQUEÑA, EFICIENTE Y BIEN DISEÑADA. RUKA NOS OFRECIÓ UNA SOLUCIÓN CLARA, SIN COMPLICACIONES Y CON UNA ESTÉTICA QUE NOS REPRESENTA. EL ESPACIO ESTÁ MUY BIEN APROVECHADO Y SE SIENTE CONFORTABLE TODO EL AÑO. DESTACAMOS LA CALIDAD CONSTRUCTIVA Y LA ATENCIÓN A LOS DETALLES.',
            'test-sub-3': '"Una inversión segura y bien pensada"',
            'test-text-3': 'APOSTAMOS POR RUKA MODULAR COMO PRIMERA EXPERIENCIA EN ALQUILER TEMPORARIO. LOS TIEMPOS DE ENTREGA FUERON CORTOS Y EL RESULTADO SUPERÓ NUESTRAS EXPECTATIVAS. EL MÓDULO TIENE MUY BUENA ACEPTACIÓN, BAJO MANTENIMIENTO Y UN DISEÑO QUE REALMENTE MARCA LA DIFERENCIA. SIN DUDAS, VOLVERÍAMOS A INVERTIR EN OTRO.',
            // Textos FAQ
            'dreams-title': 'CONSTRUIMOS TUS SUEÑOS',
            'faq-title': 'PREGUNTAS FRECUENTES',
            'faq-subtitle': 'Estamos aquí para ayudarte',
            'faq-q1': '¿CON QUÉ SISTEMA CONSTRUCTIVO ESTÁ REALIZADO?',
            'faq-a1': 'El módulo se construye con estructura metálica, cerramientos exteriores de chapa o siding, aislaciones térmicas y acústicas adecuadas, y revestimientos interiores en madera o durlock, logrando un equilibrio entre durabilidad, confort y estética.',
            'faq-q2': '¿EL MÓDULO SE PUEDE ADAPTAR O PERSONALIZAR?',
            'faq-a2': 'Sí. El diseño puede adaptarse según el terreno, el uso previsto y las necesidades del cliente. Se pueden evaluar cambios en aberturas, terminaciones, equipamiento y disposición interior.',
            'faq-q3': '¿QUÉ NO INCLUYE EL PRECIO DE MI REFUGIO?',
            'faq-a3': 'No está incluido el valor del traslado y montaje que se cotiza en función de la localización. Tampoco está incluida la preparación del terreno y de las bases de apoyo o platea, ni la acometida de los servicios de agua, electricidad y de desagüe cloacal hasta el punto de conexión pre-acordado.',
            'faq-q4': '¿INCLUYE EL TRASLADO Y EL MONTAJE?',
            'faq-a4': 'Sí, ofrecemos el servicio de traslado y montaje en el lugar, coordinando todo el proceso para una instalación rápida y eficiente.',
            'faq-q5': '¿CUÁNTO TIEMPO DEMORA LA ENTREGA?',
            'faq-a5': 'Los tiempos varían según el nivel de personalización y la demanda, pero al tratarse de un sistema modular, los plazos son significativamente menores a los de una obra tradicional.',
            'faq-q6': '¿SE PUEDE AMPLIAR EL MÓDULO EN EL FUTURO?',
            'faq-a6': 'Sí. El sistema modular permite ampliaciones o la incorporación de nuevos módulos en etapas, adaptándose al crecimiento del proyecto o del emprendimiento turístico.',
            // Textos BANNER FINAL
            'final-banner-title': 'Construir simple, vivir mejor.',
            'final-banner-desc': 'La arquitectura modular permite construir en menos tiempo, con costos claros y un alto nivel de calidad. Menos obra, menos incertidumbre y más resultados. Ruka Modular es una decisión inteligente para hoy y para el futuro.',
            // Textos CONTACTO
            'contact-title': 'HABLEMOS DE TU PROYECTO',
            'contact-name': 'Nombre',
            'contact-email': 'Email',
            'contact-phone': 'Teléfono',
            'contact-subject': 'Asunto',
            'contact-message': 'Mensaje',
            'contact-submit': 'ENVIAR',
            'contact-ph-name': '¿Cuál es tu nombre? *',
            'contact-ph-email': '¿Cuál es tu dirección de email? *',
            'contact-ph-phone': '¿Cuál es tu número de teléfono?',
            'contact-ph-subject': 'Asunto del mensaje',
            'contact-ph-message': 'Escribe tu mensaje aquí...',
            // Textos FOOTER
            'footer-title': 'PONTE EN CONTACTO',
            'footer-col1-title': 'CONTACTO',
            'footer-col2-title': 'HORARIOS',
            'footer-col2-text': 'Lunes a Viernes<br>9:00<br>a<br>17:00hs',
            'footer-col3-title': 'CONTACTS',
            // Texto WIDGET WHATSAPP
            'wa-message': 'Hola ¿Cómo puedo ayudarte?'
        },
        'English': {
            'nav-modules': 'Modules',
            'nav-about': 'About Us',
            'nav-contact': 'Contact',
            'nav-queries': 'Inquiries',
            'bottom-text': 'IT ADAPTS TO YOU',
            'intro-title': 'DESIGN AND CONSTRUCTION OF <br> MODULAR ARCHITECTURE',
            'intro-desc': 'At RUKA MODULAR, we design and produce versatile, transportable, and efficient habitable modules, designed for tourist experiences, real estate investment, permanent housing, or quick extensions. We create responsible architecture that prioritizes space quality, minimalist design, and respect for the environment.',
            'intro-link': 'Discover our modules',
            
            // Textos RUKA MONOAMBIENTE
            'mono-title': 'RUKA STUDIO',
            'mono-desc': 'Designed for those seeking a compact, functional, and aesthetic solution, without compromising comfort or construction quality. Ideal for tourism, temporary or permanent residential use, studios, offices, or retreat spaces.',
            'mono-tour-text': 'Enter the virtual tour:',
            'mono-price': 'From USD 26,900 + VAT',
            
            // Textos RUKA 1 DORMITORIO
            'dor-title': 'RUKA 1 BEDROOM',
            'dor-desc': 'Proposes a simple and efficient way of living, clearly separating public and private areas, without losing the relationship with the environment. A contemporary, warm, and functional refuge.',
            'dor-tour-text': 'Enter the virtual tour:',
            'dor-price': 'From USD 37,900 + VAT',

            // Textos RUKA QUINCHO
            'quincho-title': 'RUKA BARBECUE AREA',
            'quincho-desc': 'A space for gathering and enjoyment, where the interior and exterior integrate naturally. A versatile, functional module with a strong identity, ideal for accompanying homes, tourist complexes, or weekend houses.',
            'quincho-tour-text': 'Enter the virtual tour:',
            'quincho-price': 'From USD 41,900 + VAT',

            // Textos NOSOTROS (CONOCENOS)
            'about-title': 'GET TO KNOW US',
            'about-subtitle': 'ABOUT US',
            'about-p1': 'Hello, we are a team of entrepreneurial professionals with a deep passion for architecture and a commitment to excellence. We focus on providing comprehensive support to our clients, from the idea to the installation.',
            'about-p2': 'Our goal is to be a smart, sustainable, and accessible alternative in modular solutions for living, investing, or expanding, combining design, functionality, and connection with the environment.',
            'about-p3': 'We aspire to transform the way people conceive space: simpler, more flexible, natural, with style and quality.',
            'about-team': 'BRUNO, LUIS AND MARIA',

            // Textos DETALLES INTERIORES
            'interior-title': 'INTERIOR DETAILS',
            'interior-subtitle': 'HIGH-QUALITY MATERIALS, CAREFUL FINISHES, GUARANTEEING COMFORT, AESTHETICS, AND SECURITY.',

            // Textos TESTIMONIOS 
            'test-sub-1': '"We were looking for something simple, fast, and that integrated into the landscape"',
            'test-text-1': 'WE CHOSE RUKA MODULAR TO START OUR TOURIST PROJECT AND IT WAS A GREAT DECISION. THE DESIGN IS FUNCTIONAL, WARM, AND ADAPTS PERFECTLY TO THE NATURAL ENVIRONMENT. WE HIGHLY VALUE THE PROFESSIONAL SUPPORT THROUGHOUT THE PROCESS, FROM THE INITIAL IDEA TO THE ASSEMBLY. TODAY THE MODULE IS ONE OF THE MOST CHOSEN BY OUR GUESTS.',
            'test-sub-2': '"A different way of living"',
            'test-text-2': 'WE WANTED A SMALL, EFFICIENT, AND WELL-DESIGNED HOME. RUKA OFFERED US A CLEAR SOLUTION, WITHOUT COMPLICATIONS, AND WITH AN AESTHETIC THAT REPRESENTS US. THE SPACE IS VERY WELL UTILIZED AND FEELS COMFORTABLE ALL YEAR ROUND. WE HIGHLIGHT THE CONSTRUCTION QUALITY AND ATTENTION TO DETAIL.',
            'test-sub-3': '"A safe and well-thought-out investment"',
            'test-text-3': 'WE BET ON RUKA MODULAR AS OUR FIRST EXPERIENCE IN TEMPORARY RENTAL. DELIVERY TIMES WERE SHORT AND THE RESULT EXCEEDED OUR EXPECTATIONS. THE MODULE HAS VERY GOOD ACCEPTANCE, LOW MAINTENANCE, AND A DESIGN THAT TRULY MAKES A DIFFERENCE. WITHOUT A DOUBT, WE WOULD INVEST IN ANOTHER ONE.',
            
            // Textos FAQ
            'dreams-title': 'WE BUILD YOUR DREAMS',
            'faq-title': 'FREQUENTLY ASKED QUESTIONS',
            'faq-subtitle': 'We are here to help you',
            'faq-q1': 'WHAT BUILDING SYSTEM IS USED?',
            'faq-a1': 'The module is built with a metal structure, exterior cladding of sheet metal or siding, adequate thermal and acoustic insulation, and interior finishes in wood or drywall, achieving a balance between durability, comfort, and aesthetics.',
            'faq-q2': 'CAN THE MODULE BE ADAPTED OR PERSONALIZED?',
            'faq-a2': 'Yes. The design can be adapted according to the terrain, intended use, and client needs. Changes in openings, finishes, equipment, and interior layout can be evaluated.',
            'faq-q3': 'WHAT IS NOT INCLUDED IN THE PRICE OF MY REFUGE?',
            'faq-a3': 'The cost of transportation and assembly is not included and is quoted based on the location. Also not included is the preparation of the terrain and support bases, nor the connection of water, electricity, and sewage services up to the pre-agreed connection point.',
            'faq-q4': 'IS TRANSPORTATION AND ASSEMBLY INCLUDED?',
            'faq-a4': 'Yes, we offer on-site transportation and assembly services, coordinating the entire process for a quick and efficient installation.',
            'faq-q5': 'HOW LONG DOES DELIVERY TAKE?',
            'faq-a5': 'Times vary depending on the level of personalization and demand, but being a modular system, the deadlines are significantly shorter than those of a traditional construction.',
            'faq-q6': 'CAN THE MODULE BE EXPANDED IN THE FUTURE?',
            'faq-a6': 'Yes. The modular system allows for expansions or the incorporation of new modules in stages, adapting to the growth of the project or tourism venture.',
            // Textos BANNER FINAL
            'final-banner-title': 'Build simply, live better.',
            'final-banner-desc': 'Modular architecture allows building in less time, with clear costs and a high level of quality. Less construction work, less uncertainty, and more results. Ruka Modular is a smart decision for today and the future.',
            // Textos CONTACTO
            'contact-title': 'LET\'S TALK ABOUT YOUR PROJECT',
            'contact-name': 'Name',
            'contact-email': 'Email',
            'contact-phone': 'Phone',
            'contact-subject': 'Subject',
            'contact-message': 'Message',
            'contact-submit': 'SEND',
            'contact-ph-name': 'What\'s your name? *',
            'contact-ph-email': 'What\'s your email address? *',
            'contact-ph-phone': 'What\'s your phone number?',
            'contact-ph-subject': 'Subject',
            'contact-ph-message': 'Type your message...',
            // Textos FOOTER
            'footer-title': 'GET IN TOUCH',
            'footer-col1-title': 'CONTACT',
            'footer-col2-title': 'HOURS',
            'footer-col2-text': 'Monday to Friday<br>9:00<br>to<br>17:00hs',
            'footer-col3-title': 'CONTACTS',
            // Texto WIDGET WHATSAPP
            'wa-message': 'Hi, how can I help you?'
        }
    };

    // --- 2. FUNCIÓN PARA TRADUCIR EL DOM ---
    function translatePage(language) {
        // Traduce textos normales
        const elementsToTranslate = document.querySelectorAll('[data-i18n]');
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[language] && translations[language][key]) {
                element.innerHTML = translations[language][key];
            }
        });

        // Traduce los placeholders de los inputs del formulario
        const placeholdersToTranslate = document.querySelectorAll('[data-i18n-placeholder]');
        placeholdersToTranslate.forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (translations[language] && translations[language][key]) {
                element.placeholder = translations[language][key];
            }
        });
    }

    // --- 3. LÓGICA DEL SELECTOR DE IDIOMA ---
    const langBtn = document.getElementById('lang-btn');
    const langDropdown = document.getElementById('lang-dropdown');
    const currentFlag = document.getElementById('current-flag');
    const currentLang = document.getElementById('current-lang');
    const langOptions = document.querySelectorAll('.lang-option');

    if (langBtn) {
        langBtn.addEventListener('click', (event) => {
            event.stopPropagation(); 
            langDropdown.classList.toggle('show');
        });
    }

    langOptions.forEach(option => {
        option.addEventListener('click', (event) => {
            event.preventDefault(); 
            const prevLang = currentLang.innerText;
            const prevFlagSrc = currentFlag.src;
            const prevAlt = currentFlag.alt;
            const newLang = option.getAttribute('data-lang');
            const newFlagCode = option.getAttribute('data-flag');
            const newAlt = option.getAttribute('data-alt');
            const newFlagSrc = `https://flagcdn.com/w20/${newFlagCode}`;

            currentLang.innerText = newLang;
            currentFlag.src = newFlagSrc;
            currentFlag.alt = newAlt;
            translatePage(newLang);

            option.setAttribute('data-lang', prevLang);
            const prevFlagCode = prevFlagSrc.split('/').pop();
            option.setAttribute('data-flag', prevFlagCode);
            option.setAttribute('data-alt', prevAlt);
            option.innerHTML = `<img src="${prevFlagSrc}" alt="${prevAlt}" class="flag"> ${prevLang}`;
            langDropdown.classList.remove('show');
        });
    });

    window.addEventListener('click', (event) => {
        if (langBtn && langDropdown && !langBtn.contains(event.target) && !langDropdown.contains(event.target)) {
            langDropdown.classList.remove('show');
        }
    });

    // --- 4. EFECTO NAVBAR AL HACER SCROLL ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- 5. MENÚ HAMBURGUESA (CELULARES) ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // --- 6. BOTONES VOLVER ARRIBA ---
    const scrollToTopBtns = document.querySelectorAll('.scroll-to-top');
    scrollToTopBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' 
            });
        });
    });

    // --- 7. LÓGICA DEL CARRUSEL DE TESTIMONIOS ---
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    let slideInterval;

    if (slides.length > 0 && dots.length > 0) {
        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            slides[index].classList.add('active');
            dots[index].classList.add('active');
            currentSlide = index;
        }

        function nextSlide() {
            let newIndex = currentSlide + 1;
            if (newIndex >= slides.length) {
                newIndex = 0;
            }
            showSlide(newIndex);
        }

        function startSlideShow() {
            slideInterval = setInterval(nextSlide, 8000);
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                clearInterval(slideInterval); // Frena el automático al hacer clic
                showSlide(index);
                startSlideShow(); // Lo vuelve a arrancar
            });
        });

        // Arrancar el carrusel
        startSlideShow();
    }

    // --- 9. LÓGICA DEL WIDGET DE WHATSAPP ---
    const waTriggerBtn = document.getElementById('whatsapp-trigger-btn');
    const waChatBox = document.getElementById('whatsapp-chat');
    const waCloseBtn = document.getElementById('whatsapp-close-btn');

    if (waTriggerBtn && waChatBox && waCloseBtn) {
        // Abrir/Cerrar al tocar el botón redondo
        waTriggerBtn.addEventListener('click', () => {
            waChatBox.classList.toggle('show');
        });

        // Cerrar al tocar la X
        waCloseBtn.addEventListener('click', () => {
            waChatBox.classList.remove('show');
        });
    }

}); 