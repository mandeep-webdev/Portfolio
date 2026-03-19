import { resumeData } from "../data/data";

type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export default function Navbar() {
  const { basics } = resumeData;

  const navLinks: NavLink[] = [
    { label: "Exp", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "GitHub", href: basics.links.github, external: true },
    { label: "LinkedIn", href: basics.links.linkedin, external: true },
  ];

  const initials = basics.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center backdrop-blur-sm bg-black/5">
      {/* Logo */}
      <span className="font-black text-xl tracking-tighter">{initials}.</span>

      {/* Nav Links */}
      <div className="flex gap-8 text-sm font-mono text-gray-400 uppercase tracking-widest">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : "_self"}
            rel={link.external ? "noreferrer" : undefined}
            className="hover:text-purple-400 transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
