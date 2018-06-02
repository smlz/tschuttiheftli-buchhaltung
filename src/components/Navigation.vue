<template>
  <nav class="navbar is-black">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item"  @click.native="navIsActive = false">
        <img src="../assets/logo.svg" class="invert">tschuttiheftlibuchhaltung
      </router-link>
      <div class="navbar-burger burger" data-target="navMenu" @click="toggleMenu"
          :class="{'is-active': navIsActive}">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div id="navMenu" class="navbar-menu" :class="{'is-active': navIsActive}">
      <div class="navbar-start">
        <router-link to="/settings" class="navbar-item" @click.native="navIsActive = false">
          Einstellungen
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      navIsActive: false
    }
  },
  methods: {
      toggleMenu () { this.navIsActive = !this.navIsActive}
  }
}
</script>

<style scoped>
.navbar {
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  -webkit-box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1);
  box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1);
}
a {
  outline: 0;
}
img.invert {
  -webkit-filter: invert(100%);
  filter: invert(100%);
}
.navbar a img {
  margin-top: -12px;
  margin-left: -7px;
  margin-right: 2px;
}
.navbar a {
  font-family: "Tall Dark And Handsome Condensed";
  line-height: 1;
  letter-spacing: .06em;
  margin-top: 0.3rem;
}
.navbar-brand a{
  font-size: 1.7rem;
  font-weight: bold;
}
.navbar-menu a, .navbar-menu a:hover {
  font-size: 1.6rem;
  color: #4a4a4a;
}
</style>
