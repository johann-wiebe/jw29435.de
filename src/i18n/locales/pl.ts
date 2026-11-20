// Polski. Translation of src/i18n/locales/de.ts; see docs/TRANSLATING.md.
import type { Messages } from "../types";

const pl: Messages = {
  meta: {
    home: {
      title: "jw29435",
      description:
        "Małe narzędzia do prawdziwych zadań: Serva, Nuvo Explorer i CLR by NMBRS od Johanna Wiebe.",
    },
    impressum: {
      title: "Nota prawna – jw29435",
      description: "Nota prawna jw29435.de, wspólnego domu Serva, Nuvo Explorer i CLR by NMBRS.",
    },
    datenschutz: {
      title: "Prywatność – jw29435",
      description:
        "Polityka prywatności jw29435.de i johannwiebe.de: logi serwera, a Google Analytics tylko za zgodą.",
    },
    ogImageAlt: "Logo jw29435: laptop z literami JW na bursztynowym tle",
  },

  layout: {
    skipLink: "Przejdź do treści",
    homeLink: "jw29435 – strona główna",
    mainNav: "Nawigacja główna",
    navProducts: "Produkty",
    navContact: "Kontakt",
    navImpressum: "Nota prawna",
    language: "Język",
    footerBy: "Produkt **jw29435**",
    footerImpressum: "Nota prawna",
    footerDatenschutz: "Prywatność",
    cookieSettings: "Ustawienia cookies",
  },

  languageHint: {
    text: "Ta strona jest dostępna także po polsku.",
    action: "Czytaj po polsku",
    dismiss: "Zamknij powiadomienie",
  },

  home: {
    eyebrow: "jw29435 · Aplikacje i narzędzia webowe",
    title: "Małe narzędzia do prawdziwych zadań.",
    lead: "Trzy produkty Johanna Wiebe: jeden planuje nabożeństwa, drugi otwiera twój własny Synology w drodze, trzeci zamienia zdjęcia w szablony do malowania po numerach. Wszystkie wyglądają tak samo.",
    logoAlt: "Logo jw29435: laptop z literami JW",
    productsHeading: "Produkty",
    contactHeading: "Kontakt",
    contactText: "Błąd albo pomysł na któryś z produktów? Napisz do mnie.",
    copy: "Kopiuj",
    copied: "Skopiowano",
  },

  products: {
    statusLabel: "Status:",
    serva: {
      platform: "Web · dla parafii i zborów",
      description:
        "Planuje nabożeństwa, dyżury kaznodziejskie i pieśni chóru oraz przypomina kaznodziejom o ich terminie e-mailem, przez WhatsApp lub powiadomieniem push.",
      action: "Otwórz Serva",
      status: "W użyciu",
    },
    nuvo: {
      platform: "Android · iOS w planach",
      description:
        "Przeglądanie plików na własnym Synology i odtwarzanie folderów z muzyką bezpośrednio, w sieci LAN, przez VPN lub przez HTTPS.",
      action: "Do testów w Play",
      status: "Alfa",
    },
    clr: {
      platform: "Android",
      description:
        "Zamienia zdjęcie w szablon do malowania po numerach, na życzenie tylko z kolorami, które masz w swoim pudełku farb.",
      action: "W Google Play",
      status: "Dostępna",
    },
  },

  consent: {
    title: "Czy mogę mierzyć, jak korzystasz ze strony?",
    text: "Za twoją zgodą używam Google Analytics, aby widzieć, które strony są odwiedzane. Google ustawia przy tym pliki cookie i przekazuje dane także do USA. Swój wybór możesz w każdej chwili zmienić w „Ustawienia cookies” w stopce. Więcej w [polityce prywatności](page:datenschutz).",
    currentGranted: "Obecnie: zezwolono",
    currentDenied: "Obecnie: odrzucono",
    deny: "Odrzuć",
    allow: "Zezwól",
  },

  legalNotice: {
    text: "To jest tłumaczenie. Prawnie wiążąca jest wyłącznie wersja niemiecka.",
    link: "Do wersji niemieckiej",
  },

  impressum: {
    title: "Nota prawna",
    intro: "Niniejsza nota prawna dotyczy stron internetowych jw29435.de i johannwiebe.de.",
    providerHeading: "Informacje zgodnie z § 5 DDG (niemiecka ustawa o usługach cyfrowych)",
    contactHeading: "Kontakt",
    email: "E-mail: {email}",
  },

  datenschutz: {
    title: "Polityka prywatności",
    intro:
      "Niniejsza polityka dotyczy stron internetowych jw29435.de i johannwiebe.de. Opisuje, jakie dane powstają podczas odwiedzin i co się z nimi dzieje.",
    serva:
      "Serva ma własną politykę prywatności: [serva.jw29435.de/datenschutz](https://serva.jw29435.de/datenschutz).",

    controllerHeading: "Administrator",
    controllerEmail: "E-mail: {email}",

    cookiesHeading: "Pliki cookie i analityka",
    cookies:
      "Bez twojej zgody żadna z obu stron sama nie ustawia plików cookie, nie używa analityki ani trackerów i nie osadza treści od zewnętrznych dostawców. Czcionki są dostarczane razem ze stroną; twoja przeglądarka nie łączy się w tym celu z Google Fonts ani innymi usługami. Na jw29435.de możesz zezwolić na Google Analytics (zob. niżej).",

    analyticsHeading: "jw29435.de: Google Analytics za zgodą",
    analytics1:
      "Jeśli klikniesz w banerze „Zezwól”, jw29435.de używa Google Analytics 4, usługi analityki internetowej Google Ireland Limited (Gordon House, Barrow Street, Dublin 4, Irlandia). Dzięki temu widzę w zbiorczej formie, które strony są odwiedzane i jak często, skąd pochodzą odwiedziny oraz z jakich urządzeń i przeglądarek. Wcześniej Google Analytics nie jest ładowane.",
    analytics2:
      "Google Analytics zapisuje w tym celu pliki cookie w twojej przeglądarce („_ga” i „_ga_1F5GCWHXKX”, do dwóch lat) i przetwarza dane o korzystaniu, takie jak odwiedzone strony, czas, strona odsyłająca, przybliżona lokalizacja, urządzenie i przeglądarka. Google Analytics 4 nie zapisuje adresów IP. Google Signals i reklamy spersonalizowane są wyłączone. Dane mogą przy tym być przekazywane także do Google LLC w USA; Google posiada certyfikat w ramach EU-US Data Privacy Framework.",
    analytics3:
      "Podstawą jest twoja zgoda (art. 6 ust. 1 lit. a RODO, § 25 ust. 1 TDDDG). Możesz ją w każdej chwili wycofać ze skutkiem na przyszłość: kliknij w stopce „Ustawienia cookies”, a następnie „Odrzuć”. Pliki cookie Google Analytics zostaną wtedy usunięte. Sam twój wybór strona zapisuje w lokalnej pamięci twojej przeglądarki („analytics-consent”), aby baner nie pojawiał się przy każdej wizycie; nie wymaga to zgody (§ 25 ust. 2 pkt 2 TDDDG). Więcej informacji: [polityka prywatności Google](https://policies.google.com/privacy?hl=pl).",

    hostingHeading: "jw29435.de: hosting na GitHub Pages",
    hosting:
      "jw29435.de jest udostępniana przez GitHub Pages (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA). Przy wywołaniu strony GitHub przetwarza technicznie niezbędne dane i zapisuje je w logach serwera: twój adres IP, datę i godzinę, wywołany adres i identyfikator przeglądarki. Służy to dostarczeniu strony i jej bezpieczeństwu. Podstawą jest prawnie uzasadniony interes w bezpiecznej i dostępnej stronie internetowej (art. 6 ust. 1 lit. f RODO). Nie mam dostępu do tych logów; jak długo są przechowywane, ustala GitHub, a mianowicie tak długo, jak jest to konieczne dla bezpieczeństwa i działania usługi. GitHub posiada certyfikat w ramach EU-US Data Privacy Framework. Więcej informacji: [oświadczenie o prywatności GitHub](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).",

    cloudflareHeading: "johannwiebe.de: Cloudflare i własny serwer",
    cloudflare:
      "johannwiebe.de jest udostępniana przez sieć Cloudflare (Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107, USA). Cloudflare przekazuje żądania do mojego własnego serwera, chroni przed atakami i przetwarza przy tym dane połączenia. W celu ochrony przed zautomatyzowanym dostępem Cloudflare może ustawić technicznie niezbędny plik cookie (na przykład „__cf_bm”). Podstawą jest prawnie uzasadniony interes w bezpiecznej i dostępnej stronie internetowej (art. 6 ust. 1 lit. f RODO). Cloudflare posiada certyfikat w ramach EU-US Data Privacy Framework. Więcej informacji: [polityka prywatności Cloudflare](https://www.cloudflare.com/privacypolicy/).",
    serverLogs:
      "Serwer zapisuje logi dostępu z twoim adresem IP, datą i godziną, wywołanym adresem, ilością przesłanych danych, stroną odsyłającą i identyfikatorem przeglądarki. Służy to dostarczeniu strony, bezpieczeństwu i wyszukiwaniu błędów (art. 6 ust. 1 lit. f RODO). Pliki logów są usuwane najpóźniej po 30 dniach.",

    emailHeading: "Kontakt e-mailowy",
    email:
      "Jeśli napiszesz do mnie e-mail, przetwarzam twój adres i treść, aby odpowiedzieć (art. 6 ust. 1 lit. b lub f RODO). E-maile do tych domen są przekazywane przez Cloudflare Email Routing do mojej skrzynki w Gmail (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irlandia). Google przechowuje wiadomości w mojej skrzynce; dane mogą przy tym być przekazywane także do USA. Google posiada certyfikat w ramach EU-US Data Privacy Framework. Więcej informacji: [polityka prywatności Google](https://policies.google.com/privacy?hl=pl). Usuwam wiadomości, gdy zostaną załatwione i nie istnieje obowiązek ich przechowywania.",

    rightsHeading: "Twoje prawa",
    rights:
      "Masz prawo dostępu do swoich zapisanych danych (art. 15 RODO), do ich sprostowania (art. 16), usunięcia (art. 17), ograniczenia przetwarzania (art. 18) i przenoszenia danych (art. 20). Możesz wnieść sprzeciw wobec przetwarzania na podstawie art. 6 ust. 1 lit. f RODO (art. 21). Wystarczy e-mail na adres {email}.",
    complaint:
      "Możesz również złożyć skargę do organu nadzorczego ds. ochrony danych (art. 77 RODO). Właściwa jest Pełnomocniczka ds. Ochrony Danych i Wolności Informacji kraju związkowego Nadrenia Północna-Westfalia (Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen), Kavalleriestraße 2–4, 40213 Düsseldorf, [www.ldi.nrw.de](https://www.ldi.nrw.de).",

    updated: "Stan na: listopad 2026",
  },
};

export default pl;
