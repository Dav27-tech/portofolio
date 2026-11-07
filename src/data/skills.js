/**
 * Technical skills grouped by category.
 * No proficiency percentages, by design. Add or remove items freely.
 * `title` and `summary` are translated: { fr, en }.
 */
export const skillCategories = [
  {
    id: 'frontend',
    icon: 'layout',
    title: { fr: 'Frontend', en: 'Frontend' },
    summary: {
      fr: 'Interfaces web accessibles et réactives.',
      en: 'Accessible, responsive web interfaces.',
    },
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue.js', 'Next.js'],
  },
  {
    id: 'backend',
    icon: 'server',
    title: { fr: 'Backend', en: 'Backend' },
    summary: {
      fr: 'API et logique métier côté serveur.',
      en: 'APIs and server-side business logic.',
    },
    items: ['PHP', 'Laravel', 'Node.js', 'NestJS'],
  },
  {
    id: 'mobile',
    icon: 'smartphone',
    title: { fr: 'Développement mobile', en: 'Mobile Development' },
    summary: {
      fr: 'Applications mobiles multiplateformes.',
      en: 'Cross-platform mobile applications.',
    },
    items: ['Flutter', 'Dart', 'Firebase'],
  },
  {
    id: 'databases',
    icon: 'database',
    title: { fr: 'Bases de données', en: 'Databases' },
    summary: {
      fr: 'Modélisation et stockage des données.',
      en: 'Data modeling and storage.',
    },
    items: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    id: 'tools',
    icon: 'wrench',
    title: { fr: 'Outils et technologies', en: 'Tools & Technologies' },
    summary: {
      fr: 'Versionnement, conteneurs et environnement de travail.',
      en: 'Version control, containers and daily tooling.',
    },
    items: ['Git', 'GitHub', 'Docker', 'VS Code'],
  },
]