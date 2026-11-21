// Gaeilge. Translation of src/i18n/locales/de.ts; see docs/TRANSLATING.md.
import type { Messages } from "../types";

const ga: Messages = {
  meta: {
    home: {
      title: "jw29435",
      description:
        "Uirlisí beaga do phróisis fhíora: Serva, Nuvo Explorer agus CLR by NMBRS le Johann Wiebe.",
    },
    impressum: {
      title: "Fógra dlíthiúil – jw29435",
      description: "Fógra dlíthiúil jw29435.de, baile Serva, Nuvo Explorer agus CLR by NMBRS.",
    },
    datenschutz: {
      title: "Príobháideacht – jw29435",
      description:
        "Polasaí príobháideachais do jw29435.de agus johannwiebe.de: logaí freastalaí, agus Google Analytics le toiliú amháin.",
    },
    ogImageAlt: "Lógó jw29435: ríomhaire glúine leis na litreacha JW ar ómra",
  },

  layout: {
    skipLink: "Léim chuig an ábhar",
    homeLink: "jw29435 – leathanach baile",
    mainNav: "Príomh-nascleanúint",
    navProducts: "Táirgí",
    navContact: "Teagmháil",
    navImpressum: "Fógra dlíthiúil",
    language: "Teanga",
    footerBy: "Táirge de chuid **jw29435**",
    footerImpressum: "Fógra dlíthiúil",
    footerDatenschutz: "Príobháideacht",
    cookieSettings: "Socruithe fianán",
  },

  languageHint: {
    text: "Tá an leathanach seo ar fáil i nGaeilge freisin.",
    action: "Léigh i nGaeilge",
    dismiss: "Dún an fógra",
  },

  home: {
    eyebrow: "jw29435 · Aipeanna agus uirlisí gréasáin",
    title: "Uirlisí beaga do phróisis fhíora.",
    lead: "Trí tháirge le Johann Wiebe: pleanálann ceann acu seirbhísí eaglaise, osclaíonn ceann eile do Synology féin agus tú amuigh, agus déanann an tríú ceann teimpléid phéinteála de réir uimhreacha as grianghraif. Tá an chuma chéanna orthu go léir.",
    logoAlt: "Lógó jw29435: ríomhaire glúine leis na litreacha JW",
    productsHeading: "Táirgí",
    contactHeading: "Teagmháil",
    contactText: "Ar aimsigh tú fabht nó an bhfuil smaoineamh agat do cheann de na táirgí? Scríobh chugam.",
    copy: "Cóipeáil",
    copied: "Cóipeáilte",
  },

  products: {
    statusLabel: "Stádas:",
    serva: {
      platform: "Gréasán · do phobail eaglaise",
      description:
        "Pleanálann sé seirbhísí eaglaise, sealanna seanmóireachta agus amhráin chóir, agus cuireann sé seanmóirithe i gcuimhne ar a gcoinne trí ríomhphost, WhatsApp nó fógra brú.",
      action: "Oscail Serva",
      status: "In úsáid",
    },
    nuvo: {
      platform: "Android · iOS beartaithe",
      description:
        "Brabhsáil na comhaid ar do Synology féin agus seinn fillteáin cheoil go díreach, ar an líonra áitiúil, trí VPN nó thar HTTPS.",
      action: "Chuig tástáil Play",
      status: "Alfa",
    },
    clr: {
      platform: "Android",
      description:
        "Déanann sé teimpléad péinteála de réir uimhreacha as grianghraf, más mian leat gan ach na dathanna atá i do bhosca péinte féin.",
      action: "Ar Google Play",
      status: "Ar fáil",
    },
  },

  consent: {
    title: "An féidir liom a thomhas conas a úsáidtear an suíomh?",
    text: "Le do thoiliú, úsáidim Google Analytics chun a fheiceáil cé na leathanaigh a dtugtar cuairt orthu. Socraíonn Google fianáin agus aistríonn sé sonraí chuig SAM freisin. Is féidir leat do rogha a athrú am ar bith trí “Socruithe fianán” sa bhuntásc. Tuilleadh sa [pholasaí príobháideachais](page:datenschutz).",
    currentGranted: "Faoi láthair: ceadaithe",
    currentDenied: "Faoi láthair: diúltaithe",
    deny: "Diúltaigh",
    allow: "Ceadaigh",
  },

  legalNotice: {
    text: "Is aistriúchán é seo. Is é an leagan Gearmáinise amháin atá ceangailteach ó thaobh dlí de.",
    link: "Chuig an leagan Gearmáinise",
  },

  impressum: {
    title: "Fógra dlíthiúil",
    intro: "Baineann an fógra dlíthiúil seo leis na suíomhanna gréasáin jw29435.de agus johannwiebe.de.",
    providerHeading: "Faisnéis de réir § 5 DDG (Acht na Gearmáine um Sheirbhísí Digiteacha)",
    contactHeading: "Teagmháil",
    email: "Ríomhphost: {email}",
  },

  datenschutz: {
    title: "Polasaí príobháideachais",
    intro:
      "Baineann an ráiteas seo leis na suíomhanna gréasáin jw29435.de agus johannwiebe.de. Déanann sé cur síos ar na sonraí a ghintear le linn cuairte agus ar a dtarlaíonn dóibh.",
    serva:
      "Tá a pholasaí príobháideachais féin ag Serva: [serva.jw29435.de/datenschutz](https://serva.jw29435.de/datenschutz).",

    controllerHeading: "Rialaitheoir",
    controllerEmail: "Ríomhphost: {email}",

    cookiesHeading: "Fianáin agus anailísíocht",
    cookies:
      "Gan do thoiliú, ní shocraíonn ceachtar den dá shuíomh gréasáin aon fhianáin dá gcuid féin, ní úsáideann siad anailísíocht ná rianairí, agus ní leabaíonn siad ábhar ó thríú páirtithe. Seachadtar na clónna in éineacht leis an leathanach; ní dhéanann do bhrabhsálaí ceangal le Google Fonts ná le seirbhísí eile chuige sin. Ar jw29435.de is féidir leat Google Analytics a cheadú (féach thíos).",

    analyticsHeading: "jw29435.de: Google Analytics le toiliú",
    analytics1:
      "Má chliceálann tú “Ceadaigh” sa mheirge, úsáideann jw29435.de Google Analytics 4, seirbhís anailísíochta gréasáin de chuid Google Ireland Limited (Gordon House, Barrow Street, Dublin 4, Éire). Feicim mar sin, i bhfoirm chomhiomlán, cé na leathanaigh a dtugtar cuairt orthu agus cé chomh minic, cad as a dtagann na cuairteanna agus cé na gléasanna agus brabhsálaithe a úsáidtear. Ní lódáiltear Google Analytics roimhe sin.",
    analytics2:
      "Chuige sin, stórálann Google Analytics fianáin i do bhrabhsálaí (“_ga” agus “_ga_1F5GCWHXKX”, suas le dhá bhliain) agus próiseálann sé sonraí úsáide ar nós na leathanach ar tugadh cuairt orthu, an ama, an atreoraithe, an tsuímh gharbh, an ghléis agus an bhrabhsálaí. Ní stórálann Google Analytics 4 seoltaí IP. Tá Google Signals agus fógraíocht phearsantaithe múchta. Féadfar sonraí a aistriú chuig Google LLC i SAM freisin dá bharr; tá Google deimhnithe faoin EU-US Data Privacy Framework.",
    analytics3:
      "Is é do thoiliú an bunús (Airteagal 6(1)(a) den Rialachán Ginearálta maidir le Cosaint Sonraí (RGCS), § 25(1) TDDDG (Acht na Gearmáine um Chosaint Sonraí i dTeileachumarsáid agus i Seirbhísí Digiteacha)). Is féidir leat é a tharraingt siar am ar bith le héifeacht don todhchaí: cliceáil “Socruithe fianán” sa bhuntásc agus ansin “Diúltaigh”. Scriostar fianáin Google Analytics nuair a dhéanann tú amhlaidh. Stórálann an suíomh féin do rogha i stóras áitiúil do bhrabhsálaí (“analytics-consent”) ionas nach dtaispeántar an mheirge ar gach cuairt; ní gá toiliú chuige seo (§ 25(2) uimh. 2 TDDDG). Tuilleadh faisnéise: [Polasaí príobháideachais Google](https://policies.google.com/privacy?hl=en).",

    hostingHeading: "jw29435.de: Óstáil ar GitHub Pages",
    hosting:
      "Seachadtar jw29435.de trí GitHub Pages (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, SAM). Nuair a iarrtar leathanach, próiseálann GitHub sonraí atá riachtanach go teicniúil agus stórálann sé iad i logaí freastalaí: do sheoladh IP, an dáta agus an t-am, an seoladh a iarradh agus aitheantóir an bhrabhsálaí. Is chun an leathanach a sheachadadh agus a choinneáil slán é seo. Is é an bunús an leas dlisteanach i suíomh gréasáin slán atá ar fáil (Airteagal 6(1)(f) RGCS). Níl rochtain agam ar na logaí seo; is é GitHub a chinneann cé chomh fada a choinnítear iad, is é sin chomh fada agus is gá do shlándáil agus d’oibriú na seirbhíse. Tá GitHub deimhnithe faoin EU-US Data Privacy Framework. Tuilleadh faisnéise: [Ráiteas príobháideachais GitHub](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).",

    cloudflareHeading: "johannwiebe.de: Cloudflare agus mo fhreastalaí féin",
    cloudflare:
      "Seachadtar johannwiebe.de trí líonra Cloudflare (Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107, SAM). Cuireann Cloudflare iarratais ar aghaidh chuig mo fhreastalaí féin, cosnaíonn sé ar ionsaithe agus próiseálann sé na sonraí ceangail á dhéanamh sin. Chun cosaint ar rochtain uathoibrithe, féadfaidh Cloudflare fianán atá riachtanach go teicniúil a shocrú (mar shampla “__cf_bm”). Is é an bunús an leas dlisteanach i suíomh gréasáin slán atá ar fáil (Airteagal 6(1)(f) RGCS). Tá Cloudflare deimhnithe faoin EU-US Data Privacy Framework. Tuilleadh faisnéise: [Polasaí príobháideachais Cloudflare](https://www.cloudflare.com/privacypolicy/).",
    serverLogs:
      "Scríobhann an freastalaí logaí rochtana ina bhfuil do sheoladh IP, an dáta agus an t-am, an seoladh a iarradh, an méid sonraí a aistríodh, an t-atreoraí agus aitheantóir an bhrabhsálaí. Is chun an leathanach a sheachadadh, ar mhaithe le slándáil agus chun fabhtanna a aimsiú é seo (Airteagal 6(1)(f) RGCS). Scriostar na comhaid logála tar éis 30 lá ar a dhéanaí.",

    emailHeading: "Teagmháil trí ríomhphost",
    email:
      "Má scríobhann tú ríomhphost chugam, próiseálaim do sheoladh agus an t-ábhar chun freagra a thabhairt (Airteagal 6(1)(b) nó (f) RGCS). Cuirtear ríomhphoist chuig na fearainn seo ar aghaidh trí Cloudflare Email Routing chuig mo bhosca poist ar Gmail (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Éire). Stórálann Google na teachtaireachtaí i mo bhosca poist; féadfar sonraí a aistriú chuig SAM freisin dá bharr. Tá Google deimhnithe faoin EU-US Data Privacy Framework. Tuilleadh faisnéise: [Polasaí príobháideachais Google](https://policies.google.com/privacy?hl=en). Scriosaim na teachtaireachtaí nuair a bhíonn siad déileáilte agus nach bhfuil aon oibleagáid iad a choinneáil.",

    rightsHeading: "Do chearta",
    rights:
      "Tá sé de cheart agat rochtain a fháil ar na sonraí atá stóráilte fút (Airteagal 15 RGCS), iad a cheartú (Airteagal 16), a scriosadh (Airteagal 17), srian a chur ar a bpróiseáil (Airteagal 18) agus iniomparthacht sonraí (Airteagal 20). Is féidir leat agóid a dhéanamh i gcoinne próiseála atá bunaithe ar Airteagal 6(1)(f) RGCS (Airteagal 21). Is leor ríomhphost chuig {email}.",
    complaint:
      "Ina theannta sin, is féidir leat gearán a dhéanamh le húdarás maoirseachta cosanta sonraí (Airteagal 77 RGCS). Is é an t-údarás inniúil Coimisinéir Stáit na Réine Thuaidh-na Vestfáile um Chosaint Sonraí agus Saoráil Faisnéise (Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen), Kavalleriestraße 2–4, 40213 Düsseldorf, [www.ldi.nrw.de](https://www.ldi.nrw.de).",

    updated: "Nuashonraithe: Samhain 2026",
  },
};

export default ga;
