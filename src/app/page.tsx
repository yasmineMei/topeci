// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <h1>
              Apprendre les langues africaines
              <br /> dès le plus jeune âge
            </h1>

            <ul className="hero-bullets">
              <li>Livres audio interactifs en baoulé et dioula</li>
              <li>Enrichis avec voix, chants et illustrations animées</li>
            </ul>

            <Link href="/livres" className="btn btn-orange">
              Découvrir nos livres
            </Link>
          </div>

          <div className="hero-media">
            <Image
              src="/images/hero.jpg"
              alt="Enfants lisant un livre TOPECI"
              width={900}
              height={600}
              className="hero-img"
              priority
            />
          </div>
        </div>
      </section>

      {/* BOUTIQUE */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Boutique</h2>

          <div className="cards">
            {/* Card 1 */}
            <article className="card">
              <Image
                src="/images/baoule.jpg"
                alt="Mon Premier Livre Audio – Baoulé"
                width={420}
                height={320}
                className="card-img"
              />
              <div className="card-body">
                <h3 className="card-title">Mon Premier Livre Audio</h3>
                <div className="card-sub">BAOULÉ</div>
                <div className="card-price">8.000 CFA</div>
                <Link href="/livre/baoule" className="btn btn-blue">
                  Voir le livre
                </Link>
              </div>
            </article>

            {/* Card 2 */}
            <article className="card">
              <Image
                src="/images/dioula.jpg"
                alt="Mon Premier Livre Audio – Dioula"
                width={420}
                height={320}
                className="card-img"
              />
              <div className="card-body">
                <h3 className="card-title">Mon Premier Livre Audio</h3>
                <div className="card-sub">DIOULA</div>
                <div className="card-price">8.000 CFA</div>
                <Link href="/livre/dioula" className="btn btn-blue">
                  Voir le livre
                </Link>
              </div>
            </article>

            {/* Card 3 */}
            <article className="card">
              <Image
                src="/images/contes.jpg"
                alt="Contes Africains en Baoulé"
                width={420}
                height={320}
                className="card-img"
              />
              <div className="card-body">
                <h3 className="card-title">Contes Africains en Baoulé</h3>
                <div className="card-price">3.000 CFA</div>
                <Link href="/livre/contes-baoule" className="btn btn-blue">
                  Voir le livre
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* VIDÉO + AVIS */}
      <section className="section">
        <div className="container media-grid">
          <div className="video-card">
            <div className="video-thumb">
              <button aria-label="Lire la vidéo" className="play-btn">▶</button>
            </div>
            <p className="note">
              <span className="spark">🔥</span> TOPECI Open Classroom arrive
              bientôt ! <br />
              Une appli pour apprendre de façon ludique.
            </p>
            <Link href="/newsletter" className="btn btn-outline">
              Inscrivez-vous pour être informé
            </Link>
          </div>

          <div className="quotes">
            <blockquote>“Ma fille ne lâche plus son livre TOPECI, elle apprend le baoulé avec plaisir !”</blockquote>
            <blockquote>“Tonton, ce livre est tellement précieux que je le lis à mon chevet...”</blockquote>

            <ul className="perks">
              <li>🚚 Livraison rapide en Côte d’Ivoire et à l’international</li>
              <li>💬 Assistance client Whatsapp et email</li>
            </ul>
          </div>
        </div>
      </section>

      {/* BANNIÈRE VERTE */}
      <section className="section">
        <div className="container">
          <div className="green-banner">
            <div className="gb-title">TOPECI Openclassroom arrive bientôt !</div>
            <div className="gb-text">
              Une appli pour apprendre de façon ludique.
            </div>
            <Link href="/openclassroom" className="btn btn-white">
              En savoir plus
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
