/**
 * Centralized social and contact links.
 * Edit the `url` values here; every component reads from this file.
 *
 * NOTE: the WhatsApp number below was provided as-is. Replace it with your
 * real number in international format (no "+", spaces or dashes).
 */
export const socials = [
  {
    id: 'github',
    label: 'GitHub',
    handle: 'Dav27-tech',
    url: 'https://github.com/Dav27-tech',
    icon: 'github',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    handle: 'david-mus',
    url: 'https://www.linkedin.com/in/david-mus',
    icon: 'linkedin',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    handle: '+243 999 999 999',
    url: 'https://wa.me/243999999999',
    icon: 'whatsapp',
  },
]

/**
 * Email is intentionally empty. Add your address here (e.g. 'you@example.com')
 * and the Contact section will automatically display an email action.
 */
export const email = ''

export const getSocial = (id) => socials.find((s) => s.id === id)