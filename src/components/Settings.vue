<template>
  <div class="section">
    <h1 class="title">Einstellungen</h1>
    <div class="field">
      <label class="label">Speicher-ID</label>
      <div class="control">
        <input class="input" type="text" placeholder="" v-model="storageId">
    </div>
    <p class="help">Um auf deine existierende Tschuttiheftlibuchhaltung zugreifen zu können, hier einfach noch einmal dieselbe Speicher-ID eingeben.</p>
    </div>
    <div class="field is-grouped">
      <div class="control">
        <button class="button is-primary" @click="save">Speichern</button>
      </div>
      <div class="control">
        <button class="button is-text" @click="cancel">Abrechen</button>
      </div>
    </div>
    <hr>
    Code auf <a href="https://github.com/smlz/tschuttiheftlibuchhaltung">GitHub</a>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "Settings",
  data() {
    return {
      storageId: localStorage.getItem("storageId") || ""
    };
  },
  methods: {
    save() {
      localStorage.setItem("storageId", this.storageId);
      router.push("/");
    },
    cancel() {
      this.storageId = localStorage.getItem("storageId") || "";
      router.push("/");
    }
  }
};
</script>

<style scoped>
</style>
