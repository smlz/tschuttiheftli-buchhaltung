<template>
  <div id="app">
    <navigation/>
    <router-view/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import generatePassword from 'password-generator'

export default {
  name: 'App',
  components: {
    Navigation
  },
  created () {
    if (localStorage.getItem('storageId') === null) {
      localStorage.setItem('storageId', generatePassword(8))
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
