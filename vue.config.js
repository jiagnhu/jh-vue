// 项目的主要配置文件
// http://47.92.225.43:9999
// http://saas-admin.ggn.top
module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  chainWebpack: config => {
    // 忽略的打包文件
    const entry = config.entry("app");
    entry.add("babel-polyfill").end();
    entry.add("classlist-polyfill").end();
  },
  devServer: {
    proxy: "http://47.92.225.43:9999"
  }
};
