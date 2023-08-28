
module.exports = {
  seo: {
  "title": "FastStore Eduuu",
  "description": "A fast and performant store framework",
  "titleTemplate": "%s | FastStore",
  "author": "Eduardo"
},

  // Theming
  theme: 'soft-blue',

  // Ecommerce Platform
  platform: 'vtex',

  // Platform specific configs for API
  api: {
    storeId: "desafioonboarding30",
    workspace: 'master',
    environment: 'vtexcommercestable',
    hideUnavailableItems: true,
  },

  // Default session
  session: {
    currency: {
      code: "BRL",
      symbol: "R$",
    },
    locale: "pt-BR",
    channel: '{"salesChannel":1,"regionId":""}',
    country: "BRA",
    postalCode: null,
    person: null,
  },

  // Production URLs
  storeUrl: "https://desafioonboarding30.vtex.app",
  secureSubdomain: "https://secure.vtexfaststore.com/",
  checkoutUrl: "https://secure.vtexfaststore.com/checkout",
  loginUrl: "https://secure.vtexfaststore.com/login",
  accountUrl: "https://secure.vtexfaststore.com/api/io/account",

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || 'http://localhost:3000',
    pages: {
      home: '/',
      pdp: "/apple-watch-25/p",
      collection: "/acess%C3%B3rios",
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: "/apple-watch-25/p",
      collection: "/acess%C3%B3rios",
      collection_filtered: "/acess%C3%B3rios/?category-1=acess%C3%B3rios&brand=Apple&facets=category-1%2Cbrand%27",
      search: "/s?q=Apple",
    },
  },

  analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
    gtmContainerId: "",
  },
  account: "desafioonboarding30",
  
  vtexHeadlessCms: {
    webhookUrls: [
      "https://desafioonboarding30.myvtex.com/cms-releases/webhook-releases"
    ]
  }
}
