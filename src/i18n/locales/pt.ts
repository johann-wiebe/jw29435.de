// Português (Portugal). Translation of src/i18n/locales/de.ts; see docs/TRANSLATING.md.
import type { Messages } from "../types";

const pt: Messages = {
  meta: {
    home: {
      title: "jw29435",
      description:
        "Pequenas ferramentas para tarefas reais: Serva, Nuvo Explorer e CLR by NMBRS, de Johann Wiebe.",
    },
    impressum: {
      title: "Informação legal – jw29435",
      description: "Informação legal de jw29435.de, o site que reúne Serva, Nuvo Explorer e CLR by NMBRS.",
    },
    datenschutz: {
      title: "Privacidade – jw29435",
      description:
        "Política de privacidade de jw29435.de e johannwiebe.de: registos do servidor e Google Analytics só com consentimento.",
    },
    ogImageAlt: "Logótipo jw29435: portátil com as letras JW",
  },

  layout: {
    skipLink: "Saltar para o conteúdo",
    homeLink: "jw29435 – página inicial",
    mainNav: "Navegação principal",
    navProducts: "Produtos",
    navContact: "Contacto",
    navImpressum: "Informação legal",
    language: "Idioma",
    footerBy: "Um produto de **jw29435**",
    footerImpressum: "Informação legal",
    footerDatenschutz: "Privacidade",
    cookieSettings: "Definições de cookies",
  },

  languageHint: {
    text: "Esta página também está disponível em português.",
    action: "Ler em português",
    dismiss: "Fechar aviso",
  },

  home: {
    eyebrow: "jw29435 · Aplicações e ferramentas web",
    title: "Pequenas ferramentas para tarefas reais.",
    lead: "Três produtos de Johann Wiebe: um planeia cultos, outro abre o seu próprio Synology quando está fora de casa e outro transforma fotografias em modelos de pintura por números. Todos têm o mesmo aspeto.",
    logoAlt: "Logótipo jw29435: portátil com as letras JW",
    productsHeading: "Produtos",
    contactHeading: "Contacto",
    contactText: "Encontrou um erro ou tem uma ideia para um dos produtos? Escreva-me.",
    copy: "Copiar",
    copied: "Copiado",
  },

  products: {
    statusLabel: "Estado:",
    serva: {
      platform: "Web · para igrejas",
      description:
        "Planeia cultos, escalas de pregação e cânticos do coro e lembra os pregadores da sua data por email, WhatsApp ou notificação push.",
      action: "Abrir Serva",
      status: "Em utilização",
    },
    nuvo: {
      platform: "Android · iOS previsto",
      description:
        "Procure ficheiros no seu próprio Synology e reproduza pastas de música diretamente, na rede local, por VPN ou através de HTTPS.",
      action: "Ir para o teste Play",
      status: "Alfa",
    },
    clr: {
      platform: "Android",
      description:
        "Transforma uma fotografia num modelo de pintura por números, se quiser apenas com as cores da sua caixa de aguarelas.",
      action: "No Google Play",
      status: "Disponível",
    },
  },

  consent: {
    title: "Posso medir como o site é utilizado?",
    text: "Com o seu consentimento, utilizo o Google Analytics para ver que páginas são visitadas. O Google coloca cookies e transfere dados também para os EUA. Pode alterar a sua escolha em qualquer altura através de «Definições de cookies», no rodapé. Mais informações na [política de privacidade](page:datenschutz).",
    currentGranted: "Atualmente: permitido",
    currentDenied: "Atualmente: recusado",
    deny: "Recusar",
    allow: "Permitir",
  },

  legalNotice: {
    text: "Esta é uma tradução. Só a versão alemã é juridicamente vinculativa.",
    link: "Ver a versão alemã",
  },

  impressum: {
    title: "Informação legal",
    intro: "Esta informação legal aplica-se aos sites jw29435.de e johannwiebe.de.",
    providerHeading: "Informações nos termos do § 5 DDG (Lei alemã dos serviços digitais)",
    contactHeading: "Contacto",
    email: "Email: {email}",
  },

  datenschutz: {
    title: "Política de privacidade",
    intro:
      "Esta política aplica-se aos sites jw29435.de e johannwiebe.de. Descreve que dados são gerados durante a visita e o que acontece com eles.",
    serva:
      "O Serva tem uma política de privacidade própria: [serva.jw29435.de/datenschutz](https://serva.jw29435.de/datenschutz).",

    controllerHeading: "Responsável pelo tratamento",
    controllerEmail: "Email: {email}",

    cookiesHeading: "Cookies e análise",
    cookies:
      "Sem o seu consentimento, nenhum dos dois sites coloca cookies próprios, utiliza ferramentas de análise ou rastreadores, nem integra conteúdos de terceiros. Os tipos de letra são fornecidos juntamente com a página; para tal, o seu browser não estabelece qualquer ligação ao Google Fonts ou a outros serviços. Em jw29435.de, pode permitir o Google Analytics (ver abaixo).",

    analyticsHeading: "jw29435.de: Google Analytics com consentimento",
    analytics1:
      "Se clicar em «Permitir» no banner, jw29435.de utiliza o Google Analytics 4, um serviço de análise web da Google Ireland Limited (Gordon House, Barrow Street, Dublin 4, Irlanda). Assim, vejo de forma agregada que páginas são visitadas e com que frequência, de onde vêm as visitas e com que dispositivos e browsers. Antes disso, o Google Analytics não é carregado.",
    analytics2:
      "Para tal, o Google Analytics guarda cookies no seu browser («_ga» e «_ga_1F5GCWHXKX», até dois anos) e trata dados de utilização como as páginas visitadas, a hora, o referenciador, a localização aproximada, o dispositivo e o browser. O Google Analytics 4 não guarda endereços IP. O Google Signals e a publicidade personalizada estão desativados. Os dados podem também ser transferidos para a Google LLC nos EUA; a Google está certificada ao abrigo do EU-US Data Privacy Framework.",
    analytics3:
      "O fundamento jurídico é o seu consentimento (art. 6.º, n.º 1, alínea a), do RGPD, § 25, n.º 1, TDDDG). Pode retirá-lo em qualquer altura, com efeitos para o futuro: clique em «Definições de cookies» no rodapé e depois em «Recusar». Os cookies do Google Analytics são então eliminados. O próprio site guarda a sua escolha no armazenamento local do seu browser («analytics-consent»), para que o banner não apareça em cada visita; para tal, não é necessário consentimento (§ 25, n.º 2, ponto 2, TDDDG). Mais informações: [Política de Privacidade da Google](https://policies.google.com/privacy?hl=pt-PT).",

    hostingHeading: "jw29435.de: alojamento no GitHub Pages",
    hosting:
      "jw29435.de é disponibilizado através do GitHub Pages (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, EUA). Quando uma página é aberta, o GitHub trata dados tecnicamente necessários e guarda-os em registos do servidor: o seu endereço IP, a data e a hora, o endereço aberto e o identificador do browser. Isto serve para disponibilizar a página e garantir a sua segurança. O fundamento jurídico é o interesse legítimo num site seguro e disponível (art. 6.º, n.º 1, alínea f), do RGPD). Não tenho acesso a estes registos; o tempo durante o qual são conservados é definido pelo GitHub, nomeadamente o tempo necessário para a segurança e o funcionamento do serviço. O GitHub está certificado ao abrigo do EU-US Data Privacy Framework. Mais informações: [Declaração de privacidade do GitHub](https://docs.github.com/pt/site-policy/privacy-policies/github-general-privacy-statement).",

    cloudflareHeading: "johannwiebe.de: Cloudflare e servidor próprio",
    cloudflare:
      "johannwiebe.de é disponibilizado através da rede da Cloudflare (Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107, EUA). A Cloudflare encaminha os pedidos para o meu próprio servidor, protege contra ataques e trata, para o efeito, os dados de ligação. Para proteção contra acessos automatizados, a Cloudflare pode colocar um cookie tecnicamente necessário (por exemplo, «__cf_bm»). O fundamento jurídico é o interesse legítimo num site seguro e disponível (art. 6.º, n.º 1, alínea f), do RGPD). A Cloudflare está certificada ao abrigo do EU-US Data Privacy Framework. Mais informações: [Política de privacidade da Cloudflare](https://www.cloudflare.com/privacypolicy/).",
    serverLogs:
      "O servidor escreve registos de acesso com o seu endereço IP, a data e a hora, o endereço aberto, o volume de dados transferido, o referenciador e o identificador do browser. Isto serve para disponibilizar a página, para a segurança e para a deteção de erros (art. 6.º, n.º 1, alínea f), do RGPD). Os ficheiros de registo são eliminados o mais tardar após 30 dias.",

    emailHeading: "Contacto por email",
    email:
      "Se me enviar um email, trato o seu endereço e o conteúdo para responder (art. 6.º, n.º 1, alínea b) ou f), do RGPD). Os emails enviados para estes domínios são reencaminhados através do Cloudflare Email Routing para a minha caixa de correio no Gmail (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irlanda). A Google guarda as mensagens na minha caixa de correio; os dados podem também ser transferidos para os EUA. A Google está certificada ao abrigo do EU-US Data Privacy Framework. Mais informações: [Política de Privacidade da Google](https://policies.google.com/privacy?hl=pt-PT). Elimino as mensagens quando estiverem tratadas e não existir obrigação de as conservar.",

    rightsHeading: "Os seus direitos",
    rights:
      "Tem direito de acesso aos seus dados guardados (art. 15.º do RGPD), de retificação (art. 16.º), de apagamento (art. 17.º), de limitação do tratamento (art. 18.º) e de portabilidade dos dados (art. 20.º). Pode opor-se a um tratamento baseado no art. 6.º, n.º 1, alínea f), do RGPD (art. 21.º). Basta um email para {email}.",
    complaint:
      "Pode ainda apresentar reclamação junto de uma autoridade de controlo de proteção de dados (art. 77.º do RGPD). A autoridade competente é a Comissária para a Proteção de Dados e a Liberdade de Informação da Renânia do Norte-Vestefália (Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen), Kavalleriestraße 2–4, 40213 Düsseldorf, [www.ldi.nrw.de](https://www.ldi.nrw.de).",

    updated: "Última atualização: novembro de 2026",
  },
};

export default pt;
