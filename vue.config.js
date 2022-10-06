const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
module.exports = {
  configureWebpack: {
      resolve: {
          alias: {
              "views": "@/views",
              "network": "@/network",
              "components": "@/components",
              "common": "@/common",
              "assets": "@/assets"
          }
      }
  }
}