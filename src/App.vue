<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  color: #2c3e50;
  height: 100%;
}

html,
body {
  margin: 0;
  height: 100%;
  background: url(./assets/backdrop.jpg) center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
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
