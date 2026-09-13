import logoText from "../assets/logo-text.png";

const footerSections = [
  {
    title: "PRODUCT",
    links: [
      { label: "Home", href: "#home" },
      { label: "Technologies", href: "#technologies" },
      { label: "Projects", href: "#projects" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
      { label: "Careers", href: "#careers" },
    ],
  },
  {
    title: "LEGAL",
    links: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
    ],
  },
] as const;

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 mt-6 sm:mt-10">
      <div className="max-w-[1216px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-8 lg:gap-10">
          <div className="lg:col-span-5 text-left">
            <a
              href="#home"
              aria-label="Dev Stack Home"
              className="inline-flex items-center"
            >
              <img
                src={logoText}
                alt="Dev Stack"
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </a>
            <p className="mt-4 text-sm text-slate-500 max-w-sm leading-relaxed">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="flex items-center gap-6 mt-6 text-sm text-slate-600">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Dev Stack on GitHub (opens in a new tab)"
                className="hover:text-slate-900 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Dev Stack on Twitter (opens in a new tab)"
                className="hover:text-slate-900 transition-colors"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Dev Stack on LinkedIn (opens in a new tab)"
                className="hover:text-slate-900 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="font-bold text-xs text-slate-900 tracking-wider uppercase mb-4">
                  {section.title}
                </h4>
                <ul className="flex flex-col gap-3 text-sm text-slate-500">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="hover:text-slate-900 transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 mt-12 sm:mt-16 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-600 transition-colors">
              Privacy
            </a>
            <a href="#terms" className="hover:text-slate-600 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
