module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'vue-server-renderer-bug-mini-repo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  build: {
    filenames: {
      // app: ({ isDev }) => isDev ? '[name].js' : 'js/[name].js?v=[chunkhash:7]',
      chunk: ({ isDev }) => isDev ? '[name].js' : 'js/[name].js?v=[chunkhash:7]',
      // css: ({ isDev }) => isDev ? '[name].js' : 'css/[name].css?v=[contenthash:7]',
      // img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'images/[name].[ext]?v=[hash:7]',
      // font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[name].[ext]?v=[hash:7]',
      // video: ({ isDev }) => isDev ? '[path][name].[ext]' : 'videos/[name].[ext]?v=[hash:7]'
    }
  }
}
