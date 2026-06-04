import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { to: '/about', label: 'About' },
  { to: '/platform', label: 'Platform' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/trust', label: 'Trust & Compliance' },
];

function ArrowIcon() {
  return (
    <svg fill="none" stroke="currentColor" strokeWidth="2.4" viewBox="0 0 24 24">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header id="hdr" className={scrolled ? 'scrolled' : ''}>
      <div className="wrap nav">
        <Link aria-label="FirstData home" className="logo" to="/" onClick={() => setMenuOpen(false)}>
          <svg aria-label="FirstData" className="fdlogo" role="img">
            <use href="#fdlogo" />
          </svg>
        </Link>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`} id="navlinks">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} onClick={() => setMenuOpen(false)}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="nav-cta">
          <Link className="btn btn-primary" to="/contact" onClick={() => setMenuOpen(false)}>
            Talk to us
            <span className="circ"><ArrowIcon /></span>
          </Link>
          <button aria-label="Menu" className="menu-btn" id="menuBtn" onClick={() => setMenuOpen((value) => !value)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
