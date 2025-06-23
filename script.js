document.addEventListener('DOMContentLoaded', () => {

    const translations = {
        fr: {
            main_title: "CV Master Pro",
            subtitle: "Créez un CV professionnel en quelques minutes.",
            scrolling_message: "Créez le CV de vos rêves... Mettez en valeur vos compétences... Décrochez le job idéal !",
            create_cv_title: "Créez votre CV",
            personal_info: "Informations Personnelles",
            identity_photo: "Photo d'identité",
            date_of_birth: "Date de naissance",
            full_name_placeholder: "Nom complet",
            job_title_placeholder: "Titre Professionnel (ex: Développeur, Manager)",
            email_placeholder: "Adresse e-mail",
            phone_placeholder: "Numéro de téléphone",
            address: "Adresse",
            address_placeholder: "Votre adresse complète",
            nationality: "Nationalité",
            nationality_placeholder: "Votre nationalité",
            about_placeholder: "Un court paragraphe sur vous",
            objective: "Objectif",
            objective_placeholder: "Décrivez votre objectif de carrière",
            work_experience: "Expérience Professionnelle",
            add_experience: "+ Ajouter une expérience",
            education: "Éducation",
            add_education: "+ Ajouter une formation",
            skills: "Compétences",
            skills_placeholder: "Séparez les compétences par une virgule (ex: HTML, CSS, JavaScript)",
            languages: "Langues",
            add_language: "+ Ajouter une langue",
            language_placeholder: "Langue (ex: Anglais)",
            level: "Niveau",
            level_native: "Natif",
            level_fluent: "Courant",
            level_advanced: "Avancé",
            level_intermediate: "Intermédiaire",
            level_beginner: "Débutant",
            theme_colors: "Thème & Couleurs",
            theme_color_label: "Couleur du thème :",
            download_pdf: "Télécharger le CV en PDF",
            login: "Connexion",
            signup: "S'inscrire",
            contact: "Contact",
            about_me: "À propos de moi",
            cv_title: "Curriculum Vitae de",
            preview_name_default: "Votre Nom Complet",
            preview_title_default: "Titre Professionnel",
            exp_job_title_placeholder: "Intitulé du poste",
            exp_company_placeholder: "Entreprise",
            exp_dates_placeholder: "Dates (ex: Janv. 2020 - Présent)",
            exp_desc_placeholder: "Description des responsabilités",
            edu_degree_placeholder: "Diplôme ou Titre",
            edu_school_placeholder: "École ou Université",
            edu_dates_placeholder: "Dates (ex: 2016 - 2020)",
            footer_copyright: " 2024 CV Master Pro. Tous droits réservés.",
            footer_about: "Notre mission est de vous aider à créer un CV percutant qui met en valeur vos compétences et vous ouvre les portes de votre carrière de rêve.",
            footer_links_title: "Liens Rapides",
            footer_link_templates: "Modèles",
            footer_link_features: "Fonctionnalités",
            footer_link_help: "Aide",
            footer_legal_title: "Légal",
            footer_link_privacy: "Politique de confidentialité",
            footer_link_terms: "Conditions d'utilisation",
            footer_link_contact: "Nous Contacter",
            footer_newsletter_title: "Newsletter",
            footer_newsletter_text: "Restez à jour avec nos dernières fonctionnalités et offres.",
            subscribe: "S'abonner",
            newsletter_success: "Merci de vous être abonné !",
            feature_soon: "Fonctionnalité bientôt disponible !",
            login_modal_title: "Connexion",
            email_address: "Adresse e-mail",
            password: "Mot de passe",
            password_placeholder: "Votre mot de passe",
            login_now: "Se connecter",
            no_account: "Vous n'avez pas de compte ?",
            signup_now: "S'inscrire",
            signup_modal_title: "Créer un compte",
            full_name: "Nom complet",
            confirm_password: "Confirmez le mot de passe",
            confirm_password_placeholder: "Confirmez votre mot de passe",
            create_account: "Créer un compte",
            has_account: "Vous avez déjà un compte ?",
            logout: "Déconnexion",
            greeting: "Bonjour, {name}",
            passwords_do_not_match: "Les mots de passe ne correspondent pas.",
            email_already_exists: "Cette adresse e-mail est déjà utilisée.",
            signup_success: "Inscription réussie ! Vous êtes maintenant connecté.",
            invalid_credentials: "Adresse e-mail ou mot de passe incorrect.",
            please_log_in: "Veuillez vous connecter ou vous inscrire pour continuer.",
        },
        en: {
            main_title: "CV Master Pro",
            subtitle: "Create a professional resume in minutes.",
            scrolling_message: "Create the resume of your dreams... Highlight your skills... Land the ideal job!",
            create_cv_title: "Build Your Resume",
            personal_info: "Personal Information",
            identity_photo: "Identity Photo",
            date_of_birth: "Date of Birth",
            full_name_placeholder: "Full Name",
            job_title_placeholder: "Professional Title (e.g., Developer, Manager)",
            email_placeholder: "Email Address",
            phone_placeholder: "Phone Number",
            address: "Address",
            address_placeholder: "Your full address",
            nationality: "Nationality",
            nationality_placeholder: "Your nationality",
            about_placeholder: "A short paragraph about yourself",
            objective: "Objective",
            objective_placeholder: "Describe your career objective",
            work_experience: "Work Experience",
            add_experience: "+ Add Experience",
            education: "Education",
            add_education: "+ Add Education",
            skills: "Skills",
            skills_placeholder: "Separate skills with a comma (e.g., HTML, CSS, JavaScript)",
            languages: "Languages",
            add_language: "+ Add Language",
            language_placeholder: "Language (e.g., English)",
            level: "Level",
            level_native: "Native",
            level_fluent: "Fluent",
            level_advanced: "Advanced",
            level_intermediate: "Intermediate",
            level_beginner: "Beginner",
            theme_colors: "Theme & Colors",
            theme_color_label: "Theme color:",
            download_pdf: "Download CV as PDF",
            login: "Login",
            signup: "Sign Up",
            contact: "Contact",
            about_me: "About Me",
            cv_title: "Curriculum Vitae of",
            preview_name_default: "Your Full Name",
            preview_title_default: "Professional Title",
            exp_job_title_placeholder: "Job Title",
            exp_company_placeholder: "Company",
            exp_dates_placeholder: "Dates (e.g., Jan 2020 - Present)",
            exp_desc_placeholder: "Description of responsibilities",
            edu_degree_placeholder: "Degree or Title",
            edu_school_placeholder: "School or University",
            edu_dates_placeholder: "Dates (e.g., 2016 - 2020)",
            footer_copyright: " 2024 CV Master Pro. All rights reserved.",
            footer_about: "Our mission is to help you create a powerful resume that highlights your skills and opens the doors to your dream career.",
            footer_links_title: "Quick Links",
            footer_link_templates: "Templates",
            footer_link_features: "Features",
            footer_link_help: "Help",
            footer_legal_title: "Legal",
            footer_link_privacy: "Privacy Policy",
            footer_link_terms: "Terms of Service",
            footer_link_contact: "Contact Us",
            footer_newsletter_title: "Newsletter",
            footer_newsletter_text: "Stay updated with our latest features and offers.",
            subscribe: "Subscribe",
            newsletter_success: "Thank you for subscribing!",
            feature_soon: "Feature coming soon!",
            login_modal_title: "Login",
            email_address: "Email Address",
            password: "Password",
            password_placeholder: "Your password",
            login_now: "Login",
            no_account: "Don't have an account?",
            signup_now: "Sign Up",
            signup_modal_title: "Create Account",
            full_name: "Full Name",
            confirm_password: "Confirm Password",
            confirm_password_placeholder: "Confirm your password",
            create_account: "Create Account",
            has_account: "Already have an account?",
            logout: "Logout",
            greeting: "Hello, {name}",
            passwords_do_not_match: "Passwords do not match.",
            email_already_exists: "This email address is already in use.",
            signup_success: "Signup successful! You are now logged in.",
            invalid_credentials: "Incorrect email or password.",
            please_log_in: "Please log in or sign up to continue.",
        },
        es: {
            main_title: "CV Master Pro",
            subtitle: "Crea un currículum profesional en minutos.",
            scrolling_message: "Crea el currículum de tus sueños... Destaca tus habilidades... ¡Consigue el trabajo ideal!",
            create_cv_title: "Crea tu Currículum",
            personal_info: "Información Personal",
            identity_photo: "Foto de identidad",
            date_of_birth: "Fecha de nacimiento",
            full_name_placeholder: "Nombre Completo",
            job_title_placeholder: "Título Profesional (ej: Desarrollador, Gerente)",
            email_placeholder: "Dirección de correo electrónico",
            phone_placeholder: "Número de teléfono",
            address: "Dirección",
            address_placeholder: "Tu dirección completa",
            nationality: "Nacionalidad",
            nationality_placeholder: "Tu nacionalidad",
            about_placeholder: "Un breve párrafo sobre ti",
            objective: "Objetivo",
            objective_placeholder: "Describe tu objetivo profesional",
            work_experience: "Experiencia Profesional",
            add_experience: "+ Añadir Experiencia",
            education: "Educación",
            add_education: "+ Añadir Formación",
            skills: "Habilidades",
            skills_placeholder: "Separe las habilidades con una coma (ej: HTML, CSS, JavaScript)",
            languages: "Idiomas",
            add_language: "+ Añadir Idioma",
            language_placeholder: "Idioma (ej: Inglés)",
            level: "Nivel",
            level_native: "Nativo",
            level_fluent: "Fluido",
            level_advanced: "Avanzado",
            level_intermediate: "Intermedio",
            level_beginner: "Principiante",
            theme_colors: "Tema y Colores",
            theme_color_label: "Color del tema:",
            download_pdf: "Descargar CV en PDF",
            login: "Iniciar Sesión",
            signup: "Registrarse",
            contact: "Contacto",
            about_me: "Sobre Mí",
            cv_title: "Curriculum Vitae de",
            preview_name_default: "Tu Nombre Completo",
            preview_title_default: "Título Profesional",
            exp_job_title_placeholder: "Puesto de Trabajo",
            exp_company_placeholder: "Empresa",
            exp_dates_placeholder: "Fechas (ej: Ene 2020 - Actual)",
            exp_desc_placeholder: "Descripción de responsabilidades",
            edu_degree_placeholder: "Título o Diploma",
            edu_school_placeholder: "Escuela o Universidad",
            edu_dates_placeholder: "Fechas (ej: 2016 - 2020)",
            footer_copyright: " 2024 CV Master Pro. Todos los derechos reservados.",
            footer_about: "Nuestra misión es ayudarle a crear un currículum impactante que resalte sus habilidades y le abra las puertas a la carrera de sus sueños.",
            footer_links_title: "Enlaces Rápidos",
            footer_link_templates: "Plantillas",
            footer_link_features: "Características",
            footer_link_help: "Ayuda",
            footer_legal_title: "Legal",
            footer_link_privacy: "Política de Privacidad",
            footer_link_terms: "Términos de Servicio",
            footer_link_contact: "Contáctenos",
            footer_newsletter_title: "Boletín informativo",
            footer_newsletter_text: "Manténgase actualizado con nuestras últimas características y ofertas.",
            subscribe: "Suscribirse",
            newsletter_success: "¡Gracias por suscribirte!",
            feature_soon: "¡Funcionalidad próximamente disponible!",
            login_modal_title: "Iniciar Sesión",
            email_address: "Dirección de correo electrónico",
            password: "Contraseña",
            password_placeholder: "Tu contraseña",
            login_now: "Iniciar Sesión",
            no_account: "¿No tienes una cuenta?",
            signup_now: "Registrarse",
            signup_modal_title: "Crear Cuenta",
            full_name: "Nombre Completo",
            confirm_password: "Confirmar Contraseña",
            confirm_password_placeholder: "Confirma tu contraseña",
            create_account: "Crear Cuenta",
            has_account: "¿Ya tienes una cuenta?",
            logout: "Cerrar Sesión",
            greeting: "Hola, {name}",
            passwords_do_not_match: "Las contraseñas no coinciden.",
            email_already_exists: "Esta dirección de correo electrónico ya está en uso.",
            signup_success: "¡Registro exitoso! Ahora estás conectado.",
            invalid_credentials: "Correo electrónico o contraseña incorrectos.",
            please_log_in: "Por favor, inicie sesión o regístrese para continuar.",
        },
        pt: {
            main_title: "CV Master Pro",
            subtitle: "Crie um currículo profissional em minutos.",
            scrolling_message: "Crie o currículo dos seus sonhos... Destaque suas habilidades... Consiga o emprego ideal!",
            create_cv_title: "Crie seu Currículo",
            personal_info: "Informações Pessoais",
            identity_photo: "Foto de identidade",
            date_of_birth: "Data de nascimento",
            full_name_placeholder: "Nome Completo",
            job_title_placeholder: "Título Profissional (ex: Desenvolvedor, Gerente)",
            email_placeholder: "Endereço de e-mail",
            phone_placeholder: "Número de telefone",
            address: "Endereço",
            address_placeholder: "Seu endereço completo",
            nationality: "Nacionalidade",
            nationality_placeholder: "Sua nacionalidade",
            about_placeholder: "Um breve parágrafo sobre você",
            objective: "Objetivo",
            objective_placeholder: "Descreva seu objetivo de carreira",
            work_experience: "Experiência Profissional",
            add_experience: "+ Adicionar Experiência",
            education: "Educação",
            add_education: "+ Adicionar Formação",
            skills: "Competências",
            skills_placeholder: "Separe as competências por vírgula (ex: HTML, CSS, JavaScript)",
            languages: "Idiomas",
            add_language: "+ Adicionar Idioma",
            language_placeholder: "Idioma (ex: Inglês)",
            level: "Nível",
            level_native: "Nativo",
            level_fluent: "Fluente",
            level_advanced: "Avançado",
            level_intermediate: "Intermediário",
            level_beginner: "Iniciante",
            theme_colors: "Tema e Cores",
            theme_color_label: "Cor do tema:",
            download_pdf: "Baixar CV em PDF",
            login: "Login",
            signup: "Inscrever-se",
            contact: "Contato",
            about_me: "Sobre Mim",
            cv_title: "Curriculum Vitae de",
            preview_name_default: "Seu Nome Completo",
            preview_title_default: "Título Profissional",
            exp_job_title_placeholder: "Cargo",
            exp_company_placeholder: "Empresa",
            exp_dates_placeholder: "Datas (ex: Jan. 2020 - Presente)",
            exp_desc_placeholder: "Descrição das responsabilidades",
            edu_degree_placeholder: "Diploma ou Título",
            edu_school_placeholder: "Escola ou Universidade",
            edu_dates_placeholder: "Datas (ex: 2016 - 2020)",
            footer_copyright: " 2024 CV Master Pro. Todos os direitos reservados.",
            footer_about: "Nossa missão é ajudá-lo a criar um currículo poderoso que destaque suas habilidades e abra as portas para a carreira dos seus sonhos.",
            footer_links_title: "Links Rápidos",
            footer_link_templates: "Modelos",
            footer_link_features: "Funcionalidades",
            footer_link_help: "Ajuda",
            footer_legal_title: "Legal",
            footer_link_privacy: "Política de Privacidade",
            footer_link_terms: "Termos de Serviço",
            footer_link_contact: "Contate-Nos",
            footer_newsletter_title: "Newsletter",
            footer_newsletter_text: "Mantenha-se atualizado com nossos recursos e ofertas mais recentes.",
            subscribe: "Inscrever-se",
            newsletter_success: "Obrigado por se inscrever!",
            feature_soon: "Funcionalidade disponível em breve!",
            login_modal_title: "Login",
            email_address: "Endereço de e-mail",
            password: "Senha",
            password_placeholder: "Sua senha",
            login_now: "Login",
            no_account: "Não tem uma conta?",
            signup_now: "Inscrever-se",
            signup_modal_title: "Criar Conta",
            full_name: "Nome Completo",
            confirm_password: "Confirmar Senha",
            confirm_password_placeholder: "Confirme sua senha",
            create_account: "Criar Conta",
            has_account: "Já tem uma conta?",
            logout: "Sair",
            greeting: "Olá, {name}",
            passwords_do_not_match: "As senhas não correspondem.",
            email_already_exists: "Este endereço de e-mail já está em uso.",
            signup_success: "Inscrição bem-sucedida! Você agora está logado.",
            invalid_credentials: "E-mail ou senha incorretos.",
            please_log_in: "Por favor, faça login ou inscreva-se para continuar.",
        },
        ht: {
            main_title: "CV Master Pro",
            subtitle: "Kreye yon CV pwofesyonèl nan kèk minit.",
            scrolling_message: "Kreye CV rèv ou... Mete konpetans ou an valè... Dekwoche djòb ideyal la!",
            create_cv_title: "Kreye CV ou",
            personal_info: "Enfòmasyon Pèsonèl",
            identity_photo: "Foto idantite",
            date_of_birth: "Dat nesans",
            full_name_placeholder: "Non konplè",
            job_title_placeholder: "Tit Pwofesyonèl (egz: Devlopè, Manadjè)",
            email_placeholder: "Adrès imel",
            phone_placeholder: "Nimewo telefòn",
            address: "Adrès",
            address_placeholder: "Adrès konplè ou",
            nationality: "Nasyonalite",
            nationality_placeholder: "Nasyonalite ou",
            about_placeholder: "Yon ti paragraf sou ou",
            objective: "Objektif",
            objective_placeholder: "Dekri objektif karyè ou",
            work_experience: "Eksperyans Pwofesyonèl",
            add_experience: "+ Ajoute yon eksperyans",
            education: "Edikasyon",
            add_education: "+ Ajoute yon fòmasyon",
            skills: "Konpetans",
            skills_placeholder: "Separe konpetans yo ak yon vigil (egz: HTML, CSS, JavaScript)",
            languages: "Lang",
            add_language: "+ Ajoute yon lang",
            language_placeholder: "Lang (egz: Anglè)",
            level: "Nivo",
            level_native: "Natif Natal",
            level_fluent: "Kouran",
            level_advanced: "Avanse",
            level_intermediate: "Entèmedyè",
            level_beginner: "Debitan",
            theme_colors: "Tèm & Koulè",
            theme_color_label: "Koulè tèm nan:",
            download_pdf: "Telechaje CV an PDF",
            login: "Konekte",
            signup: "Enskri",
            contact: "Kontak",
            about_me: "Apwopo Mwen",
            cv_title: "Curriculum Vitae",
            preview_name_default: "Non Konplè Ou",
            preview_title_default: "Tit Pwofesyonèl",
            exp_job_title_placeholder: "Tit pòs la",
            exp_company_placeholder: "Konpayi",
            exp_dates_placeholder: "Dat (egz: Janv. 2020 - Kounye a)",
            exp_desc_placeholder: "Deskripsyon responsablite yo",
            edu_degree_placeholder: "Diplòm oswa Tit",
            edu_school_placeholder: "Lekòl oswa Inivèsite",
            edu_dates_placeholder: "Dat (egz: 2016 - 2020)",
            footer_copyright: " 2024 CV Master Pro. Tout dwa rezève.",
            footer_about: "Misyon nou se ede w kreye yon CV pwisan ki mete aksan sou konpetans ou epi ki ouvri pòt pou karyè rèv ou.",
            footer_links_title: "Lyè rapid",
            footer_link_templates: "Modèl",
            footer_link_features: "Fonksyonalite",
            footer_link_help: "Èd",
            footer_legal_title: "Legal",
            footer_link_privacy: "Règ Konfidansyalite",
            footer_link_terms: "Kondisyon Itilizasyon",
            footer_link_contact: "Kontakte Nou",
            footer_newsletter_title: "Nouvèl",
            footer_newsletter_text: "Rete ajou ak dènye fonksyonalite ak òf nou yo.",
            subscribe: "Abòne",
            newsletter_success: "Mèsi paske ou abòne!",
            feature_soon: "Fonksyonalite sa a ap disponib byento!",
            login_modal_title: "Konekte",
            email_address: "Adrès imel",
            password: "Modpas",
            password_placeholder: "Modpas ou",
            login_now: "Konekte",
            no_account: "Ou pa gen kont?",
            signup_now: "Enskri",
            signup_modal_title: "Kreye Kont",
            full_name: "Non konplè",
            confirm_password: "Konfime modpas",
            confirm_password_placeholder: "Konfime modpas ou",
            create_account: "Kreye Kont",
            has_account: "Ou gen yon kont deja?",
            logout: "Dekonekte",
            greeting: "Bonjou, {name}",
            passwords_do_not_match: "Modpas yo pa matche.",
            email_already_exists: "Adrès imel sa a deja itilize.",
            signup_success: "Enskripsyon an reyisi! Ou konekte kounye a.",
            invalid_credentials: "Adrès imel oswa modpas pa kòrèk.",
            please_log_in: "Souple, konekte ou enskri pou kontinye.",
        },
    };

    let loginModalInstance, signupModalInstance;

    function setLanguage(lang) {
        const elements = document.querySelectorAll('[data-translate-key]');
        elements.forEach(el => {
            const key = el.getAttribute('data-translate-key');
            if (translations[lang] && translations[lang][key]) {
                // Special case for CV title to avoid overwriting the name
                if (key === 'cv_title' && el.id === 'preview-name-container') {
                     el.firstChild.textContent = translations[lang][key] + ' ';
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });

        const placeholderElements = document.querySelectorAll('[data-translate-key-placeholder]');
        placeholderElements.forEach(el => {
            const key = el.getAttribute('data-translate-key-placeholder');
            if (translations[lang] && translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });

        const defaultElements = document.querySelectorAll('[data-translate-key-default]');
        defaultElements.forEach(el => {
            const key = el.getAttribute('data-translate-key-default');
            const previewIsDefault = el.textContent === el.getAttribute('data-previous-translation') || !el.hasAttribute('data-previous-translation');

            if (translations[lang] && translations[lang][key] && previewIsDefault) {
                 el.textContent = translations[lang][key];
            }
            el.setAttribute('data-previous-translation', translations[lang][key]);
        });
        
        localStorage.setItem('language', lang);
    }
    
    const langSelector = document.getElementById('language-selector');
    langSelector.addEventListener('change', (e) => setLanguage(e.target.value));

    const savedLang = localStorage.getItem('language') || 'fr';
    langSelector.value = savedLang;
    

    // Dark Mode
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const moonIcon = document.querySelector('label[for="darkModeToggle"] i');

    function enableDarkMode() {
        body.classList.add('dark-mode');
        moonIcon.classList.remove('fa-moon');
        moonIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
        darkModeToggle.checked = true;
    }

    function disableDarkMode() {
        body.classList.remove('dark-mode');
        moonIcon.classList.remove('fa-sun');
        moonIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
        darkModeToggle.checked = false;
    }

    darkModeToggle.addEventListener('change', () => {
        if (darkModeToggle.checked) {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    });

    if (localStorage.getItem('theme') === 'dark') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }


    // Date & Time
    const dateTimeContainer = document.getElementById('date-time-container');
    function updateDateTime() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const lang = document.getElementById('language-selector').value;
        let locale;
        switch(lang) {
            case 'fr': locale = 'fr-FR'; break;
            case 'en': locale = 'en-US'; break;
            case 'es': locale = 'es-ES'; break;
            case 'pt': locale = 'pt-BR'; break;
            case 'ht': locale = 'fr-FR'; break; // Fallback for Haitian Creole
            default: locale = 'en-US';
        }
        const dateString = now.toLocaleDateString(locale, options);
        const timeString = now.toLocaleTimeString(locale);
        dateTimeContainer.textContent = `${dateString} - ${timeString}`;
    }
    setInterval(updateDateTime, 1000);
    updateDateTime();


    const formInputs = {
        name: document.getElementById('name'),
        title: document.getElementById('title'),
        email: document.getElementById('email'),
        phone: document.getElementById('phone'),
        address: document.getElementById('address'),
        nationality: document.getElementById('nationality'),
        dob: document.getElementById('dob'),
        about: document.getElementById('about'),
        objective: document.getElementById('objective'),
        skills: document.getElementById('skills'),
        themeColor: document.getElementById('theme-color'),
        photoUpload: document.getElementById('photo-upload'),
    };

    const previewOutputs = {
        name: document.getElementById('preview-name'),
        title: document.getElementById('preview-title'),
        email: document.getElementById('preview-email'),
        phone: document.getElementById('preview-phone'),
        address: document.getElementById('preview-address'),
        nationality: document.getElementById('preview-nationality'),
        nationalityContainer: document.getElementById('preview-nationality-container'),
        dob: document.getElementById('preview-dob'),
        dobContainer: document.getElementById('preview-dob-container'),
        about: document.getElementById('preview-about'),
        objective: document.getElementById('preview-objective'),
        skills: document.getElementById('preview-skills'),
        photo: document.getElementById('preview-photo'),
    };
    
    // Simple key-value updates
    for (const key in formInputs) {
        if (['skills', 'themeColor', 'photoUpload', 'dob', 'nationality'].includes(key)) continue;
        formInputs[key].addEventListener('input', (e) => {
            const defaultValueKey = previewOutputs[key]?.getAttribute('data-translate-key-default');
            const lang = localStorage.getItem('language') || 'fr';
            const defaultValue = defaultValueKey ? translations[lang][defaultValueKey] : '';
            previewOutputs[key].textContent = e.target.value || defaultValue;
        });
    }

    // Date of Birth update
    formInputs.dob.addEventListener('input', (e) => {
        const value = e.target.value;
        if (value) {
            previewOutputs.dob.textContent = value;
            previewOutputs.dobContainer.style.display = 'block';
        } else {
            previewOutputs.dobContainer.style.display = 'none';
        }
    });

    // Nationality update
    formInputs.nationality.addEventListener('input', (e) => {
        const value = e.target.value;
        if (value) {
            previewOutputs.nationality.textContent = value;
            previewOutputs.nationalityContainer.style.display = 'block';
        } else {
            previewOutputs.nationalityContainer.style.display = 'none';
        }
    });

    // Photo upload update
    formInputs.photoUpload.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                previewOutputs.photo.src = event.target.result;
                previewOutputs.photo.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });

    // Skills update
    formInputs.skills.addEventListener('input', (e) => {
        previewOutputs.skills.innerHTML = '';
        const skillsArray = e.target.value.split(',').filter(skill => skill.trim() !== '');
        skillsArray.forEach(skill => {
            const skillBadge = document.createElement('span');
            skillBadge.className = 'skill-badge';
            skillBadge.textContent = skill.trim();
            previewOutputs.skills.appendChild(skillBadge);
        });
    });

    // Theme color update
    formInputs.themeColor.addEventListener('input', (e) => {
        const newColor = e.target.value;
        document.documentElement.style.setProperty('--primary-color', newColor);
    });

    // Dynamic sections (Experience & Education)
    let experienceCounter = 0;
    document.getElementById('add-experience').addEventListener('click', () => {
        experienceCounter++;
        const id = experienceCounter;
        const lang = localStorage.getItem('language') || 'fr';
        const formHtml = `
            <div class="dynamic-entry" data-id="${id}" data-type="experience">
                <button class="remove-btn" data-id="${id}" data-type="experience">&times;</button>
                <input type="text" class="form-control mb-2" placeholder="${translations[lang].exp_job_title_placeholder}" data-field="jobTitle">
                <input type="text" class="form-control mb-2" placeholder="${translations[lang].exp_company_placeholder}" data-field="company">
                <input type="text" class="form-control mb-2" placeholder="${translations[lang].exp_dates_placeholder}" data-field="dates">
                <textarea class="form-control" placeholder="${translations[lang].exp_desc_placeholder}" data-field="description"></textarea>
            </div>
        `;
        document.getElementById('experience-list').insertAdjacentHTML('beforeend', formHtml);
        updateDynamicSections();
    });

    let educationCounter = 0;
    document.getElementById('add-education').addEventListener('click', () => {
        educationCounter++;
        const id = educationCounter;
        const lang = localStorage.getItem('language') || 'fr';
        const formHtml = `
            <div class="dynamic-entry" data-id="${id}" data-type="education">
                <button class="remove-btn" data-id="${id}" data-type="education">&times;</button>
                <input type="text" class="form-control mb-2" placeholder="${translations[lang].edu_degree_placeholder}" data-field="degree">
                <input type="text" class="form-control mb-2" placeholder="${translations[lang].edu_school_placeholder}" data-field="school">
                <input type="text" class="form-control mb-2" placeholder="${translations[lang].edu_dates_placeholder}" data-field="dates">
            </div>
        `;
        document.getElementById('education-list').insertAdjacentHTML('beforeend', formHtml);
        updateDynamicSections();
    });
    
    let languageCounter = 0;
    document.getElementById('add-language').addEventListener('click', () => {
        languageCounter++;
        const id = languageCounter;
        const lang = localStorage.getItem('language') || 'fr';
        const formHtml = `
            <div class="dynamic-entry" data-id="${id}" data-type="language">
                <button class="remove-btn" data-id="${id}" data-type="language">&times;</button>
                <input type="text" class="form-control mb-2" placeholder="${translations[lang].language_placeholder}" data-field="languageName">
                <select class="form-select" data-field="level">
                    <option value="">${translations[lang].level}</option>
                    <option value="native">${translations[lang].level_native}</option>
                    <option value="fluent">${translations[lang].level_fluent}</option>
                    <option value="advanced">${translations[lang].level_advanced}</option>
                    <option value="intermediate">${translations[lang].level_intermediate}</option>
                    <option value="beginner">${translations[lang].level_beginner}</option>
                </select>
            </div>
        `;
        document.getElementById('languages-list').insertAdjacentHTML('beforeend', formHtml);
        updateDynamicSections();
    });

    // Add event listeners for dynamic content
    document.getElementById('editor-column').addEventListener('input', updateDynamicSections);
    document.getElementById('editor-column').addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-btn')) {
            const { id, type } = e.target.dataset;
            document.querySelector(`.dynamic-entry[data-id='${id}'][data-type='${type}']`).remove();
            updateDynamicSections();
        }
    });

    function updateDynamicSections() {
        // Update Experience
        const experiencePreview = document.getElementById('preview-experience-list');
        experiencePreview.innerHTML = '';
        const experienceForms = document.querySelectorAll('.dynamic-entry[data-type="experience"]');
        experienceForms.forEach(form => {
            const jobTitle = form.querySelector('[data-field="jobTitle"]').value;
            const company = form.querySelector('[data-field="company"]').value;
            const dates = form.querySelector('[data-field="dates"]').value;
            const description = form.querySelector('[data-field="description"]').value;

            if (jobTitle || company) {
                 experiencePreview.innerHTML += `
                    <div class="exp-item">
                        <h5>${jobTitle || ''}</h5>
                        <p><strong>${company || ''}</strong></p>
                        <p class="exp-date">${dates || ''}</p>
                        <p>${description || ''}</p>
                    </div>
                `;
            }
        });
        
        // Update Education
        const educationPreview = document.getElementById('preview-education-list');
        educationPreview.innerHTML = '';
        const educationForms = document.querySelectorAll('.dynamic-entry[data-type="education"]');
        educationForms.forEach(form => {
            const degree = form.querySelector('[data-field="degree"]').value;
            const school = form.querySelector('[data-field="school"]').value;
            const dates = form.querySelector('[data-field="dates"]').value;

            if (degree || school) {
                 educationPreview.innerHTML += `
                    <div class="edu-item">
                        <h5>${degree || ''}</h5>
                        <p>${school || ''}</p>
                        <p class="edu-date">${dates || ''}</p>
                    </div>
                `;
            }
        });

        // Update Languages
        const languagesPreview = document.getElementById('preview-languages-list');
        const lang = localStorage.getItem('language') || 'fr';
        languagesPreview.innerHTML = '';
        const languageForms = document.querySelectorAll('.dynamic-entry[data-type="language"]');
        languageForms.forEach(form => {
            const languageName = form.querySelector('[data-field="languageName"]').value;
            const levelSelect = form.querySelector('[data-field="level"]');
            const levelValue = levelSelect.value;
            const levelText = levelSelect.options[levelSelect.selectedIndex].text;

            if (languageName) {
                languagesPreview.innerHTML += `
                    <div class="lang-item">
                        <span>${languageName}</span>
                        <small>${levelValue ? `(${levelText})` : ''}</small>
                    </div>
                `;
            }
        });
    }

    // PDF Download
    document.getElementById('download-pdf').addEventListener('click', () => {
        const previewElement = document.getElementById('cv-preview-container');
        const cvName = document.getElementById('name').value || 'CV';
        
        const opt = {
          margin:       0,
          filename:     `${cvName.replace(/\s+/g, '_')}_CV_Master_Pro.pdf`,
          image:        { type: 'jpeg', quality: 0.98 },
          html2canvas:  { scale: 4, useCORS: true }, // Higher scale for better quality
          jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
        
        html2pdf().from(previewElement).set(opt).save();
    });

    // --- AUTHENTICATION LOGIC ---
    
    const mainContent = document.getElementById('main-content');
    const userInfo = document.getElementById('user-info');
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');
    const logoutBtn = document.getElementById('logout-btn');

    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');

    function updateUIForAuthState(isLoggedIn) {
        if (isLoggedIn) {
            const user = JSON.parse(localStorage.getItem('currentUser'));
            const lang = localStorage.getItem('language') || 'fr';
            const greeting = translations[lang].greeting.replace('{name}', user.name.split(' ')[0]);
            
            userInfo.textContent = greeting;
            userInfo.classList.remove('d-none');
            logoutBtn.classList.remove('d-none');
            loginBtn.classList.add('d-none');
            signupBtn.classList.add('d-none');
            
            mainContent.style.visibility = 'visible';

            if (loginModalInstance) loginModalInstance.hide();
            if (signupModalInstance) signupModalInstance.hide();
        } else {
            userInfo.classList.add('d-none');
            logoutBtn.classList.add('d-none');
            loginBtn.classList.remove('d-none');
            signupBtn.classList.remove('d-none');
            
            mainContent.style.visibility = 'hidden';
            
            const lang = localStorage.getItem('language') || 'fr';
            const loginAlert = document.getElementById('login-alert');
            loginAlert.textContent = translations[lang].please_log_in;
            loginAlert.classList.remove('alert-danger', 'd-none');
            loginAlert.classList.add('alert-info');

            loginModalInstance.show();
        }
    }

    function handleSignup(e) {
        e.preventDefault();
        const lang = localStorage.getItem('language') || 'fr';
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const alertBox = document.getElementById('signup-alert');

        if (password !== confirmPassword) {
            alertBox.textContent = translations[lang].passwords_do_not_match;
            alertBox.classList.remove('d-none');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        if (users.some(user => user.email === email)) {
            alertBox.textContent = translations[lang].email_already_exists;
            alertBox.classList.remove('d-none');
            return;
        }
        
        const newUser = { name, email, password }; // Note: In a real app, hash the password!
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUser', JSON.stringify(newUser));

        alertBox.classList.add('d-none');
        updateUIForAuthState(true);
    }
    
    function handleLogin(e) {
        e.preventDefault();
        const lang = localStorage.getItem('language') || 'fr';
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        const alertBox = document.getElementById('login-alert');

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            alertBox.classList.add('d-none');
            updateUIForAuthState(true);
        } else {
            alertBox.textContent = translations[lang].invalid_credentials;
            alertBox.classList.remove('d-none', 'alert-info');
            alertBox.classList.add('alert-danger');
        }
    }

    function handleLogout() {
        localStorage.removeItem('currentUser');
        updateUIForAuthState(false);
        // Optional: reload to clear state fully
        // window.location.reload(); 
    }

    signupForm.addEventListener('submit', handleSignup);
    loginForm.addEventListener('submit', handleLogin);
    logoutBtn.addEventListener('click', handleLogout);

    // Initial state
    setLanguage(savedLang);

    // Initialize Modals
    const loginModalEl = document.getElementById('loginModal');
    loginModalInstance = new bootstrap.Modal(loginModalEl, {
        keyboard: false,
        backdrop: 'static'
    });

    const signupModalEl = document.getElementById('signupModal');
    signupModalInstance = new bootstrap.Modal(signupModalEl, {
        keyboard: false,
        backdrop: 'static'
    });
    
    // Check auth state on load
    const isLoggedIn = localStorage.getItem('currentUser') !== null;
    updateUIForAuthState(isLoggedIn);
    
    if (isLoggedIn) {
      document.getElementById('add-experience').click();
      document.getElementById('add-education').click();
    }

    // Newsletter Form
    document.getElementById('newsletter-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const feedbackEl = document.getElementById('newsletter-feedback');
        const lang = localStorage.getItem('language') || 'fr';
        feedbackEl.textContent = translations[lang].newsletter_success;
        e.target.reset();
        setTimeout(() => {
            feedbackEl.textContent = '';
        }, 3000);
    });
});