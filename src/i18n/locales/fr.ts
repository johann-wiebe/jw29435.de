// Français. Translation of src/i18n/locales/de.ts; see docs/TRANSLATING.md.
import type { Messages } from "../types";

const fr: Messages = {
  meta: {
    home: {
      title: "jw29435",
      description:
        "De petits outils pour de vrais usages : Serva, Nuvo Explorer et CLR by NMBRS, par Johann Wiebe.",
    },
    impressum: {
      title: "Mentions légales – jw29435",
      description: "Mentions légales de jw29435.de, le site qui réunit Serva, Nuvo Explorer et CLR by NMBRS.",
    },
    datenschutz: {
      title: "Confidentialité – jw29435",
      description:
        "Politique de confidentialité de jw29435.de et johannwiebe.de : journaux serveur, et Google Analytics uniquement avec consentement.",
    },
    ogImageAlt: "Logo jw29435 : ordinateur portable avec les lettres JW sur fond ambre",
  },

  layout: {
    skipLink: "Aller au contenu",
    homeLink: "jw29435 – page d’accueil",
    mainNav: "Navigation principale",
    navProducts: "Produits",
    navContact: "Contact",
    navImpressum: "Mentions légales",
    language: "Langue",
    footerBy: "Un produit de **jw29435**",
    footerImpressum: "Mentions légales",
    footerDatenschutz: "Confidentialité",
    cookieSettings: "Paramètres des cookies",
  },

  languageHint: {
    text: "Cette page existe aussi en français.",
    action: "Lire en français",
    dismiss: "Fermer le message",
  },

  home: {
    eyebrow: "jw29435 · Applis et outils web",
    title: "De petits outils pour de vrais usages.",
    lead: "Trois produits de Johann Wiebe : l’un planifie les cultes, l’autre ouvre votre propre Synology en déplacement, le troisième transforme des photos en modèles de peinture par numéros. Tous trois ont le même style.",
    logoAlt: "Logo jw29435 : ordinateur portable avec les lettres JW",
    productsHeading: "Produits",
    contactHeading: "Contact",
    contactText: "Vous avez trouvé une erreur ou avez une idée pour l’un des produits ? Écrivez-moi.",
    copy: "Copier",
    copied: "Copié",
  },

  products: {
    statusLabel: "Statut :",
    serva: {
      platform: "Web · pour les paroisses",
      description:
        "Planifie les cultes, les tours de prédication et les chants de chorale, et rappelle aux prédicateurs leur date par e-mail, WhatsApp ou notification push.",
      action: "Ouvrir Serva",
      status: "En service",
    },
    nuvo: {
      platform: "Android · iOS prévu",
      description:
        "Parcourez les fichiers de votre propre Synology et écoutez directement vos dossiers de musique, en réseau local, via VPN ou en HTTPS.",
      action: "Rejoindre le test Play",
      status: "Alpha",
    },
    clr: {
      platform: "Android",
      description:
        "Transforme une photo en modèle de peinture par numéros, si vous le souhaitez uniquement avec les couleurs de votre boîte de peinture.",
      action: "Sur Google Play",
      status: "Disponible",
    },
  },

  consent: {
    title: "Puis-je mesurer l’utilisation de ce site ?",
    text: "Avec votre consentement, j’utilise Google Analytics pour voir quelles pages sont consultées. Google dépose alors des cookies et transfère aussi des données aux États-Unis. Vous pouvez modifier votre choix à tout moment via « Paramètres des cookies » en bas de page. Plus d’informations dans la [politique de confidentialité](page:datenschutz).",
    currentGranted: "Actuellement : autorisé",
    currentDenied: "Actuellement : refusé",
    deny: "Refuser",
    allow: "Autoriser",
  },

  legalNotice: {
    text: "Ceci est une traduction. Seule la version allemande fait foi.",
    link: "Voir la version allemande",
  },

  impressum: {
    title: "Mentions légales",
    intro: "Ces mentions légales s’appliquent aux sites jw29435.de et johannwiebe.de.",
    providerHeading: "Informations conformément au § 5 DDG (loi allemande sur les services numériques)",
    contactHeading: "Contact",
    email: "E-mail : {email}",
  },

  datenschutz: {
    title: "Politique de confidentialité",
    intro:
      "Cette politique s’applique aux sites jw29435.de et johannwiebe.de. Elle décrit quelles données sont générées lors de votre visite et ce qu’il en advient.",
    serva:
      "Serva dispose de sa propre politique de confidentialité : [serva.jw29435.de/datenschutz](https://serva.jw29435.de/datenschutz).",

    controllerHeading: "Responsable du traitement",
    controllerEmail: "E-mail : {email}",

    cookiesHeading: "Cookies et analyse",
    cookies:
      "Sans votre consentement, aucun des deux sites ne dépose lui-même de cookies, n’utilise d’outil d’analyse ni de traceur, ni n’intègre de contenus de tiers. Les polices sont fournies avec la page ; votre navigateur n’établit pour cela aucune connexion avec Google Fonts ou d’autres services. Sur jw29435.de, vous pouvez autoriser Google Analytics (voir ci-dessous).",

    analyticsHeading: "jw29435.de : Google Analytics avec consentement",
    analytics1:
      "Si vous cliquez sur « Autoriser » dans le bandeau, jw29435.de utilise Google Analytics 4, un service d’analyse web de Google Ireland Limited (Gordon House, Barrow Street, Dublin 4, Irlande). Je vois ainsi, sous forme agrégée, quelles pages sont consultées et à quelle fréquence, d’où proviennent les visites et avec quels appareils et navigateurs. Avant cela, Google Analytics n’est pas chargé.",
    analytics2:
      "Pour cela, Google Analytics enregistre des cookies dans votre navigateur (« _ga » et « _ga_1F5GCWHXKX », pendant deux ans au maximum) et traite des données d’utilisation telles que les pages consultées, l’heure, le référent, la localisation approximative, l’appareil et le navigateur. Google Analytics 4 n’enregistre pas d’adresses IP. Google Signals et la publicité personnalisée sont désactivés. Des données peuvent également être transférées à Google LLC aux États-Unis ; Google est certifiée dans le cadre du EU-US Data Privacy Framework.",
    analytics3:
      "La base juridique est votre consentement (art. 6, paragraphe 1, point a), du RGPD, § 25, al. 1, TDDDG). Vous pouvez le retirer à tout moment pour l’avenir : cliquez sur « Paramètres des cookies » en bas de page, puis sur « Refuser ». Les cookies de Google Analytics sont alors supprimés. Le site enregistre votre choix lui-même dans le stockage local de votre navigateur (« analytics-consent »), afin que le bandeau ne s’affiche pas à chaque visite ; aucun consentement n’est nécessaire pour cela (§ 25, al. 2, n° 2, TDDDG). Plus d’informations : [règles de confidentialité de Google](https://policies.google.com/privacy?hl=fr).",

    hostingHeading: "jw29435.de : hébergement sur GitHub Pages",
    hosting:
      "jw29435.de est diffusé via GitHub Pages (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis). Lorsqu’une page est consultée, GitHub traite des données techniquement nécessaires et les enregistre dans des journaux serveur : votre adresse IP, la date et l’heure, l’adresse consultée et l’identifiant du navigateur. Cela sert à diffuser la page et à en assurer la sécurité. La base juridique est l’intérêt légitime à disposer d’un site sûr et disponible (art. 6, paragraphe 1, point f), du RGPD). Je n’ai pas accès à ces journaux ; leur durée de conservation est fixée par GitHub, à savoir aussi longtemps que nécessaire pour la sécurité et le fonctionnement du service. GitHub est certifiée dans le cadre du EU-US Data Privacy Framework. Plus d’informations : [déclaration de confidentialité de GitHub](https://docs.github.com/fr/site-policy/privacy-policies/github-general-privacy-statement).",

    cloudflareHeading: "johannwiebe.de : Cloudflare et serveur personnel",
    cloudflare:
      "johannwiebe.de est diffusé via le réseau de Cloudflare (Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107, États-Unis). Cloudflare transmet les requêtes à mon propre serveur, protège contre les attaques et traite à cette occasion les données de connexion. Pour se protéger contre les accès automatisés, Cloudflare peut déposer un cookie techniquement nécessaire (par exemple « __cf_bm »). La base juridique est l’intérêt légitime à disposer d’un site sûr et disponible (art. 6, paragraphe 1, point f), du RGPD). Cloudflare est certifiée dans le cadre du EU-US Data Privacy Framework. Plus d’informations : [politique de confidentialité de Cloudflare](https://www.cloudflare.com/fr-fr/privacypolicy/).",
    serverLogs:
      "Le serveur écrit des journaux d’accès contenant votre adresse IP, la date et l’heure, l’adresse consultée, le volume de données transféré, le référent et l’identifiant du navigateur. Cela sert à diffuser la page, à la sécurité et au diagnostic des erreurs (art. 6, paragraphe 1, point f), du RGPD). Les fichiers journaux sont supprimés au plus tard après 30 jours.",

    emailHeading: "Contact par e-mail",
    email:
      "Si vous m’écrivez un e-mail, je traite votre adresse et le contenu afin de vous répondre (art. 6, paragraphe 1, point b) ou f), du RGPD). Les e-mails adressés à ces domaines sont transférés via Cloudflare Email Routing vers ma boîte de réception Gmail (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irlande). Google enregistre les messages dans ma boîte de réception ; des données peuvent alors aussi être transférées aux États-Unis. Google est certifiée dans le cadre du EU-US Data Privacy Framework. Plus d’informations : [règles de confidentialité de Google](https://policies.google.com/privacy?hl=fr). Je supprime les messages une fois qu’ils ont été traités et qu’aucune obligation de conservation ne s’applique.",

    rightsHeading: "Vos droits",
    rights:
      "Vous disposez d’un droit d’accès aux données enregistrées vous concernant (art. 15 du RGPD), de rectification (art. 16), d’effacement (art. 17), de limitation du traitement (art. 18) et de portabilité des données (art. 20). Vous pouvez vous opposer à un traitement fondé sur l’art. 6, paragraphe 1, point f), du RGPD (art. 21). Un e-mail à {email} suffit.",
    complaint:
      "Vous pouvez également introduire une réclamation auprès d’une autorité de contrôle de la protection des données (art. 77 du RGPD). L’autorité compétente est la Commissaire à la protection des données et à la liberté d’information de Rhénanie-du-Nord-Westphalie (Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen), Kavalleriestraße 2–4, 40213 Düsseldorf, [www.ldi.nrw.de](https://www.ldi.nrw.de).",

    updated: "Mise à jour : novembre 2026",
  },
};

export default fr;
