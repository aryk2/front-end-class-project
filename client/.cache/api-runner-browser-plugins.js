module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-material-ui/gatsby-browser.js'),
      options: {"plugins":[],"stylesProvider":{"injectFirst":true},"disableAutoprefixing":false,"disableMinification":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"client","short_name":"client","description":"A Gatsby/React/Typescript App","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/images/icon.png","icons":[{"src":"icons/icon_512x512.png","sizes":"512x512","types":"image/png"},{"src":"icons/icon_192x192.png","sizes":"192x192","types":"image/png"}],"cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"7fba0df4fb4ab555769d088afb8659a4"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
