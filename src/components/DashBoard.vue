<template>
  <div class="dash section">
    <h1 class="title">Tschuttiheftlibuchhaltung</h1>
    <div v-for="(items, category) in values" :key="category" class="is-fullhd">
      <h2 class="subtitle is-4 is-marginless">{{category}}</h2>
      <ul>
        <li v-for="item in items"  :key="item.number" :class="{present: item.present}" @click="toggle(item)">
          <div>
            <strong>{{item.number}}</strong><br>
            <small>{{item.name}}</small>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Firebase from '@firebase/app'
// eslint-disable-next-line no-unused-vars
import FirebaseDatabase from '@firebase/database'
import data from './data'

const db = Firebase.initializeApp({
  apiKey: "AIzaSyBKQW7pmD9eY89Im_A9zPjkgtyqIT9ogqQ",
  authDomain: "tschuttiheftlibuchhaltung.firebaseapp.com",
  databaseURL: "https://tschuttiheftlibuchhaltung.firebaseio.com",
  projectId: "tschuttiheftlibuchhaltung",
  storageBucket: "tschuttiheftlibuchhaltung.appspot.com",
  messagingSenderId: "217301557004"
}).database()

var storage = undefined

export default {
  name: 'DashBoard',
  data () {
    return {
      values: data,
    }
  },
  methods: {
    toggle (item) {
      if (item.present) {
        storage.child(item.key).remove()
      } else {
        storage.push(item.number)
      }
    },
    find_item (number) {
      for (let category in this.values) {
          for (let item of data[category]) {
            if (item.number === number) {
              return item
            }
          }
        }
    }
  },
  created () {
    var storageId = localStorage.getItem('storageId')
    if (storage === undefined  || storage.getKey() !== storageId) {
      if (storage !== undefined) {
        storage.off()
      }

      storage = db.ref(storageId)
      for (let category in data) {
        for (let item of data[category]) {
          item.present = false
          delete item.key
        }
      }

      storage.on('child_added', record => {
        let item = this.find_item(record.val())
        Vue.set(item, 'present', true)
        Vue.set(item, 'key', record.key)
      })
      storage.on('child_removed', record => {
        let item = this.find_item(record.val())
        Vue.set(item, 'present', false)
        Vue.delete(item, 'key')
      })
    }
  }
}
</script>

<style scoped>
.dash {
  font-family: sans-serif;
  padding-top: 36px;
}
ul {
  padding: 0;
  margin-left: -5px;
  margin-right: -5px;
  margin-bottom: 20px;

}
li {
  cursor: pointer;
  list-style: none;
  display: inline-block;
  padding: 2px;
  padding-top: 2px;
  margin: 5px;
  border: solid 2px lightgray;
  width: 100px;
  text-align: center;
  height: 100px;
  vertical-align: middle;
  line-height: 1.3;
}
li > div {
  margin: 1px;
  border: white 2px solid;
    margin: 1px;
  height:  91px;
  max-height: 91px;
}
li.present, li.present strong, li.present small {
  background-color:#599f54;
  border-color: #599f54;
  color: white;
}
li strong {
  font-size: 24pt;
}
li small, li.present small {
  font-size: 9pt;
  display: inline-block;
  background-color: rgba(0, 0, 0, 0);
}
</style>
