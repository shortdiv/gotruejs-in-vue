# Using Netlify GoTrue JS with Vue

[![Netlify Status](https://api.netlify.com/api/v1/badges/d0a7405c-9659-4047-a633-f07133b22c1b/deploy-status)](https://app.netlify.com/sites/netlify-gotrue-in-vue/deploys)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/shortdiv/gotruejs-in-vue)

This is a working example showing how to use Netlify's GoTrue JS library with VueJS. It accompanies the blogpost on the same topic, [you can find that here](https://www.netlify.com/blog/2018/12/07/gotrue-js-bringing-authentication-to-static-sites-with-just-3kb-of-js/). 

## Project setup

```
yarn install
```

### Configuring Identity
Note that using Identity with GoTrueJS requires you to deploy your site Netlify and enable Identity in Netlify's app dashboard. Also, be sure to change the identity URL in `src > state > modules > auth > state.js` to a custom link or the default link netlify deploys your site to. 


### Compiles and hot-reloads for development

```
yarn run serve
```

### Compiles and minifies for production

```
yarn run build
```

### Lints and fixes files

```
yarn run lint
```
