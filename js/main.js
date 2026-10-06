(() => {
  const STORAGE_KEYS = {
    theme: "hufan-theme",
    language: "hufan-language",
  };

  const translations = {
    en: {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.services": "Services",
      "nav.projects": "Projects",
      "nav.contact": "Contact",
      "nav.talk": "Let's Talk",
      "nav.openMenu": "Open menu",
      "nav.closeMenu": "Close menu",
      "testimonials.eyebrow": "Client Stories & Project Work",
      "testimonials.heading": "Real projects. Client voices shared with permission.",
      "testimonials.description": "Thoughtful digital work, shaped around each client’s needs and delivered with care.",
      "testimonials.doctorRole": "Medical Doctor",
      "testimonials.doctorContext": "Tamaam Hospital",
      "testimonials.quoteDoctor": "HUFAN transformed our ideas into a modern, professional digital experience. Their attention to detail, communication, and commitment to quality made the entire process smooth and enjoyable.",
      "testimonials.businessOwnerRole": "Business Owner & Entrepreneur",
      "testimonials.quoteBusinessOwner": "Working with HUFAN was a great experience. They understood our needs, delivered a clean and responsive solution, and made sure every detail reflected our vision.",
      "testimonials.operationsManagerRole": "Operations Manager",
      "testimonials.quoteOperations": "HUFAN combines creativity with strong technical skills. The final result was professional, easy to use, and exactly the kind of digital presence we wanted for our business.",
      "btn.theme.light": "Switch to light mode",
      "btn.theme.dark": "Switch to dark mode",
      "btn.language.en": "Switch to English",
      "btn.language.so": "Switch to Somali",
      "theme.light": "Light",
      "theme.dark": "Dark",
      "contact.form.name": "Full Name",
      "contact.form.email": "Email",
      "contact.form.company": "Company / Organization",
      "contact.form.company.optional": "(optional)",
      "contact.form.service": "Service",
      "contact.form.budget": "Budget",
      "contact.form.budget.optional": "(optional)",
      "contact.form.details": "Project Details",
      "contact.form.placeholder.name": "Your name",
      "contact.form.placeholder.email": "you@example.com",
      "contact.form.placeholder.company": "Company name",
      "contact.form.placeholder.details": "Tell us about your project",
      "contact.form.submit": "Send Project Inquiry",
      "form.validation.name": "Please enter your full name.",
      "form.validation.email": "Please enter a valid email address.",
      "form.validation.service": "Please select a service.",
      "form.validation.details": "Please provide more details about your project.",
      "form.validation.prompt": "Please check the highlighted fields and try again.",
      "form.status.emailDraft": "Your email app should open with a draft. Review and send it to hufan.agency@gmail.com to complete your inquiry.",
    },
    so: {
      "nav.home": "Bogga Hore",
      "nav.about": "Ku saabsan",
      "nav.services": "Adeegyo",
      "nav.projects": "Mashaariicda",
      "nav.contact": "Xiriir",
      "nav.talk": "La hadal",
      "nav.openMenu": "Fura liiska",
      "nav.closeMenu": "Xir liiska",
      "testimonials.eyebrow": "Sheekooyinka Macaamiisha iyo Shaqada",
      "testimonials.heading": "Mashruucyo dhab ah. Ra'yiga macaamiisha oo oggolaansho leh.",
      "testimonials.description": "Shaqooyin dijitaal ah oo xeeldheer, ku dhisan baahida macmiil kasta, laguna dhammeeyo taxaddar.",
      "testimonials.doctorRole": "Dhakhtar Caafimaad",
      "testimonials.doctorContext": "Isbitaalka Tamaam",
      "testimonials.quoteDoctor": "HUFAN waxay fikradaheennii u beddeshay waayo-aragnimo dijitaal ah oo casri ah oo xirfad leh. Feejignaantooda faahfaahinta, wada xiriirkooda, iyo ka go'naantooda tayada ayaa geeddi-socodka oo dhan ka dhigtay mid sahlan oo wanaagsan.",
      "testimonials.businessOwnerRole": "Milkiile Ganacsi iyo Ganacsade",
      "testimonials.quoteBusinessOwner": "La shaqaynta HUFAN waxay ahayd waayo-aragnimo wanaagsan. Waxay fahmeen baahiyahayaga, waxay bixiyeen xal nadiif ah oo ku habboon aaladaha kala duwan, waxayna hubiyeen in faahfaahin kastaa muujiso aragtideenna.",
      "testimonials.operationsManagerRole": "Maareeyaha Hawlaha",
      "testimonials.quoteOperations": "HUFAN waxay isku darsataa hal-abuur iyo xirfado farsamo oo xooggan. Natiijadii ugu dambaysay waxay ahayd mid xirfad leh, fudud in la isticmaalo, isla markaana ahayd joogitaanka dijitaalka ah ee ganacsigeennu doonayay.",
      "btn.theme.light": "U beddel qaabka iftiinka",
      "btn.theme.dark": "U beddel qaabka mugdiga",
      "btn.language.en": "U beddel Ingiriis",
      "btn.language.so": "U beddel Soomaali",
      "theme.light": "Hindise",
      "theme.dark": "Madow",
      "contact.form.name": "Magaca oo buuxa",
      "contact.form.email": "Email",
      "contact.form.company": "Shirkadda / Ururka",
      "contact.form.company.optional": "(ikhtiyaar)",
      "contact.form.service": "Adeegga",
      "contact.form.budget": "Bajet",
      "contact.form.budget.optional": "(ikhtiyaar)",
      "contact.form.details": "Faahfaahinta mashruuca",
      "contact.form.placeholder.name": "Magacaaga",
      "contact.form.placeholder.email": "magaca@example.com",
      "contact.form.placeholder.company": "Magaca shirkadda",
      "contact.form.placeholder.details": "Noosheeg mashruucaaga",
      "contact.form.submit": "Dir Wejdiinta Mashruuca",
      "form.validation.name": "Fadlan geli magacaada oo buuxa.",
      "form.validation.email": "Fadlan geli email sax ah.",
      "form.validation.service": "Fadlan dooro adeeg.",
      "form.validation.details": "Fadlan bixi faahfaahin dheeraad ah oo ku saabsan mashruucaaga.",
      "form.validation.prompt": "Fadlan hubi goobaha la xusay oo mar kale isku day.",
      "form.status.emailDraft": "Barnaamijka email-kaaga waa inuu ku furaa qoraal diyaar ah. Dib u eeg oo u dir hufan.agency@gmail.com si aad u dhammaystirto codsigaaga.",
    },
  };

  const staticTextMap = {
    en: {
      "Home": "Home",
      "About": "About",
      "Services": "Services",
      "Projects": "Projects",
      "Contact": "Contact",
      "Let's Talk": "Let's Talk",
      "Let's Work Together": "Let's Work Together",
      "Open menu": "Open menu",
      "Close menu": "Close menu",
      "What We Do": "What We Do",
      "Our Work": "Our Work",
      "Digital solutions": "Digital solutions",
      "built with purpose.": "built with purpose.",
      "About HUFAN": "About HUFAN",
      "Why HUFAN": "Why HUFAN",
      "Need a Digital Solution?": "Need a Digital Solution?",
      "Let's build something meaningful.": "Let's build something meaningful.",
      "Project Inquiry": "Project Inquiry",
      "Tell us about your project.": "Tell us about your project.",
      "Share a few details and we'll get a better understanding of what you're looking to build.": "Share a few details and we'll get a better understanding of what you're looking to build.",
      "Email": "Email",
      "Phone": "Phone",
      "Availability": "Availability",
      "Studio": "Studio",
      "Available for new projects": "Available for new projects",
      "Digital-first · Working worldwide": "Digital-first · Working worldwide",
      "Privacy Policy": "Privacy Policy",
      "Terms of Service": "Terms of Service",
      "Legal": "Legal",
      "Last updated: October 2026": "Last updated: October 2026",
      "WE BUILD DIGITAL EXPERIENCES THAT MATTER": "WE BUILD DIGITAL EXPERIENCES THAT MATTER",
      "View Our Work": "View Our Work",
      "We build digital": "We build digital",
      "experiences that matter.": "experiences that matter.",
      "We build digital experiences that matter.": "We build digital experiences that matter.",
      "HUFAN creates modern websites, digital products, and technology experiences designed to help businesses grow, connect, and stand out.": "HUFAN creates modern websites, digital products, and technology experiences designed to help businesses grow, connect, and stand out.",
      "Let's Work Together": "Let's Work Together",
      "Digital-first. Built for what's next.": "Digital-first. Built for what's next.",
      "Who We Are": "Who We Are",
      "Technology should make ideas": "Technology should make ideas",
      "more meaningful.": "more meaningful.",
      "What We Bring": "What We Bring",
      "Four capabilities.": "Four capabilities.",
      "One digital direction.": "One digital direction.",
      "Design": "Design",
      "Development": "Development",
      "Technology": "Technology",
      "Growth": "Growth",
      "Clarity": "Clarity",
      "Purpose": "Purpose",
      "Progress": "Progress",
      "How We Work": "How We Work",
      "From idea to something real.": "From idea to something real.",
      "Discover": "Discover",
      "Build": "Build",
      "Launch": "Launch",
      "Let's Build": "Let's Build",
      "Have something worth building?": "Have something worth building?",
      "Start a Project": "Start a Project",
      "We turn ideas into meaningful digital experiences.": "We turn ideas into meaningful digital experiences.",
      "Digital-first. Built for what's next.": "Digital-first. Built for what's next.",
      "Our approach is simple: understand the problem, simplify the experience, build carefully, and keep improving.": "Our approach is simple: understand the problem, simplify the experience, build carefully, and keep improving.",
      "We combine thoughtful design, modern technology, and an understanding of business goals to create digital solutions that are useful, scalable, and built with purpose.": "We combine thoughtful design, modern technology, and an understanding of business goals to create digital solutions that are useful, scalable, and built with purpose.",
      "Good digital experiences should be understandable, focused, and easy to use.": "Good digital experiences should be understandable, focused, and easy to use.",
      "Every feature, interaction, and design decision should have a reason behind it.": "Every feature, interaction, and design decision should have a reason behind it.",
      "We build today while keeping tomorrow's possibilities in mind.": "We build today while keeping tomorrow's possibilities in mind.",
      "We understand your idea, audience, goals, and challenges.": "We understand your idea, audience, goals, and challenges.",
      "We turn the idea into a clear, thoughtful digital experience.": "We turn the idea into a clear, thoughtful digital experience.",
      "We prepare the product for real users and future growth.": "We prepare the product for real users and future growth.",
      "We develop the solution using modern tools and technologies.": "We develop the solution using modern tools and technologies.",
      "Clear interfaces and experiences designed around real users, real needs, and real business goals.": "Clear interfaces and experiences designed around real users, real needs, and real business goals.",
      "Responsive, reliable websites and applications built with modern technologies and clean structure.": "Responsive, reliable websites and applications built with modern technologies and clean structure.",
      "Practical technology choices that help digital products remain useful, maintainable, and ready to grow.": "Practical technology choices that help digital products remain useful, maintainable, and ready to grow.",
      "Digital experiences created with long-term business goals, improvement, and future opportunities in mind.": "Digital experiences created with long-term business goals, improvement, and future opportunities in mind.",
      "HUFAN is a digital-first company focused on creating modern websites, digital products, and technology experiences for businesses and organizations.": "HUFAN is a digital-first company focused on creating modern websites, digital products, and technology experiences for businesses and organizations.",
      "Tell us what you're working on and let's turn the idea into a digital experience.": "Tell us what you're working on and let's turn the idea into a digital experience.",
      "Follow HUFAN": "Follow HUFAN",
      "Explore": "Explore",
      "Web Development": "Web Development",
      "UI/UX Design": "UI/UX Design",
      "Digital Products": "Digital Products",
      "AI & Automation": "AI & Automation",
      "App Development": "App Development",
      "© 2026 HUFAN. All rights reserved.": "© 2026 HUFAN. All rights reserved.",
      "From idea to": "From idea to",
      "something real.": "something real.",
    },
    so: {
      "Home": "Bogga Hore",
      "About": "Ku saabsan",
      "Services": "Adeegyo",
      "Projects": "Mashaariicda",
      "Contact": "Xiriir",
      "Let's Talk": "La hadal",
      "Let's Work Together": "Aynu wada shaqeyno",
      "Open menu": "Fura liiska",
      "Close menu": "Xir liiska",
      "What We Do": "Maxaad u baahan tahay?",
      "Our Work": "Shaqadeena",
      "Digital solutions": "Xalka dhijitaalka",
      "built with purpose.": "loo sameeyay ujeeddo leh.",
      "About HUFAN": "Ku saabsan HUFAN",
      "Why HUFAN": "Sababta HUFAN",
      "Need a Digital Solution?": "Ma u baahan tahay Xalka Dhijitaalka?",
      "Let's build something meaningful.": "Aynu dhisno wax macno leh.",
      "Project Inquiry": "Weydiin Mashruuc",
      "Tell us about your project.": "Noosheeg mashruucaaga.",
      "Share a few details and we'll get a better understanding of what you're looking to build.": "La wadaag faahfaahin yar oo aan fahmi karno waxa aad rabto in la dhiso.",
      "Email": "Email",
      "Phone": "Telefoon",
      "Availability": "Helitaanka",
      "Studio": "Istuudiyaha",
      "Available for new projects": "Waa diyaar ah mashruucyo cusub",
      "Digital-first · Working worldwide": "Digital-first · Waxaan ka shaqeynaa adduunka oo dhan",
      "Privacy Policy": "Siyaasadda Asturnaanta",
      "Terms of Service": "Shuruudaha Adeegga",
      "Legal": "Sharciga",
      "Last updated: October 2026": "La cusboonaysiiyay: Oktoobar 2026",
      "WE BUILD DIGITAL EXPERIENCES THAT MATTER": "WAXAAN DHISNAA WAAYO-ARAGNIMO DHIJITAAL OO MACNO LEH",
      "View Our Work": "Eeg Shaqadeena",
      "We build digital": "Waxaan dhisnaa",
      "experiences that matter.": "waayo-aragnimo macno leh.",
      "We build digital experiences that matter.": "Waxaan dhisnaa waayo-aragnimo macno leh.",
      "HUFAN creates modern websites, digital products, and technology experiences designed to help businesses grow, connect, and stand out.": "HUFAN waxay abuuraa mareegaha casriga ah, alaab dhijitaal, iyo waayo-aragnimo teknolojiyadeed oo caawiya ganacsiyada inay kobciyaan, isku xiraan, oo ay u muuqdaan.",
      "Let's Work Together": "Aynu wada shaqeyno",
      "Digital-first. Built for what's next.": "Digital-first. Ujeeddadu waa waxa xiga.",
      "Who We Are": "Yaan nahay",
      "Technology should make ideas": "Teknoolajiyadda waa inay fikradaha",
      "more meaningful.": "wax ka macno badan sameysaa.",
      "What We Bring": "Maxaan keenaa",
      "Four capabilities.": "Afar karti.",
      "One digital direction.": "Hal jihod dhijitaal ah.",
      "Design": "Nashqadeynta",
      "Development": "Horumarinta",
      "Technology": "Teknoolajiyadda",
      "Growth": "Kobaca",
      "Clarity": "Cadeynta",
      "Purpose": "Ujeeddo",
      "Progress": "Horumarka",
      "How We Work": "Sidee ayaan u shaqeynaa",
      "From idea to something real.": "Fikrad ilaa wax dhabta ah.",
      "Discover": "Baro",
      "Build": "Dhis",
      "Launch": "Bilow",
      "Let's Build": "Aynu dhisno",
      "Have something worth building?": "Ma haysaa wax la dhisi karo?",
      "Start a Project": "Bilaaw mashruuc",
      "We turn ideas into meaningful digital experiences.": "Waxaan fikradaha u beddelnaa waayo-aragnimo dhijitaal oo macno leh.",
      "Digital-first. Built for what's next.": "Digital-first. Ujeeddadu waa waxa xiga.",
      "Our approach is simple: understand the problem, simplify the experience, build carefully, and keep improving.": "Habkayagu waa fudud: faham dhibaatada, yaree khibrada, dhis si taxaddar leh, oo sii horumar.",
      "We combine thoughtful design, modern technology, and an understanding of business goals to create digital solutions that are useful, scalable, and built with purpose.": "Waxaan isku darnaa naqshad maskaxda leh, teknoolajiyadda casriga ah, iyo fahamka yoolalka ganacsiga si aan u abuurno xalal dhijitaal oo wax tar ah, la ballaari karo, oo ujeedo leh.",
      "Good digital experiences should be understandable, focused, and easy to use.": "Waayo-aragnimooyinka dhijitaalka ah waa inay noqdaan kuwo la fahmi karo, diiradda saaraya, iyo sahlan in la isticmaalo.",
      "Every feature, interaction, and design decision should have a reason behind it.": "Muuqaal kasta, isdhexgal kasta, iyo go'aanka naqshadeynta waa inay leeyihiin sababo ka dambeeya.",
      "We build today while keeping tomorrow's possibilities in mind.": "Waxaan maanta dhisnaa iyadoo mustaqbalka la xusuusan.",
      "We understand your idea, audience, goals, and challenges.": "Waxaan fahmaa fikradahaaga, dhagaystayaasha, yoolalka, iyo caqabadaha.",
      "We turn the idea into a clear, thoughtful digital experience.": "Waxaan fikradaha u beddelnaa waayo-aragnimo cad oo maskax leh.",
      "We prepare the product for real users and future growth.": "Waxaan u diyaargaro-galinaa alaabta isticmaalayaasha dhabta ah iyo korriinka mustaqbalka.",
      "We develop the solution using modern tools and technologies.": "Waxaan xalkeena u horumarinnaa iyadoo la isticmaalayo qalab iyo teknoolajiyadda casriga ah.",
      "Clear interfaces and experiences designed around real users, real needs, and real business goals.": "Midaafadaha cad iyo waayo-aragnimooyinka ee u qaabaysan isticmaalayaasha dhabta, baahiyaha, iyo yoolalka ganacsiga.",
      "Responsive, reliable websites and applications built with modern technologies and clean structure.": "Mareegaha iyo codsiyada jawaab celin leh, la isku halleyn karo, oo la dhisay teknoolajiyadda casriga ah iyo qaab dhismeed nadiif ah.",
      "Practical technology choices that help digital products remain useful, maintainable, and ready to grow.": "Xulashooyin teknoolaji ah oo wax ku ool ah oo ka caawiya alaab dhijitaal in ay noqoto mid faa'iidada leh, la kormeeri karo, iyo diyaar u ah kobaca.",
      "Digital experiences created with long-term business goals, improvement, and future opportunities in mind.": "Waayo-aragnimooyinka dhijitaalka ah ee la abuuro iyada oo la tixgelinayo yoolalka ganacsiga muddada dheer, horumarinta, iyo fursadaha mustaqbalka.",
      "HUFAN is a digital-first company focused on creating modern websites, digital products, and technology experiences for businesses and organizations.": "HUFAN waa shirkad digital-first ah oo diiradda saarta abuurista mareegaha casriga ah, alaab dhijitaal, iyo waayo-aragnimo teknoolajiyadeed ganacsiyo iyo ururo.",
      "Tell us what you're working on and let's turn the idea into a digital experience.": "Noosheeg waxa aad ka shaqeyneysid, aynu fikradaha u beddelno waayo-aragnimo dhijitaal.",
      "Follow HUFAN": "Raac HUFAN",
      "Explore": "Baadh",
      "Web Development": "Horumarinta Webka",
      "UI/UX Design": "Nashqadeynta UI/UX",
      "Digital Products": "Alaabada Dhijitaalka",
      "AI & Automation": "AI & Automation",
      "App Development": "Horumarinta App-ka",
      "© 2026 HUFAN. All rights reserved.": "© 2026 HUFAN. Xuquuqda dhan waa la hayaa.",
      "From idea to": "Fikrad ilaa",
      "something real.": "wax dhabta ah.",
    },
  };

  const getStoredValue = (key, fallback) => {
    try {
      const value = localStorage.getItem(key);
      return value || fallback;
    } catch (error) {
      return fallback;
    }
  };

  const setStoredValue = (key, value) => {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      // Ignore storage failures in restricted environments.
    }
  };

  const getPreferredTheme = () => {
    const storedTheme = getStoredValue(STORAGE_KEYS.theme, "");

    if (storedTheme === "light" || storedTheme === "dark") {
      return storedTheme;
    }

    return "light";
  };

  const getPreferredLanguage = () => {
    const storedLanguage = getStoredValue(STORAGE_KEYS.language, "");

    if (storedLanguage === "en" || storedLanguage === "so") {
      return storedLanguage;
    }

    return "en";
  };

  const getTranslationText = (lang, key) => {
    return translations[lang]?.[key] || translations.en[key] || key;
  };

  const staticTextOriginals = new WeakMap();

  const applyTheme = (theme) => {
    const root = document.documentElement;
    const isDark = theme === "dark";

    root.classList.toggle("dark", isDark);
    root.setAttribute("data-theme", theme);
    document.body.classList.toggle("dark", isDark);

    if (root.style) {
      root.style.colorScheme = isDark ? "dark" : "light";
    }

    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      const icon = button.querySelector("[data-theme-icon]");
      const label = button.querySelector("[data-theme-label]");

      if (icon) {
        icon.textContent = isDark ? "☀" : "☾";
      }

      button.setAttribute(
        "aria-label",
        isDark ? getTranslationText(currentLanguage, "btn.theme.light") : getTranslationText(currentLanguage, "btn.theme.dark"),
      );
      button.setAttribute("aria-pressed", String(isDark));
      button.title = isDark ? getTranslationText(currentLanguage, "btn.theme.light") : getTranslationText(currentLanguage, "btn.theme.dark");

      if (label) {
        label.textContent = isDark ? getTranslationText(currentLanguage, "theme.light") : getTranslationText(currentLanguage, "theme.dark");
      }
    });
  };

  const translateStaticText = (language) => {
    const map = staticTextMap[language] || staticTextMap.en;
    const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.textContent || !node.textContent.trim()) {
          return NodeFilter.FILTER_REJECT;
        }

        const parent = node.parentElement;

        if (!parent || ["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName)) {
          return NodeFilter.FILTER_REJECT;
        }

        return NodeFilter.FILTER_ACCEPT;
      },
    });

    const nodes = [];

    while (walk.nextNode()) {
      nodes.push(walk.currentNode);
    }

    nodes.forEach((node) => {
      if (!staticTextOriginals.has(node)) {
        staticTextOriginals.set(node, node.textContent || "");
      }

      const rawText = staticTextOriginals.get(node) || "";
      const leadingWhitespace = rawText.match(/^\s*/)?.[0] || "";
      const trailingWhitespace = rawText.match(/\s*$/)?.[0] || "";
      const normalizedText = rawText.replace(/\s+/g, " ").trim();
      const translation = map[normalizedText];

      if (translation) {
        node.textContent = `${leadingWhitespace}${translation}${trailingWhitespace}`;
      }
    });
  };

  const updateFormValidationMessages = (language = currentLanguage) => {
    const messages = {
      en: {
        name: "Please enter your full name.",
        email: "Please enter a valid email address.",
        service: "Please select a service.",
        details: "Please tell us a little more about your project.",
      },
      so: {
        name: "Fadlan geli magacaada oo buuxa.",
        email: "Fadlan geli email sax ah.",
        service: "Fadlan dooro adeeg.",
        details: "Fadlan noo sheek adfaaf faahfaahin ka badan oo ku saabsan mashruucaaga.",
      },
    };

    const activeMessages = messages[language] || messages.en;

    const projectName = document.querySelector("#project-name");
    const projectEmail = document.querySelector("#project-email");
    const projectService = document.querySelector("#project-service");
    const projectDetails = document.querySelector("#project-details");

    if (projectName) projectName.setAttribute("aria-label", activeMessages.name);
    if (projectEmail) projectEmail.setAttribute("aria-label", activeMessages.email);
    if (projectService) projectService.setAttribute("aria-label", activeMessages.service);
    if (projectDetails) projectDetails.setAttribute("aria-label", activeMessages.details);
  };

  const applyTranslation = (language) => {
    currentLanguage = language;
    document.documentElement.lang = language;

    document.querySelectorAll("[data-language-toggle]").forEach((button) => {
      const label = button.querySelector("[data-language-label]") || button;
      const nextLanguage = language === "en" ? "so" : "en";
      const targetLabel = language === "en" ? "SO" : "EN";

      label.textContent = targetLabel;
      button.setAttribute("aria-label", language === "en" ? getTranslationText(language, "btn.language.so") : getTranslationText(language, "btn.language.en"));
      button.setAttribute("title", language === "en" ? getTranslationText(language, "btn.language.so") : getTranslationText(language, "btn.language.en"));
      button.dataset.targetLanguage = nextLanguage;
      button.dataset.language = language;
    });

    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((element) => {
      const key = element.dataset.i18n;
      const value = getTranslationText(language, key);

      if (value && element.tagName !== "INPUT" && element.tagName !== "TEXTAREA") {
        element.textContent = value;
      }
    });

    const placeholders = {
      name: getTranslationText(language, "contact.form.placeholder.name"),
      email: getTranslationText(language, "contact.form.placeholder.email"),
      company: getTranslationText(language, "contact.form.placeholder.company"),
      details: getTranslationText(language, "contact.form.placeholder.details"),
    };

    const projectName = document.querySelector("#project-name");
    const projectEmail = document.querySelector("#project-email");
    const projectCompany = document.querySelector("#project-company");
    const projectDetails = document.querySelector("#project-details");

    if (projectName) projectName.placeholder = placeholders.name;
    if (projectEmail) projectEmail.placeholder = placeholders.email;
    if (projectCompany) projectCompany.placeholder = placeholders.company;
    if (projectDetails) projectDetails.placeholder = placeholders.details;

    translateStaticText(language);
    updateFormValidationMessages(language);

    const mobileMenuButton = document.querySelector("#mobile-menu-button");
    if (mobileMenuButton) {
      const isOpen = mobileMenuButton.getAttribute("aria-expanded") === "true";
      mobileMenuButton.setAttribute(
        "aria-label",
        getTranslationText(language, isOpen ? "nav.closeMenu" : "nav.openMenu"),
      );
    }

    applyTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
  };

  const setupLanguageSelector = () => {
    document.querySelectorAll("[data-language-toggle]").forEach((toggle) => {
      toggle.addEventListener("click", () => {
        const nextLanguage = toggle.dataset.targetLanguage || (currentLanguage === "en" ? "so" : "en");
        setStoredValue(STORAGE_KEYS.language, nextLanguage);
        applyTranslation(nextLanguage);
      });
    });
  };

  const setupThemeToggle = () => {
    document.querySelectorAll("[data-theme-toggle]").forEach((toggle) => {
      toggle.addEventListener("click", () => {
        const nextTheme = document.documentElement.classList.contains("dark") ? "light" : "dark";
        setStoredValue(STORAGE_KEYS.theme, nextTheme);
        applyTheme(nextTheme);
      });
    });
  };

  const findNavActions = (nav) => {
    return Array.from(nav.querySelectorAll("div")).find((node) => {
      const classes = node.classList;
      return classes.contains("hidden") && classes.contains("items-center") && classes.contains("gap-3") && classes.contains("md:flex");
    });
  };

  const ensureNavigationControls = () => {
    document.querySelectorAll("nav").forEach((nav) => {
      const actions = findNavActions(nav);

      if (!actions) {
        return;
      }

      const existingCta = nav.querySelector('a[href*="contact"], a[href*="#project-form"]') || nav.querySelector('a[href$="contact.html"]');
      const contactHref = existingCta ? existingCta.getAttribute("href") : "./contact.html";

      const languageButton = document.createElement("button");
      languageButton.type = "button";
      languageButton.className = "language-toggle nav-control flex h-10 items-center justify-center rounded-full border border-border bg-white/80 px-3 text-sm font-semibold text-heading transition hover:bg-surface dark:bg-slate-900/80 dark:text-white";
      languageButton.dataset.languageToggle = "true";
      languageButton.dataset.targetLanguage = getPreferredLanguage() === "en" ? "so" : "en";
      languageButton.innerHTML = '<span data-language-label>SO</span>';
      languageButton.setAttribute("aria-label", getPreferredLanguage() === "en" ? "Switch to Somali" : "Switch to English");

      const themeButton = document.createElement("button");
      themeButton.type = "button";
      themeButton.className = "theme-toggle nav-control flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/80 text-heading transition hover:bg-surface dark:bg-slate-900/80 dark:text-white";
      themeButton.dataset.themeToggle = "true";
      themeButton.setAttribute("aria-label", "Toggle dark mode");
      themeButton.innerHTML = '<span data-theme-icon>☾</span>';

      const cta = document.createElement("a");
      cta.href = contactHref;
      cta.className = "rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white transition hover:bg-brand-hover";
      cta.textContent = getPreferredLanguage() === "en" ? "Let's Talk" : "La hadal";
      cta.setAttribute("data-i18n", "nav.talk");

      actions.innerHTML = "";
      actions.append(languageButton, themeButton, cta);
    });

    document.querySelectorAll("#mobile-menu .flex").forEach((menuList) => {
      if (menuList.querySelector("[data-language-toggle]")) {
        return;
      }

      const languageButton = document.createElement("button");
      languageButton.type = "button";
      languageButton.className = "language-toggle nav-control mt-2 rounded-2xl border border-border bg-white/80 px-4 py-3 text-left text-sm font-medium text-heading dark:bg-slate-900/80 dark:text-white";
      languageButton.dataset.languageToggle = "true";
      languageButton.dataset.targetLanguage = getPreferredLanguage() === "en" ? "so" : "en";
      languageButton.innerHTML = '<span data-language-label>SO</span>';

      const themeButton = document.createElement("button");
      themeButton.type = "button";
      themeButton.className = "theme-toggle nav-control mt-2 rounded-2xl border border-border bg-white/80 px-4 py-3 text-left text-sm font-medium text-heading dark:bg-slate-900/80 dark:text-white";
      themeButton.dataset.themeToggle = "true";
      themeButton.innerHTML = '<span data-theme-icon>☾</span>';

      const cta = document.createElement("a");
      cta.href = "./contact.html";
      cta.className = "mt-2 rounded-full bg-brand px-5 py-3 text-center text-sm font-medium text-white transition hover:bg-brand-hover";
      cta.textContent = getPreferredLanguage() === "en" ? "Let's Talk" : "La hadal";
      cta.setAttribute("data-i18n", "nav.talk");

      menuList.append(languageButton, themeButton, cta);
    });
  };

  const setupMobileMenu = () => {
    const mobileMenuButton = document.querySelector("#mobile-menu-button");
    const mobileMenu = document.querySelector("#mobile-menu");
    const mobileMenuIcon = document.querySelector("#mobile-menu-icon");

    if (mobileMenuButton && mobileMenu && mobileMenuIcon) {
      mobileMenuButton.addEventListener("click", () => {
        const isOpen = mobileMenuButton.getAttribute("aria-expanded") === "true";
        mobileMenu.classList.toggle("hidden");
        mobileMenuButton.setAttribute("aria-expanded", String(!isOpen));
        mobileMenuButton.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");
        mobileMenuIcon.textContent = isOpen ? "☰" : "✕";
      });
    }

    const mobileMenuLinks = mobileMenu ? mobileMenu.querySelectorAll("a") : [];
    mobileMenuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (mobileMenu) mobileMenu.classList.add("hidden");
        if (mobileMenuButton) {
          mobileMenuButton.setAttribute("aria-expanded", "false");
          mobileMenuButton.setAttribute("aria-label", "Open menu");
        }
        if (mobileMenuIcon) {
          mobileMenuIcon.textContent = "☰";
        }
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") {
        return;
      }

      if (!mobileMenu || !mobileMenuButton || !mobileMenuIcon) {
        return;
      }

      if (!mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
        mobileMenuButton.setAttribute("aria-expanded", "false");
        mobileMenuButton.setAttribute("aria-label", "Open menu");
        mobileMenuIcon.textContent = "☰";
      }
    });
  };

  const setupNavbarScrollEffect = () => {
    const siteHeader = document.querySelector("#site-header");
    const siteNavbar = document.querySelector("#site-navbar");

    if (siteHeader && siteNavbar) {
      const handleNavbarScroll = () => {
        const isScrolled = window.scrollY > 20;

        siteHeader.classList.toggle("pt-2", isScrolled);
        siteHeader.classList.toggle("pt-4", !isScrolled);
        siteHeader.classList.toggle("md:pt-6", !isScrolled);
        siteNavbar.classList.toggle("shadow-md", isScrolled);
        siteNavbar.classList.toggle("shadow-sm", !isScrolled);
      };

      window.addEventListener("scroll", handleNavbarScroll, { passive: true });
      handleNavbarScroll();
    }
  };

  const setupFloatingActions = () => {
    const actions = document.createElement("div");
    actions.className = "floating-actions";

    const whatsappLink = document.createElement("a");
    whatsappLink.className = "floating-action floating-action-whatsapp";
    whatsappLink.href = `https://wa.me/905391379884?text=${encodeURIComponent("Hello HUFAN, I would like to know more about your services.")}`;
    whatsappLink.target = "_blank";
    whatsappLink.rel = "noopener noreferrer";
    whatsappLink.setAttribute("aria-label", "Contact HUFAN on WhatsApp");
    whatsappLink.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20.52 3.48A11.8 11.8 0 0 0 12.12 0C5.6 0 .3 5.3.3 11.82c0 2.08.54 4.1 1.57 5.88L.2 24l6.45-1.69a11.8 11.8 0 0 0 5.47 1.39h.01c6.52 0 11.82-5.3 11.82-11.82 0-3.16-1.23-6.13-3.43-8.4ZM12.13 21.7h-.01a9.8 9.8 0 0 1-4.99-1.36l-.36-.21-3.83 1 1.02-3.73-.24-.38a9.8 9.8 0 0 1-1.5-5.2c0-5.43 4.42-9.85 9.86-9.85a9.78 9.78 0 0 1 6.97 2.89 9.78 9.78 0 0 1 2.88 6.98c0 5.43-4.42 9.86-9.8 9.86Zm5.4-7.38c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.46.13-.6.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.1 4.49.71.3 1.27.49 1.7.62.71.23 1.36.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"/></svg>';

    const backToTopButton = document.createElement("button");
    backToTopButton.className = "floating-action floating-action-top";
    backToTopButton.type = "button";
    backToTopButton.setAttribute("aria-label", "Back to top");
    backToTopButton.hidden = true;
    backToTopButton.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 5 4 13l1.41 1.41L11 8.83V20h2V8.83l5.59 5.58L20 13l-8-8Z"/></svg>';

    const protectedContent = document.querySelectorAll("#project-form, footer");

    const updateBackToTopVisibility = () => {
      backToTopButton.hidden = window.scrollY <= 300;

      const actionsRect = actions.getBoundingClientRect();
      const overlapsProtectedContent = Array.from(protectedContent).some((element) => {
        const contentRect = element.getBoundingClientRect();
        return actionsRect.left < contentRect.right
          && actionsRect.right > contentRect.left
          && actionsRect.top < contentRect.bottom
          && actionsRect.bottom > contentRect.top;
      });

      actions.classList.toggle("is-obscured", overlapsProtectedContent);
    };

    window.addEventListener("scroll", updateBackToTopVisibility, { passive: true });
    window.addEventListener("resize", updateBackToTopVisibility);
    backToTopButton.addEventListener("click", () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
    });

    actions.append(whatsappLink, backToTopButton);
    document.body.append(actions);
    updateBackToTopVisibility();
  };

  const setupHeroMotion = () => {
    const heroSection = document.querySelector("#hero");
    const heroGlow = document.querySelector(".hero-glow");
    const heroOrb = document.querySelector(".hero-orb");

    if (heroSection && heroGlow && heroOrb) {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const isTouchDevice = window.matchMedia("(hover: none)").matches;

      if (!prefersReducedMotion && !isTouchDevice) {
        heroSection.addEventListener("mousemove", (event) => {
          const rect = heroSection.getBoundingClientRect();
          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;
          const moveX = (x / rect.width - 0.5) * 30;
          const moveY = (y / rect.height - 0.5) * 30;

          heroGlow.style.setProperty("--hero-mouse-x", `${moveX}px`);
          heroGlow.style.setProperty("--hero-mouse-y", `${moveY}px`);
          heroOrb.style.setProperty("--hero-mouse-x", `${moveX * -0.6}px`);
          heroOrb.style.setProperty("--hero-mouse-y", `${moveY * -0.6}px`);
        });

        heroSection.addEventListener("mouseleave", () => {
          heroGlow.style.setProperty("--hero-mouse-x", "0px");
          heroGlow.style.setProperty("--hero-mouse-y", "0px");
          heroOrb.style.setProperty("--hero-mouse-x", "0px");
          heroOrb.style.setProperty("--hero-mouse-y", "0px");
        });
      }
    }
  };

  const setupScrollReveal = () => {
    const revealElements = document.querySelectorAll(".about-reveal, .services-reveal, .projects-reveal, .contact-reveal, .footer-reveal");

    if (revealElements.length === 0) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.15 });

    revealElements.forEach((element) => revealObserver.observe(element));
  };

  const setupProjectForm = () => {
    const projectForm = document.querySelector("#project-form");

    if (!projectForm) {
      return;
    }

    const projectName = document.querySelector("#project-name");
    const projectEmail = document.querySelector("#project-email");
    const projectService = document.querySelector("#project-service");
    const projectDetails = document.querySelector("#project-details");
    const projectNameError = document.querySelector("#project-name-error");
    const projectEmailError = document.querySelector("#project-email-error");
    const projectServiceError = document.querySelector("#project-service-error");
    const projectDetailsError = document.querySelector("#project-details-error");
    const projectFormStatus = document.querySelector("#project-form-status");
    const showFieldError = (field, errorElement, message) => {
      if (!field || !errorElement) {
        return;
      }

      field.classList.add("border-red-400", "focus:border-red-500");
      field.classList.remove("border-neutral-200", "border-border");
      errorElement.textContent = message;
      errorElement.classList.remove("hidden");
    };

    const clearFieldError = (field, errorElement) => {
      if (!field || !errorElement) {
        return;
      }

      field.classList.remove("border-red-400", "focus:border-red-500");
      field.classList.add("border-neutral-200", "border-border");
      errorElement.textContent = "";
      errorElement.classList.add("hidden");
    };

    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const validateProjectForm = () => {
      let isValid = true;
      const messages = {
        en: {
          name: "Please enter your full name.",
          email: "Please enter a valid email address.",
          service: "Please select a service.",
          details: "Please tell us a little more about your project.",
        },
        so: {
          name: "Fadlan geli magacaada oo buuxa.",
          email: "Fadlan geli email sax ah.",
          service: "Fadlan dooro adeeg.",
          details: "Fadlan noo sheek adfaaf faahfaahin ka badan oo ku saabsan mashruucaaga.",
        },
      };

      const activeMessages = messages[currentLanguage] || messages.en;

      clearFieldError(projectName, projectNameError);
      clearFieldError(projectEmail, projectEmailError);
      clearFieldError(projectService, projectServiceError);
      clearFieldError(projectDetails, projectDetailsError);

      const nameValue = projectName?.value.trim() || "";
      if (nameValue.length < 2) {
        showFieldError(projectName, projectNameError, activeMessages.name);
        isValid = false;
      }

      const emailValue = projectEmail?.value.trim() || "";
      if (!isValidEmail(emailValue)) {
        showFieldError(projectEmail, projectEmailError, activeMessages.email);
        isValid = false;
      }

      const serviceValue = projectService?.value.trim() || "";
      if (!serviceValue) {
        showFieldError(projectService, projectServiceError, activeMessages.service);
        isValid = false;
      }

      const detailsValue = projectDetails?.value.trim() || "";
      if (detailsValue.length < 10) {
        showFieldError(projectDetails, projectDetailsError, activeMessages.details);
        isValid = false;
      }

      return isValid;
    };

    const setFormStatus = (message, type) => {
      if (!projectFormStatus) {
        return;
      }

      projectFormStatus.classList.remove("hidden", "bg-red-50", "text-red-600", "bg-green-50", "text-green-700", "bg-neutral-100", "text-neutral-700");

      if (type === "success") {
        projectFormStatus.classList.add("bg-green-50", "text-green-700");
      }

      if (type === "error") {
        projectFormStatus.classList.add("bg-red-50", "text-red-600");
      }

      if (type === "info") {
        projectFormStatus.classList.add("bg-neutral-100", "text-neutral-700");
      }

      projectFormStatus.textContent = message;
    };

    projectForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const isValid = validateProjectForm();
      if (!isValid) {
        setFormStatus(getTranslationText(currentLanguage, "form.validation.prompt"), "error");
        return;
      }

      const formData = new FormData(projectForm);
      const labels = {
        name: getTranslationText(currentLanguage, "contact.form.name"),
        email: getTranslationText(currentLanguage, "contact.form.email"),
        company: getTranslationText(currentLanguage, "contact.form.company"),
        service: getTranslationText(currentLanguage, "contact.form.service"),
        budget: getTranslationText(currentLanguage, "contact.form.budget"),
        details: getTranslationText(currentLanguage, "contact.form.details"),
      };
      const lines = Object.entries(labels)
        .filter(([field]) => (field !== "company" && field !== "budget") || formData.get(field))
        .map(([field, label]) => `${label}: ${formData.get(field) || ""}`);
      const subject = encodeURIComponent("New HUFAN Project Inquiry");
      const body = encodeURIComponent(lines.join("\r\n"));
      const mailtoUrl = `mailto:hufan.agency@gmail.com?subject=${subject}&body=${body}`;

      setFormStatus(getTranslationText(currentLanguage, "form.status.emailDraft"), "info");
      window.location.href = mailtoUrl;
    });
  };

  let currentLanguage = "en";

  document.addEventListener("DOMContentLoaded", () => {
    setupMobileMenu();
    setupNavbarScrollEffect();
    setupFloatingActions();
    setupHeroMotion();
    setupScrollReveal();
    ensureNavigationControls();

    const initialTheme = getPreferredTheme();
    const initialLanguage = getPreferredLanguage();

    applyTheme(initialTheme);
    applyTranslation(initialLanguage);
    setupThemeToggle();
    setupLanguageSelector();
    setupProjectForm();

    const currentYear = document.querySelector("#current-year");
    if (currentYear) {
      currentYear.textContent = new Date().getFullYear();
    }

    setStoredValue(STORAGE_KEYS.theme, initialTheme);
    setStoredValue(STORAGE_KEYS.language, initialLanguage);
  });
})();
