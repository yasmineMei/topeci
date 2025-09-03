// src/app/cookies/page.tsx
"use client";

/* -------------------------------------------------------------------------- */
/* Page Cookies                                                               */
/* - Pleine largeur, cohérente avec les autres pages (Header/Footer)          */
/* - Contenu couvrant : types, finalités, consentement, durée, gestion, tiers */
/* - Liens vers Politique RGPD et CGV                                         */
/* -------------------------------------------------------------------------- */

import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookiesBanner";

/*────────────────────────── Helpers cookies (client) ─────────────────────────*/
function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()!.split(";").shift() || null;
  return null;
}

function setCookie(name: string, value: string, days: number) {
  if (typeof document === "undefined") return;
  const maxAge = days * 24 * 60 * 60;
  document.cookie = `${name}=${value}; Path=/; Max-Age=${maxAge}; SameSite=Lax`;
}

export default function CookiesPage() {
  /*──────────── État du consentement (affiché en bas, "Votre choix") ───────────*/
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    setStatus(getCookie("cookie_consent"));
  }, []);

  const accept = () => {
    setCookie("cookie_consent", "accepted", 180);
    setStatus("accepted");
  };

  const decline = () => {
    setCookie("cookie_consent", "declined", 180);
    setStatus("declined");
  };

  return (
    <div className="font-sans min-h-screen grid grid-rows-[auto_1fr_auto]">
      {/* Header */}
      <Header />

      {/* Pleine largeur + responsive paddings */}
      <main className="min-h-[calc(100vh-120px)] flex-grow w-full px-4 sm:px-8 py-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8">Cookies &amp; traceurs</h1>

        <section className="space-y-6 leading-relaxed text-justify">
          <p className="text-gray-800 dark:text-gray-200">
            Cette page explique comment <span className="font-semibold">MON-TOPECI</span> utilise des
            cookies et technologies similaires (collectivement, « cookies ») sur le site public et les espaces
            applicatifs liés. Pour en savoir plus sur le traitement de vos données personnelles, consultez notre{" "}
            <Link href="/politique_confidentialite_rgpd" className="underline">
              Politique de confidentialité &amp; RGPD
            </Link>
            .
          </p>

          <h2 className="text-lg sm:text-xl font-semibold mt-6">1. Qu’est-ce qu’un cookie&nbsp;?</h2>
          <p className="text-gray-800 dark:text-gray-200">
            Un cookie est un petit fichier texte déposé sur votre appareil (ordinateur, smartphone, tablette)
            lors de la consultation d’un site ou d’une application. Il permet de stocker des informations pour
            reconnaître un navigateur, mémoriser des préférences, sécuriser des sessions ou mesurer l’usage
            du service.
          </p>

          <h2 className="text-lg sm:text-xl font-semibold mt-6">2. Types de cookies que nous utilisons</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-200">
            <li>
              <span className="font-semibold">Cookies strictement nécessaires</span> : indispensables au
              fonctionnement (authentification, maintien de session, sécurité, prévention de la fraude, load
              balancing). Sans eux, le service peut ne pas fonctionner correctement.
            </li>
            <li>
              <span className="font-semibold">Cookies de performance / mesure d’audience</span> : aident à
              comprendre l’usage (pages visitées, événements techniques) pour améliorer la stabilité et
              l’ergonomie.
            </li>
            <li>
              <span className="font-semibold">Cookies de fonctionnalité</span> : mémorisent vos préférences
              (langue, fuseau horaire, mode d’affichage) afin de personnaliser l’interface.
            </li>
            <li>
              <span className="font-semibold">Cookies de sécurité</span> : détection d’activité anormale,
              limitation d’accès, protection CSRF/XSS, anti-bot (par ex. reCAPTCHA).
            </li>
          </ul>

          <h2 className="text-lg sm:text-xl font-semibold mt-6">
            3. Finalités spécifiques
          </h2>
          <p className="text-gray-800 dark:text-gray-200">
            Dans le cadre d’une plateforme multi-modules, certains cookies/stockages locaux contribuent à :
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-200">
            <li>Assurer la continuité des parcours (navigation, reprise d’un formulaire).</li>
            <li>Renforcer la sécurité d’accès aux espaces sensibles (messagerie, documents).</li>
            <li>Faciliter des fonctionnalités optionnelles (rappels, préférences d’affichage).</li>
            <li>Supporter des intégrations techniques (ex. vidéo, captcha), lorsque vous y consentez.</li>
          </ul>

          <h2 className="text-lg sm:text-xl font-semibold mt-6">4. Fondements juridiques</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-200">
            <li>
              <span className="font-semibold">Intérêt légitime / Obligation légale</span> (pour les cookies
              strictement nécessaires à la fourniture du service et à la sécurité).
            </li>
            <li>
              <span className="font-semibold">Consentement</span> (pour les cookies non essentiels, tels que
              certains outils de mesure d’audience ou d’intégrations optionnelles).
            </li>
          </ul>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Voir également :{" "}
            <Link href="/cgv" className="underline">
              CGU/CGV
            </Link>{" "}
            et{" "}
            <Link href="/politique_confidentialite_rgpd" className="underline">
              Politique de confidentialité &amp; RGPD
            </Link>
            .
          </p>

          <h2 className="text-lg sm:text-xl font-semibold mt-6">5. Durée de conservation</h2>
          <p className="text-gray-800 dark:text-gray-200">
            La durée varie selon la finalité. Les cookies de session expirent lorsque vous fermez le navigateur.
            Les cookies persistants sont conservés pour une durée limitée, proportionnée à l’objectif poursuivi.
          </p>

          <h2 className="text-lg sm:text-xl font-semibold mt-6">6. Gestion de votre consentement</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-200">
            <li>
              Lorsqu’exigé, un bandeau vous permet d’accepter/refuser les cookies non essentiels.
            </li>
            <li>
              Vous pouvez modifier vos choix à tout moment ci-dessous ou via les paramètres du navigateur.
            </li>
          </ul>

          <h2 className="text-lg sm:text-xl font-semibold mt-6">7. Paramètres de navigateur</h2>
          <p className="text-gray-800 dark:text-gray-200">
            Vous pouvez configurer votre navigateur pour accepter, refuser ou supprimer des cookies. Le refus
            des cookies strictement nécessaires peut altérer l’accès au service. Consultez l’aide de votre navigateur :
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-200">
            <li>Chrome — Paramètres &gt; Confidentialité et sécurité &gt; Cookies et autres données.</li>
            <li>Firefox — Options &gt; Vie privée et sécurité &gt; Cookies et données de sites.</li>
            <li>Safari — Préférences &gt; Confidentialité.</li>
            <li>Edge — Paramètres &gt; Cookies et autorisations de site.</li>
          </ul>

          <h2 className="text-lg sm:text-xl font-semibold mt-6">8. Cookies tiers</h2>
          <p className="text-gray-800 dark:text-gray-200">
            Nous pouvons recourir à des services tiers (hébergement, mesure d’audience, protection anti-bot,
            visioconférence, connecteurs) susceptibles de déposer leurs propres cookies. Lorsque nécessaire,
            leur dépôt est soumis à votre consentement.
          </p>

          <h2 className="text-lg sm:text-xl font-semibold mt-6">9. Sécurité et confidentialité</h2>
          <p className="text-gray-800 dark:text-gray-200">
            Nous appliquons des mesures techniques et organisationnelles pour protéger l’intégrité et la
            confidentialité des informations associées aux cookies (chiffrement, contrôle d’accès, supervision,
            minimisation). Pour plus de détails, voir la{" "}
            <Link href="/politique_confidentialite_rgpd" className="underline">
              Politique de confidentialité &amp; RGPD
            </Link>
            .
          </p>

          <h2 className="text-lg sm:text-xl font-semibold mt-6">10. Modifications</h2>
          <p className="text-gray-800 dark:text-gray-200">
            Nous pouvons mettre à jour la présente page afin de refléter des évolutions légales, techniques
            ou organisationnelles. Les changements significatifs seront communiqués par les moyens appropriés.
          </p>

          <h2 className="text-lg sm:text-xl font-semibold mt-6">11. Contact</h2>
          <p className="text-gray-800 dark:text-gray-200">
            Pour toute question ou demande relative aux cookies, contactez-nous via{" "}
            <Link href="/contact" className="underline">
              la page Contact
            </Link>
            . Vous pouvez également consulter nos{" "}
            <Link href="/cgv" className="underline">
              CGU/CGV
            </Link>{" "}
            et notre{" "}
            <Link href="/politique_confidentialite_rgpd" className="underline">
              Politique de confidentialité &amp; RGPD
            </Link>
            .
          </p>

          {/* ───────────────────────────── Votre choix (au bas de la page) ───────────────────────────── */}
          <hr className="my-8 border-black/10 dark:border-white/10" />

          <div className="space-y-4">
            <h2 className="text-lg sm:text-xl font-semibold">Votre choix</h2>
            <p className="text-black/80 dark:text-gray-300">
              Vous pouvez accepter ou refuser l’utilisation des cookies non essentiels à tout moment.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={decline}
                className="px-4 py-2 text-sm rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                Refuser
              </button>
              <button
                onClick={accept}
                className="px-4 py-2 text-sm rounded-md bg-teal-600 text-white hover:bg-teal-700 transition"
              >
                Accepter
              </button>
            </div>

            <div className="text-sm text-black/70 dark:text-gray-300">
              Statut actuel :{" "}
              <span className="font-medium">
                {status === "accepted" && "Accepté"}
                {status === "declined" && "Refusé"}
                {!status && "Non défini"}
              </span>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Catégories de cookies</h3>
              <ul className="list-disc list-inside space-y-1 text-black/80 dark:text-gray-300">
                <li>
                  <span className="font-medium">Essentiels :</span> nécessaires au fonctionnement (sécurité,
                  session).
                </li>
                <li>
                  <span className="font-medium">Préférences :</span> mémorisent vos choix (langue, affichage).
                </li>
                <li>
                  <span className="font-medium">Mesure d’audience :</span> statistiques d’utilisation anonymisées.
                </li>
              </ul>
            </div>
          </div>
          {/* ─────────────────────────────────────────────────────────────────────────────────────────── */}
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Bandeau cookies */}
      <CookieBanner />
    </div>
  );
}
