import { useEffect, useState } from "react";
import { profile } from "../data/profile";
import { NAV_ITEMS } from "../data/navigation";
import { useLanguage } from "../hooks/useLanguage";
import { useActiveSection } from "../hooks/useActiveSection";
import { Icon } from "./Icon";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";

const DESKTOP_QUERY = "(min-width: 900px)";

export function Navbar() {
  const { t } = useLanguage();
  const active = useActiveSection(NAV_ITEMS);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add a subtle background/border once the page is scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu with Escape, an outside click, or when switching to desktop.
  useEffect(() => {
    if (!open) return undefined;

    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onOutsideClick = (event) => {
      if (!event.target.closest(".site-header")) setOpen(false);
    };
    const mql = window.matchMedia(DESKTOP_QUERY);
    const onResize = (event) => {
      if (event.matches) setOpen(false);
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onOutsideClick);
    mql.addEventListener("change", onResize);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onOutsideClick);
      mql.removeEventListener("change", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`site-header ${scrolled ? "is-scrolled" : ""} ${
        open ? "is-open" : ""
      }`.trim()}
    >
      <div className="container site-header__inner">
        <a href="#top" className="brand" onClick={close}>
          <span className="brand__mark" aria-hidden="true">
            {profile.initials}
          </span>
          <span className="brand__name">{profile.name}</span>
        </a>

        <nav
          id="primary-nav"
          className="primary-nav"
          aria-label={t("a11y.mainNav")}
        >
          <ul className="primary-nav__list">
            {NAV_ITEMS.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`primary-nav__link ${
                    active === id ? "is-active" : ""
                  }`.trim()}
                  aria-current={active === id ? "true" : undefined}
                  onClick={close}
                >
                  {t(`nav.${id}`)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            type="button"
            className="icon-button menu-toggle"
            aria-expanded={open}
            aria-controls="primary-nav"
            aria-label={open ? t("a11y.closeMenu") : t("a11y.openMenu")}
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? "close" : "menu"} size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
