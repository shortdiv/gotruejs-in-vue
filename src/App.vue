<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: "Paytone One";
  font-style: normal;
  font-weight: 400;
  src: url("./assets/fonts/paytone-one-v10-latin-regular.eot"); /* IE9 Compat Modes */
  src: local("Paytone One Regular"), local("PaytoneOne-Regular"),
    url("./assets/fonts/paytone-one.woff2") format("woff2"),
    /* Super Modern Browsers */
      url("./assets/fonts/paytone-one-v10-latin-regular.ttf") format("truetype"),
    /* Safari, Android, iOS */
      url("./assets/fonts/paytone-one-v10-latin-regular.svg#PaytoneOne")
      format("svg"); /* Legacy iOS */
  font-display: swap;
}

#app {
  color: #2c3e50;
  height: 100%;
}

html,
body {
  margin: 0;
  height: 100%;
  font-family: "Raleway", sans-serif;
}

ul,
li {
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
