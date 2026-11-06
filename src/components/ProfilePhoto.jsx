import { profile } from '../data/profile'
import { useLanguage } from '../hooks/useLanguage'
import { Icon } from './Icon'

/**
 * Profile photo with a replaceable placeholder.
 *
 * To use your own photo, set `photo` in src/data/profile.js:
 *   import photo from '../assets/profile.jpg'
 *   photo: photo,
 */
export function ProfilePhoto() {
  const { t } = useLanguage()

  if (profile.photo) {
    return (
      <figure className="profile-photo">
        <img
          src={profile.photo}
          alt={profile.name}
          width="756"
          height="1008"
          loading="eager"
          decoding="async"
        />
      </figure>
    )
  }

  return (
    <figure
      className="profile-photo profile-photo--placeholder"
      role="img"
      aria-label={t('a11y.photoPlaceholder')}
    >
      <span className="profile-photo__initials" aria-hidden="true">
        {profile.initials}
      </span>
      <figcaption className="profile-photo__caption" aria-hidden="true">
        <Icon name="user" size={16} />
        {t('hero.photoLabel')}
      </figcaption>
    </figure>
  )
}
