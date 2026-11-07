/**
 * Education and experience timeline.
 *
 * Only established information is included. Fill in the empty fields
 * (period, details) yourself. Empty values are hidden in the UI.
 *
 * To add an entry, copy an object and adjust it. `kind` is either
 * 'education' or 'experience' (it controls the icon and label).
 */
export const timeline = [
  {
    id: 'isig',
    kind: 'education',
    title: { fr: 'Génie Logiciel', en: 'Software Engineering' },
    organization: {
      fr: "ISIG Goma (Institut Supérieur d'Informatique et de Gestion)",
      en: "ISIG Goma (Institut Supérieur d'Informatique et de Gestion)",
    },
    // Example: { fr: '2022 – Présent', en: '2022 – Present' }
    period: { fr: '', en: '' },
    description: {
      fr: "Formation en Génie Logiciel : conception, développement et maintenance de logiciels.",
      en: 'Software Engineering studies: software design, development and maintenance.',
    },
  },
  {
    id: 'projects',
    kind: 'experience',
    title: {
      fr: 'Développement de projets web et mobiles',
      en: 'Web and mobile project development',
    },
    organization: {
      fr: 'Projets personnels et académiques',
      en: 'Personal and academic projects',
    },
    period: { fr: '', en: '' },
    description: {
      fr: "Conception et réalisation d'applications telles que TaskFlow, LUMA NEWS et Safari, avec Flutter, Firebase et des architectures structurées comme la Clean Architecture.",
      en: 'Designed and built applications such as TaskFlow, LUMA NEWS and Safari, using Flutter, Firebase and structured approaches such as Clean Architecture.',
    },
  },
]