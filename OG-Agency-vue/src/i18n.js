// src/i18n.js

import { createI18n } from "vue-i18n";

// Traductions pour les langues
const messages = {
  en: {
    welcome: "Welcome",
    hello: "Hello World!",
    navigation: {
      home: "Home",
      offer: "Offer",
      about: "About Us",
      contact: "Contact Us",
      legal: "Legal Notice",
    },
    footer: {
      agency_description: "Communication Agency",
      all_rights_reserved: "All rights reserved",
      cookies: "Cookies",
      cgu: "Terms of Use (C.G.U.)",
    },
    cookies: {
      title: "Cookie Policy",
      what_is_cookie: "What is a 'COOKIE'?",
      description:
        "A Cookie or tracker is an electronic file deposited on a device (computer, tablet, smartphone...) and read, for example, when visiting a website, reading an email, installing or using software or a mobile application, whatever the type of device used.",
      consent_notice:
        "By continuing to browse this site, the client or prospect is deemed to have been informed and to have accepted the use of said cookies. The consent given is valid for a period of thirteen (13) months.",
      disable_cookies:
        "The user can disable cookies from their browser settings.",
      we_use_cookies: "We use cookies to:",
      use_purposes: {
        purpose1: "Make our site work as expected.",
        purpose2: "Identify you when you log into our site.",
        purpose3: "Remember your preferences during and between visits.",
        purpose4: "Improve the speed/security of the site.",
        purpose5:
          "Allow you to share pages with social networks like Facebook.",
        purpose6: "Continuously improve our website.",
      },
      not_use_cookies: "We do not use cookies to:",
      not_use_purposes: {
        purpose1:
          "Collect personally identifiable information without your explicit consent.",
        purpose2: "Collect sensitive information.",
        purpose3: "Pass data to advertising networks.",
        purpose4: "Pass personally identifiable data to third parties.",
      },
      statistics_cookies: "Statistics Cookies",
      analytics_description:
        "We use cookies to collect data about the audience of our website: the number of visitors, the technology they use, how long they spend on the site, and the pages they visit. This helps us continuously improve our website.",
      google_analytics:
        "Our website uses Google Analytics, a web analysis service provided by Google, Inc. ('Google'). Google Analytics uses cookies to help analyze how users interact with the site.",
      ip_note:
        "Google does not associate your IP address with other data held by Google.",
      cookie_disable_instruction:
        "You can disable cookies by adjusting your browser settings. However, this may limit your ability to access all the features of our site.",
    },
    legal: {
      title: "Legal Notice",
      owner: {
        title: "Site Owner",
        company: "Company Name:",
        registration: "Company Registration Number:",
        headquarters: "Headquarters:",
        siret: "SIRET (Headquarters):",
        vat: "VAT Number:",
        registration_date: "Registration Date:",
        activity: "Main Activities:",
        name: "Name:",
        surname: "Surname:",
        phone: "Phone:",
        email: "Email:",
        legal_form: "Legal Form:",
        capital: "Share Capital:",
        address: "Establishment Address:",
      },
      hosting: {
        title: "Site Hosting",
        company: "Company:",
        url: "Website URL:",
        domain: "Domain Name:",
        address: "Address:",
      },
    },
    terms: {
      title: "Terms of Service",
      privacy_policy: "Privacy Policy",
      privacy_intro:
        "We take your privacy seriously. This policy explains how we collect, use, and protect your personal information.",
      data_collected: "Data Collected",
      data_collected_description:
        "We collect the following data: your name, email, and any other information you voluntarily provide.",
      cookies: "Cookies",
      cookies_description:
        "Our website uses cookies to enhance your browsing experience. For more details, check our ",
      copyright: "Copyright",
      copyright_description:
        "All content on this website is owned by us or our content providers. You are not permitted to copy or reuse any part of this site without prior permission.",
      third_party_links: "Third-Party Links",
      third_party_links_description:
        "We may include links to third-party websites. We are not responsible for the content or practices of these websites.",
      disclaimer: "Disclaimer",
      disclaimer_description:
        "We do not take responsibility for any losses or damages caused by the use of this website.",
      bloctel_compliance: "Bloctel Compliance",
      bloctel_compliance_description:
        "In accordance with the Bloctel regulation, you have the right to register on a list to prevent telemarketing calls.",
      contact: "Contact",
      contact_description:
        "If you have any questions or concerns, you can reach us via:",
      email: "Email: contact@example.com",
      phone: "Phone: 123-456-7890",
      prompt_reply: "We will do our best to respond promptly to your inquiry.",
    },
    test: {
      lorem:
        " upon the last undertaking, the Board of Trade required that the ship's hull should undergo a strict examination. This costly operation accomplished, a long crack in her exterior plates was carefully repaired at a great expense, and the next proceeding was to fix the new boilers; the driving main-shaft of the wheels, which had been damaged during the last voyage, had to be replaced by a shaft, provided with two eccentric wheels, which insured the solidity of this important part. And now for the first time the 'Great Eastern' ",
    },
    quill: {
      french_title: "French",
      english_title: "English",
    },
  },
  fr: {
    welcome: "Bienvenue",
    hello: "Bonjour le monde !",
    navigation: {
      home: "Accueil",
      offer: "Offre",
      about: "À propos de nous",
      contact: "Contactez-nous",
      legal: "Mentions légales",
    },
    footer: {
      agency_description: "Agence de communication",
      all_rights_reserved: "Tous droits réservés",
      cookies: "Cookies",
      cgu: "Conditions Générales d'Utilisation (C.G.U.)",
    },
    cookies: {
      title: "Politique d'utilisation des cookies",
      what_is_cookie: "Qu'est-ce qu'un « COOKIE » ?",
      description:
        "Un Cookie ou traceur est un fichier électronique déposé sur un terminal (ordinateur, tablette, smartphone...) et lu par exemple lors de la consultation d'un site internet, de la lecture d'un courrier électronique, de l'installation ou de l'utilisation d'un logiciel ou d'une application mobile, et ce quel que soit le type de terminal utilisé.",
      consent_notice:
        "En poursuivant la navigation sur ce site, le client et/ou prospect sera réputé informé et avoir accepté l'utilisation desdits cookies. Le consentement donné sera valable pour une période de treize (13) mois.",
      disable_cookies:
        "L'utilisateur a la possibilité de désactiver les cookies à partir des paramètres de son navigateur.",
      we_use_cookies: "Nous utilisons des cookies pour :",
      use_purposes: {
        purpose1: "Faire fonctionner notre site le mieux possible.",
        purpose2:
          "Vous identifier lorsque vous vous connectez à notre site web.",
        purpose3: "Mémoriser vos préférences de navigation.",
        purpose4: "Améliorer la rapidité et la sécurité de notre site.",
        purpose5:
          "Vous permettre de partager des articles sur les réseaux sociaux tels que Facebook.",
        purpose6: "Améliorer en permanence notre site web.",
      },
      not_use_cookies: "Nous n'utilisons pas de cookies pour :",
      not_use_purposes: {
        purpose1:
          "Recueillir sans votre autorisation des informations personnelles qui permettraient de vous identifier.",
        purpose2: "Recueillir sans votre autorisation des données sensibles.",
        purpose3: "Transmettre vos données à des réseaux publicitaires.",
        purpose4: "Transmettre vos données personnelles à un tiers.",
      },
      statistics_cookies: "Cookies de statistiques",
      analytics_description:
        "Nous utilisons des cookies afin de collecter des données concernant l'audience de notre site : sa fréquentation, la technologie utilisée pour y accéder, le temps que passent les visiteurs sur le site, les pages qu'ils visitent, etc. Cela nous permet d'améliorer en permanence notre site.",
      google_analytics:
        "Notre site utilise Google Analytics, un service d'analyse de site internet proposé par Google, Inc. ('Google'). Google Analytics utilise des cookies pour permettre au site d'analyser la manière dont les utilisateurs y naviguent.",
      ip_note:
        "Google n'associe pas votre adresse IP avec d'autres données détenues par Google.",
      cookie_disable_instruction:
        "Vous pouvez désactiver les cookies en modifiant les paramètres de votre navigateur. Cependant, il est possible que cela vous empêche d'accéder à l'intégralité des fonctions de notre site internet.",
    },
    legal: {
      title: "Mentions légales",
      owner: {
        title: "Propriétaire du site",
        company: "Dénomination ou raison sociale:",
        registration: "Immatriculation au RCS, numéro:",
        headquarters: "Siège:",
        siret: "SIRET (Siège):",
        vat: "Numéro TVA intracommunautaire:",
        registration_date: "Date d’immatriculation:",
        activity: "Activités principales:",
        name: "Nom:",
        surname: "Prénom:",
        phone: "Téléphone:",
        email: "Email:",
        legal_form: "Forme juridique:",
        capital: "Capital social:",
        address: "Adresse de l’établissement:",
      },
      hosting: {
        title: "Hébergeur du site",
        company: "Société:",
        url: "Adresse URL:",
        domain: "Nom de domaine:",
        address: "Adresse:",
      },
    },
    terms: {
      title: "Conditions Générales d'Utilisation",
      privacy_policy: "Politique de Confidentialité",
      privacy_intro:
        "Nous prenons votre vie privée au sérieux. Cette politique explique comment nous collectons, utilisons et protégeons vos informations personnelles.",
      data_collected: "Données Collectées",
      data_collected_description:
        "Nous collectons les données suivantes : votre nom, votre email, et toute autre information que vous fournissez volontairement.",
      cookies: "Cookies",
      cookies_description:
        "Notre site utilise des cookies pour améliorer votre expérience de navigation. Pour plus de détails, consultez notre ",
      copyright: "Droits d'Auteur",
      copyright_description:
        "Tout le contenu de ce site web est la propriété de nos fournisseurs de contenu ou de nous-mêmes. Vous n'êtes pas autorisé à copier ou réutiliser une quelconque partie de ce site sans autorisation préalable.",
      third_party_links: "Liens vers des Ressources Tiers",
      third_party_links_description:
        "Nous pouvons inclure des liens vers des sites web tiers. Nous ne sommes pas responsables du contenu ou des pratiques de ces sites.",
      disclaimer: "Clause de Non-Responsabilité",
      disclaimer_description:
        "Nous ne prenons aucune responsabilité pour les pertes ou dommages causés par l'utilisation de ce site.",
      bloctel_compliance: "Conformité au Registre Bloctel",
      bloctel_compliance_description:
        "Conformément à la réglementation Bloctel, vous avez le droit de vous inscrire sur une liste pour empêcher les appels de télémarketing.",
      contact: "Contact",
      contact_description:
        "Si vous avez des questions ou des préoccupations, vous pouvez nous contacter via :",
      email: "Email : contact@example.com",
      phone: "Téléphone : 123-456-7890",
      prompt_reply:
        "Nous ferons de notre mieux pour répondre rapidement à votre demande.",
    },
    test: {
      lorem:
        "cune hypocrisie ne venait altérer la pureté de cette âme naïve, égarée par une passion qu’elle n’avait jamais éprouvée. Elle était trompée, mais à son insu, et cependant un instinct de vertu était effrayé. Tels étaient les combats qui l’agitaient quand Julien parut au jardin. Elle l’entendit parler, presque au même instant elle le vit s’asseoir à ses côtés. Son âme fut comme enlevée par ce bonheur charmant qui depuis quinze jours l’étonnait plus encore qu’il ne la séduisait. Tout était imprévu pour elle. Cependant après quelques instants, il suffit donc, se dit-elle, de la présence ",
    },
    quill: {
      french_title: "Français",
      english_title: "Anglais",
    },
  },
};
// Vérifier si une langue est enregistrée dans localStorage
const savedLocale = localStorage.getItem("language") || "fr";

// Configuration de i18n pour Vue 3 avec Composition API
const i18n = createI18n({
  legacy: false, // Désactiver le mode legacy
  locale: savedLocale, // Langue par défaut ou celle sauvegardée dans localStorage
  fallbackLocale: "en", // Langue de secours si la traduction n'est pas disponible
  messages,
});

export default i18n;
