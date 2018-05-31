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
</style>
