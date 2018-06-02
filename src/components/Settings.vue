<template>
  <div class="section">
    <h1 class="title is-3">Einstellungen</h1>
    <div class="field">
      <label class="label">Speicher-ID</label>
      <div class="control">
        <input class="input" type="text" placeholder="" v-model="storageId" @keyup.enter="save">
    </div>
    <p class="help">Um auf deine existierende Tschuttiheftlibuchhaltung zugreifen zu können, hier einfach noch einmal dieselbe Speicher-ID eintragen.</p>
    </div>
    <div class="field is-grouped is-right">
      <div class="control">
        <button class="button is-black" :class="{'is-loading': saving}" @click="save">Speichern</button>
      </div>
      <div class="control">
        <button class="button is-text" :disabled="saving" @click="cancel">Abrechen</button>
      </div>
    </div>
    <hr>
    Code auf <a href="https://github.com/smlz/tschuttiheftlibuchhaltung">GitHub</a>

    <div class="modal" :class="{'is-active': showModal}">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Speicher-ID existiert bereits</p>
        </header>
        <section class="modal-card-body">
          <p>Mit dieser Speicher-ID wurden bereits Tschuttiheftlibuchhaltungsdaten abgespeichert.</p><br>
          <p>Bist du sicher, dass du die ID verwenden möchtest?</p>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-black is-hidden-tablet" @click="confirmed">ID verwenden</button>
          <button class="button is-black is-hidden-mobile" @click="confirmed">Speicher-ID verwenden</button>
          <button class="button is-text" @click="showModal = false">Abbrechen</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import router from "@/router";
import db from "@/db"

export default {
  name: "Settings",
  data() {
    return {
      storageId: localStorage.getItem("storageId") || "",
      saving: false,
      showModal: false,
    };
  },
  methods: {
    save() {
      this.saving = true;
      if (this.storageId !== localStorage.getItem("storageId")) {
        db.ref(this.storageId).once('value', storage => {
          if (storage.val() === null) {
            localStorage.setItem("storageId", this.storageId)
            Vue.set(this, 'saving', false)
            router.push("/")
          } else {
            Vue.set(this, 'saving', false)
            Vue.set(this, 'showModal', true)
          }
        })
      } else {
        router.push("/");
      }
    },
    cancel() {
      this.storageId = localStorage.getItem("storageId") || "";
      router.push("/");
    },
    confirmed() {
      this.showModal = false
      localStorage.setItem("storageId", this.storageId)
      router.push("/");
    }
  }
};
</script>

<style scoped>
</style>
