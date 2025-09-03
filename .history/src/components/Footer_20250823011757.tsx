// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container f-grid">
        <div className="f-col">
          <div className="f-brand">TOPECI</div>
          <p className="f-text">
            Apprendre les langues africaines dès le plus jeune âge, avec des
            livres audio interactifs et des illustrations animées.
          </p>
        </div>

        <div className="f-col">
          <div className="f-title">Navigation</div>
          <ul className="f-list">
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/livres">Nos Livres</Link></li>
            <li><Link href="/boutique">Boutique</Link></li>
            <li><Link href="/a-propos">À propos</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="f-col">
          <div className="f-title">Aide</div>
          <ul className="f-list">
            <li><Link href="/livraison">Livraison</Link></li>
            <li><Link href="/support">Assistance</Link></li>
            <li><Link href="/conditions">Conditions générales</Link></li>
          </ul>
        </div>
      </div>

      <div className="container f-bottom">
        <span>© {new Date().getFullYear()} TOPECI. Tous droits réservés.</span>
        <span>Whatsapp & Email — Assistance réactive</span>
      </div>
    </footer>
  );
}
