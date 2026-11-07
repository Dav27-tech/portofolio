/**
 * Portfolio projects.
 *
 * Editable fields:
 * - name, type, description: { fr, en } for translated text
 * - tech: list of technologies (displayed as tags)
 * - image: import a screenshot from src/assets/ and assign it here.
 *          Leave null to display a clean placeholder.
 *            import taskflowImg from '../assets/projects/taskflow.png'
 *            image: taskflowImg,
 * - repoUrl / demoUrl: leave '' to hide the corresponding link.
 *
 * Only add information that is accurate. Empty fields are simply not shown.
 */
export const projects = [
  {
    id: 'taskflow',
    name: 'TaskFlow',
    type: {
      fr: 'Application de productivité collaborative',
      en: 'Collaborative productivity app',
    },
    description: {
      fr: "Application collaborative de gestion de tâches permettant d'organiser le travail en équipe, avec authentification des utilisateurs et synchronisation des données en temps réel.",
      en: 'A collaborative task management application for organizing team work, with user authentication and real-time data synchronization.',
    },
    tech: [
      'Flutter',
      'Firebase Authentication',
      'Cloud Firestore',
      'Riverpod',
      'Clean Architecture',
      'Real-time sync',
    ],
    image: null,
    repoUrl: '',
    demoUrl: '',
  },
  {
    id: 'gestion-banque',
    name: 'Gestion Banque',
    type: {
      fr: 'Application de gestion bancaire',
      en: 'Banking management app',
    },
    description: {
      fr: 'Projet de développement logiciel consacré à la gestion bancaire, conçu pour structurer et faciliter les opérations de gestion d’un établissement bancaire.',
      en: 'A software development project dedicated to banking management, designed to structure and simplify the management operations of a banking institution.',
    },
    tech: [],
    image: null,
    repoUrl: '',
    demoUrl: '',
  },
  {
    id: 'safari',
    name: 'Safari',
    type: {
      fr: 'Application mobile',
      en: 'Mobile application',
    },
    description: {
      fr: 'Application mobile Flutter centrée sur une expérience utilisateur claire et moderne, avec une navigation structurée et une interface fidèle à Material Design 3.',
      en: 'A Flutter mobile application focused on a clean, modern user experience, with structured navigation and an interface built on Material Design 3.',
    },
    tech: ['Flutter', 'Dart', 'GoRouter', 'Material Design 3'],
    image: null,
    repoUrl: '',
    demoUrl: '',
  },
  {
    id: 'luma-news',
    name: 'LUMA NEWS',
    type: {
      fr: 'Application d’actualités',
      en: 'News application',
    },
    description: {
      fr: "Application d'actualités axée sur la consultation de l'information, l'intégration d'une API externe et la gestion des données en local.",
      en: 'A news application focused on news consumption, external API integration and local data management.',
    },
    tech: ['Flutter', 'NewsAPI', 'BLoC', 'Dio', 'Hive', 'Clean Architecture'],
    image: null,
    repoUrl: '',
    demoUrl: '',
  },
  {
    id: 'ecommerce',
    name: {
      fr: 'Application E-commerce',
      en: 'E-commerce Application',
    },
    type: {
      fr: "Projet d'étude",
      en: 'Study project',
    },
    description: {
      fr: "Projet d'étude consacré au développement d'une application de commerce électronique.",
      en: 'A study project focused on developing an e-commerce application.',
    },
    tech: ['Flutter', 'Riverpod'],
    image: null,
    repoUrl: '',
    demoUrl: '',
  },
]