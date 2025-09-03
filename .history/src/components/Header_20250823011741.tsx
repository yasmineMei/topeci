// components/Header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const nav = [
  { label: "Accueil", href: "/" },
  { label: "Nos Livres", href: "/livres" },
  { label: "Boutique", href: "/boutique" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container header-row">
        <div className="brand">
          {/* Si tu as un logo image, remplace par <Image ... /> */}
          <Link href="/" className="logo">
            TOPECI
          </Link>
        </div>

        <nav className="nav">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${active ? "active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="actions">
          <Link href="/acheter" className="btn btn-green">
            Acheter maintenant
          </Link>
        </div>
      </div>
    </header>
  );
}
