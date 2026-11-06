import { socials } from "../data/socials";
import { useLanguage } from "../hooks/useLanguage";
import { ExternalLink } from "./ExternalLink";
import { Icon } from "./Icon";

/**
 * Social links rendered from src/data/socials.js.
 *
 *   <SocialLinks />                  -> icon-only buttons (accessible labels)
 *   <SocialLinks variant="labeled" /> -> icon + platform name + handle
 */
export function SocialLinks({ variant = "icons", className = "" }) {
  const { t } = useLanguage();

  return (
    <ul
      className={`social-links social-links--${variant} ${className}`.trim()}
      aria-label={t("a11y.socialLinks")}
    >
      {socials.map((social) => (
        <li key={social.id}>
          {variant === "labeled" ? (
            <ExternalLink href={social.url} className="social-card">
              <span className="social-card__icon">
                <Icon name={social.icon} size={20} />
              </span>
              <span className="social-card__text">
                <span className="social-card__label">{social.label}</span>
                <span className="social-card__handle">{social.handle}</span>
              </span>
              <Icon name="external" size={16} className="social-card__arrow" />
            </ExternalLink>
          ) : (
            <ExternalLink
              href={social.url}
              className="icon-button"
              aria-label={`${social.label} ${t("a11y.opensNewTab")}`}
              title={social.label}
            >
              <Icon name={social.icon} size={18} />
            </ExternalLink>
          )}
        </li>
      ))}
    </ul>
  );
}
