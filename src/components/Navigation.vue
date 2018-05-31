<template>
  <nav class="navbar is-light">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <span class="bd-emoji">⚽</span>
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
        <router-link to="/" class="navbar-item" exact-active-class="is-active">
          Tschuttiheftlibuchhaltung
        </router-link>
        <router-link to="/settings" class="navbar-item" exact-active-class="is-active">
          <span class="bd-emoji">⚙️</span> &nbsp;Einstellungen
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
a {
   outline: 0;
}
</style>
