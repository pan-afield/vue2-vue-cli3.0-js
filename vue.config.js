module.exports = {
  productionSourceMap: process.env.NODE_ENV === 'production' ? false : true, //是否能查看源码
  devServer: {
    open: false,    //是否自动打开浏览器
    port: 8080,      //启动端口号
    https: false,    //是否开启https
    hotOnly: false,
    proxy: {
      // 配置跨域
      '/webapi': {
        target: 'http://f8.lexun.com/',
        changOrigin: false,    //是否开启代理
        pathRewrite: { //  /api开头的请求会去到target下请求
        }
      }
    },
  },
  lintOnSave: false,
  publicPath: './',
  css: {
    loaderOptions: {
      scss: {
        data: `
          @import "@/mixin/mixin.scss";
        `
      },
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 37.5, //因为vant是以375px开发的，所以蓝湖上也需调成375比例
            remPrecision: 6,
          })
        ]
      }
    }
  },
}