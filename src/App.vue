<template>
  <div id="app">
    <navigation/>
    <router-view/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import router from '@/router'

export default {
  name: 'App',
  components: {
    Navigation
  },
  created () {
    if (localStorage.getItem('storageId') === null) {
      router.push('/init')
    }
  }
}
</script>

<style>
@font-face {
  font-family: "Tall Dark And Handsome Condensed";
  src: url("assets/fonts/talldark.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: local('Roboto'), local('Roboto-Regular'), url('assets/fonts/roboto.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: local('Roboto'), local('Roboto-Regular'), url('assets/fonts/roboto-ext.woff2') format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  src: local('Roboto Condensed'), local('RobotoCondensed-Regular'), url('assets/fonts/robotocond.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  src: local('Roboto Condensed'), local('RobotoCondensed-Regular'), url('assets/fonts/robotocond-ext.woff2') format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
h1 {
  font-family: "Tall Dark And Handsome Condensed";
  letter-spacing: .04em;
}
h2 {
  font-family: "Tall Dark And Handsome Condensed";
  letter-spacing: .06em;
}
#app > .section {
  padding: 25px 15px;
  font-family: 'Roboto', sans-serif;
  margin-top: 3rem;
}
</style>
