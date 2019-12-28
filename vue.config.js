module.exports = {
  "devServer": {
    "proxy": {
      "/api": {
        "target": "https://www.city.kitakyushu.lg.jp/cgi-bin/event/api.cgi"
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}