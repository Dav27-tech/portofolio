import profilePhoto from '../assets/profil.jpg'

/**
 * Personal information.
 * Values that change with the language are stored as { fr, en } objects.
 * Edit freely; components read everything from here.
 */
export const profile = {
  name: 'David Musafiri',
  firstName: 'David',
  initials: 'DM',

  title: {
    fr: 'Développeur Full-Stack | Étudiant en Génie Logiciel',
    en: 'Full-Stack Developer | Software Engineering Student',
  },

  headline: {
    fr: 'Je conçois des solutions numériques utiles, fiables et soignées.',
    en: 'I build useful, reliable and well-designed digital solutions.',
  },

  intro: {
    fr: "Étudiant en Génie Logiciel à l'ISIG Goma, je développe des applications web et mobiles de bout en bout, de l'interface jusqu'à la base de données.",
    en: 'A Software Engineering student at ISIG Goma, I build web and mobile applications end to end, from the interface down to the database.',
  },

  about: {
    fr: [
      "Je suis développeur full-stack et étudiant en Génie Logiciel à l'Institut Supérieur d'Informatique et de Gestion (ISIG) de Goma. J'aime transformer un besoin concret en un logiciel qui fonctionne, qui reste simple à utiliser et facile à faire évoluer.",
      "Je travaille aussi bien sur le web que sur le mobile : interfaces avec React, Vue.js ou Next.js, API avec Laravel, Node.js ou NestJS, et applications mobiles avec Flutter et Firebase. Je porte une attention particulière à l'architecture du code, à la lisibilité et à l'expérience utilisateur.",
      "Chaque projet est pour moi l'occasion d'apprendre, de mieux structurer mes solutions et de livrer un travail dont je peux être fier.",
    ],
    en: [
      "I am a full-stack developer and Software Engineering student at the Institut Supérieur d'Informatique et de Gestion (ISIG) in Goma. I enjoy turning a real need into software that works, stays simple to use and is easy to evolve.",
      'I work across web and mobile: interfaces with React, Vue.js or Next.js, APIs with Laravel, Node.js or NestJS, and mobile apps with Flutter and Firebase. I pay close attention to code architecture, readability and user experience.',
      'Every project is an opportunity to learn, to structure my solutions better and to deliver work I can be proud of.',
    ],
  },

  location: { fr: 'Goma, RD Congo', en: 'Goma, DR Congo' },

  spokenLanguages: [
    { fr: 'Français', en: 'French' },
    { fr: 'Anglais', en: 'English' },
    { fr: 'Kiswahili', en: 'Kiswahili' },
  ],

  /**
   * Replace this asset import to change the profile photo.
   */
  photo: profilePhoto,

  /** Optional CV link (e.g. '/cv-david-musafiri.pdf' placed in public/). */
  cvUrl: '',
}
