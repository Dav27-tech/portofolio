/**
 * Interface translations (navigation, buttons, headings, messages).
 * Personal content (bio, projects, skills...) lives in the other data files.
 *
 * To add a string: add the same key to BOTH `fr` and `en`.
 */
export const LANGUAGES = [
  { code: 'fr', label: 'FR', name: 'Français' },
  { code: 'en', label: 'EN', name: 'English' },
]

export const DEFAULT_LANGUAGE = 'fr'

export const translations = {
  fr: {
    meta: {
      title: 'David Musafiri | Développeur Full-Stack',
      description:
        "Portfolio de David Musafiri, développeur full-stack et étudiant en Génie Logiciel à l'ISIG Goma. Applications web et mobiles avec React, Laravel, Node.js et Flutter.",
    },
    a11y: {
      skipToContent: 'Aller au contenu principal',
      mainNav: 'Navigation principale',
      openMenu: 'Ouvrir le menu',
      closeMenu: 'Fermer le menu',
      language: 'Choisir la langue',
      switchToDark: 'Activer le thème sombre',
      switchToLight: 'Activer le thème clair',
      backToTop: 'Retour en haut de la page',
      opensNewTab: '(ouvre un nouvel onglet)',
      photoPlaceholder: 'Emplacement réservé pour la photo de profil',
      screenshotPlaceholder: 'Aperçu à venir',
      socialLinks: 'Réseaux sociaux',
    },
    nav: {
      about: 'À propos',
      skills: 'Compétences',
      projects: 'Projets',
      journey: 'Parcours',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Bonjour, je suis',
      typingPrefix: 'Je suis David,',
      available: 'Étudiant en Génie Logiciel',
      ctaProjects: 'Voir mes projets',
      ctaContact: 'Me contacter',
      photoLabel: 'Votre photo ici',
    },
    about: {
      eyebrow: 'À propos',
      title: 'Du besoin au logiciel qui fonctionne',
      education: 'Formation',
      location: 'Localisation',
      languages: 'Langues',
      focus: 'Domaines',
      focusValue: 'Web, mobile et API',
    },
    skills: {
      eyebrow: 'Compétences',
      title: 'Technologies avec lesquelles je travaille',
      intro:
        'Un ensemble d’outils couvrant toute la chaîne de développement, de l’interface au déploiement.',
    },
    projects: {
      eyebrow: 'Projets',
      title: 'Projets réalisés',
      intro:
        'Une sélection d’applications sur lesquelles j’ai travaillé, principalement en développement mobile avec Flutter.',
      code: 'Code source',
      demo: 'Démo',
      moreOnGithub: 'Plus de projets sur GitHub',
      noTech: 'Détails techniques à venir',
    },
    journey: {
      eyebrow: 'Parcours',
      title: 'Formation et expérience',
      education: 'Formation',
      experience: 'Expérience',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Travaillons ensemble',
      intro:
        'Un projet, une collaboration ou simplement une question ? Écrivez-moi, je vous répondrai avec plaisir.',
      whatsappCta: 'Discuter sur WhatsApp',
      whatsappNote: 'Le moyen le plus rapide de me joindre.',
      emailCta: 'Envoyer un e-mail',
      elsewhere: 'Retrouvez-moi aussi sur',
    },
    footer: {
      rights: 'Tous droits réservés.',
      built: 'Conçu et développé avec React et Vite.',
    },
  },

  en: {
    meta: {
      title: 'David Musafiri | Full-Stack Developer',
      description:
        'Portfolio of David Musafiri, full-stack developer and Software Engineering student at ISIG Goma. Web and mobile applications with React, Laravel, Node.js and Flutter.',
    },
    a11y: {
      skipToContent: 'Skip to main content',
      mainNav: 'Main navigation',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      language: 'Choose language',
      switchToDark: 'Switch to dark theme',
      switchToLight: 'Switch to light theme',
      backToTop: 'Back to top',
      opensNewTab: '(opens in a new tab)',
      photoPlaceholder: 'Profile photo placeholder',
      screenshotPlaceholder: 'Preview coming soon',
      socialLinks: 'Social links',
    },
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      journey: 'Journey',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      typingPrefix: "I'm David, a",
      available: 'Software Engineering student',
      ctaProjects: 'View my projects',
      ctaContact: 'Get in touch',
      photoLabel: 'Your photo here',
    },
    about: {
      eyebrow: 'About',
      title: 'From a real need to software that works',
      education: 'Education',
      location: 'Location',
      languages: 'Languages',
      focus: 'Focus',
      focusValue: 'Web, mobile and APIs',
    },
    skills: {
      eyebrow: 'Skills',
      title: 'Technologies I work with',
      intro:
        'A toolkit covering the whole development chain, from interface to deployment.',
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Projects I have built',
      intro:
        'A selection of applications I have worked on, mostly mobile development with Flutter.',
      code: 'Source code',
      demo: 'Live demo',
      moreOnGithub: 'More projects on GitHub',
      noTech: 'Technical details coming soon',
    },
    journey: {
      eyebrow: 'Journey',
      title: 'Education and experience',
      education: 'Education',
      experience: 'Experience',
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's work together",
      intro:
        "A project, a collaboration or just a question? Send me a message, I'll be glad to reply.",
      whatsappCta: 'Chat on WhatsApp',
      whatsappNote: 'The fastest way to reach me.',
      emailCta: 'Send an email',
      elsewhere: 'You can also find me on',
    },
    footer: {
      rights: 'All rights reserved.',
      built: 'Designed and built with React and Vite.',
    },
  },
}
