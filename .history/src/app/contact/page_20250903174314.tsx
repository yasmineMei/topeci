import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export default function ContactPage() {
  return (
    <div className="font-sans min-h-screen grid grid-rows-[auto_1fr_auto]">
      {/* Header */}
      <Header />

      {/* Contenu */}
      <main className="min-h-[calc(100vh-120px)] px-4 sm:px-8 py-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-10">
          Restons en contact
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Infos de contact */}
          <div>
            <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg mb-6">
              Une question ? Un besoin ? Notre équipe MON-TOPECI vous répond du lundi au vendredi,
              de 8 h à 18 h (UTC+0).
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-purple-600">
                  <span className="inline-block w-6 h-6 bg-purple-100 dark:bg-purple-900/40 rounded-full flex items-center justify-center">
                    📍
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">Localisation</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    MON-TOPECI<br />
                    Abidjan – Cocody (face Palm Club),<br />
                    à 200 m du Lycée Technique<br />
                    BP 1532 Abidjan, Côte d’Ivoire
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-green-600">
                  <span className="inline-block w-6 h-6 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center">
                    ✉️
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">E-mail</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    contact@mon-topeci.com<br />
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-pink-600">
                  <span className="inline-block w-6 h-6 bg-pink-100 dark:bg-pink-900/40 rounded-full flex items-center justify-center">
                    📞
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                    Téléphone / WhatsApp
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    +225 07 48 316 544
                  </p>
                  <a
                    href="https://wa.me/2250748316544"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm rounded-md shadow-md transition-colors"
                  >
                    💬 Écrire sur WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Suivez-nous</h4>
              <div className="flex items-center gap-4">
                <a href="#" className="text-blue-600" aria-label="Facebook">🔵</a>
                <a href="#" className="text-pink-600" aria-label="Instagram">📷</a>
                <a href="#" className="text-black dark:text-gray-100" aria-label="X">𝕏</a>
                <a href="#" className="text-black dark:text-gray-100" aria-label="TikTok">🎵</a>
                <a href="#" className="text-red-600" aria-label="YouTube">▶️</a>
              </div>
            </div>
          </div>

          {/* Formulaire (mailto) */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Envoyez-nous un message
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              Ce formulaire ouvre votre client e-mail pour l’envoi. Pour un traitement automatisé,
              on pourra brancher une route API plus tard.
            </p>

            <form
              className="space-y-4"
              action="mailto:contact@mon-topeci.com"
              method="post"
              encType="text/plain"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="grid gap-1.5">
                  <label htmlFor="nom" className="text-sm font-medium">Nom</label>
                  <input
                    id="nom"
                    name="Nom"
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    placeholder="Votre nom"
                  />
                </div>

                <div className="grid gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input
                    id="email"
                    name="Email"
                    type="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    placeholder="exemple@domaine.com"
                  />
                </div>
              </div>

              <div className="grid gap-1.5">
                <label htmlFor="sujet" className="text-sm font-medium">Sujet</label>
                <input
                  id="sujet"
                  name="Sujet"
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  placeholder="Objet de votre demande"
                />
              </div>

              <div className="grid gap-1.5">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  name="Message"
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  placeholder="Décrivez votre besoin (livres, commandes, partenariats, délais, budget estimé, etc.)"
                />
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md transition-colors"
                  title="Ouvrira votre client e-mail"
                >
                  Envoyer
                </button>

                <a
                  href="mailto:contact@mon-topeci.com"
                  className="mt-2 text-sm underline underline-offset-4"
                >
                  Ou écrivez-nous directement
                </a>
              </div>
            </form>
          </div>
        </div>

        {/* Carte */}
        <div className="mt-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.8532328897017!2d-4.012354284650065!3d5.353760496102847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ec73a70e6dbd%3A0x28b870c2a6efeb63!2sLyc%C3%A9e%20Technique%20d%E2%80%99Abidjan!5e0!3m2!1sfr!2sci!4v1657314901324!5m2!1sfr!2sci"
            width="100%"
            height="350"
            className="rounded-xl border-0"
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Bandeau cookies */}
      <CookieBanner />
    </div>
  );
}
