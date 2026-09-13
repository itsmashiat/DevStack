import { useState, useEffect, useCallback } from "react";
import logoText from "../assets/logo-text.png";

const navItems = [
  "Home",
  "Technologies",
  "Projects",
  "About",
  "Contact",
] as const;

export type NavItem = (typeof navItems)[number];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  const closeMenu = useCallback((): void => setIsOpen(false), []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape" && isOpen) {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeMenu]);


  useEffect(() => {
    let ticking = false;

    const handleScroll = (): void => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sectionIds = navItems.map((item) => item.toLowerCase());
          const scrollPosition = window.scrollY + 140;

          for (let i = sectionIds.length - 1; i >= 0; i--) {
            const el = document.getElementById(sectionIds[i]);
            if (el && el.offsetTop <= scrollPosition) {
              setActiveSection(sectionIds[i]);
              ticking = false;
              return;
            }
          }

          if (window.scrollY < 100) {
            setActiveSection("home");
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center gap-3">
            <a
              href="#home"
              aria-label="Dev Stack Home"
              className="flex items-center focus:outline-hidden focus-visible:ring-2 focus-visible:ring-pink-500 rounded-lg"
            >
              <img
                src={logoText}
                alt="Dev Stack"
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </a>
          </div>

          <nav
            aria-label="Desktop Navigation"
            className="hidden md:flex items-center gap-1 lg:gap-2"
          >
            {navItems.map((item) => {
              const targetId = item.toLowerCase();
              const isActive = activeSection === targetId;

              return (
                <a
                  key={item}
                  href={`#${targetId}`}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 relative focus:outline-hidden focus-visible:ring-2 focus-visible:ring-pink-500 ${
                    isActive
                      ? "text-pink-600 bg-pink-50/80 font-semibold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {item}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 brand-gradient rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="#signin"
              className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-pink-500 rounded-lg px-2 py-1"
            >
              Sign In
            </a>
            <a
              href="#signup"
              className="px-5 py-2 text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 rounded-full transition-all duration-200 shadow-xs hover:shadow-md active:scale-95 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-pink-500"
            >
              Sign Up
            </a>
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? "Close main navigation menu" : "Open main navigation menu"}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-pink-500"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          id="mobile-navigation"
          role="region"
          aria-label="Mobile Navigation Menu"
          className="md:hidden border-b border-slate-200 bg-white/98 backdrop-blur-md px-4 pt-2 pb-4 space-y-1 shadow-lg animate-in slide-in-from-top-2 duration-200"
        >
          {navItems.map((item) => {
            const targetId = item.toLowerCase();
            const isActive = activeSection === targetId;

            return (
              <a
                key={item}
                href={`#${targetId}`}
                onClick={closeMenu}
                className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? "text-pink-600 bg-pink-50 font-semibold"
                    : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {item}
              </a>
            );
          })}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="#signin"
              onClick={closeMenu}
              className="block w-full text-center px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
            >
              Sign In
            </a>
            <a
              href="#signup"
              onClick={closeMenu}
              className="block w-full text-center px-4 py-2.5 text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 rounded-full transition-colors shadow-xs"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;