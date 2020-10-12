module.exports = {
  title: 'Natan Dias',
  theme: '@vuepress/theme-blog',
  plugins: ['vuepress-plugin-seo', '@vuepress/back-to-top', '@vuepress/medium-zoom'],
  shouldPrefetch: () => false,
  themeConfig: {
    dateFormat: 'DD-MM-YYYY',
    nav: [
      { text: 'Início', link: '/' },
      { text: 'Assuntos', link: '/tag/' },
      { text: 'Sobre mim', link: '/about/' },
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
    locales: {
      '/': {
        lang: 'pt-BR',
      },
    }
  },
};