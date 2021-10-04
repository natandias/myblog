module.exports = {
  title: 'Natan Dias',
  theme: '@vuepress/blog',
  description: 'Algumas anotações sobre tecnologia',
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/favicons/apple-touch-icon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicons/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/favicons/favicon-16x16.png"}],
    ['link', { rel: "manifest", href: "/assets/favicons/site.webmanifest"}],
    ['link', { rel: "shortcut icon", href: "/assets/favicons/favicon.ico"}],
    ['meta', { name: "msapplication-TileColor", content: "#51616b"}],
    ['meta', { name: "theme-color", content: "#ffffff"}],
    ['meta', { name: "viewport", content: "width=device-width, initial-scale=1"}],
  ],
  plugins: [
    'vuepress-plugin-seo', 
    '@vuepress/back-to-top', 
    '@vuepress/medium-zoom',
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ],
    [ 'robots', 
    {
      /**
       * @host
       * Mandatory, You have to provide the host URL
       */   
      host: "https://natandias.github.io/myblog/",
      /**
       * @disallowAll
       * Optional: if it's true, all others options are ignored and exclude all robots from the entire server
       */
      disallowAll: false,
      /**
       * @allowAll
       * Optional: if it's true and @disallowAll is false, all others options are ignored and allow all robots complete access
       */
      allowAll: true,      
      /**
       * @sitemap
       * Optional, by default: sitemap.xml
       */ 
      sitemap: "/sitemap.xml",
      /**
       * @policies
       * Optional, by default: null
       */ 
      policies: [
          {
              userAgent: '*',
              disallow: [],
              allow: []
          }
      ]
  },]
  ],
  shouldPrefetch: () => false,
  base: "/myblog/",
  themeConfig: {
    dateFormat: 'DD-MM-YYYY',
    nav: [
      { text: 'Início', link: '/' },
      { text: 'Assuntos', link: '/tag/' },
      { text: 'Sobre mim', link: '/about/' },
      { text: 'RSS Feed', link: 'https://natandias.github.io/myblog/rss.xml' }
    ],
    directories: [
      {
        id: 'post',
        dirname: '_posts',
        path: '/',
        itemPermalink: '/:day/:month/:year/:slug',
      },
      {
        id: 'about',
        dirname: '_about',
        path: '/about/',
        itemPermalink: '/:slug',
      },
    ],
    pwa: {
      serviceWorker: true,
      updatePopup: true,
    },
    globalPagination: {
      lengthPerPage: 10,
    },
    footer: {
      contact: [
        { type: 'github', link: 'https://github.com/natandias/' },
        { type: 'mail', link: 'mailto:natandias@pm.me' },
      ],
      copyright: [
        {
          text: 'MIT Licensed',
          link: '',
        },
      ],
    },
    sitemap: {
      hostname: 'https://natandias.github.io/myblog/',
    },
    feed: {
      canonical_base: "https://natandias.github.io/myblog/",
    },
    locales: {
      '/': {
        lang: 'pt-BR',
      },
    }
  },
};