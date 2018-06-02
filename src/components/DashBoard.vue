<template>
  <div class="section">
    <div v-for="(items, category) in values" :key="category" class="is-fullhd">
      <h2 class="subtitle is-3 is-marginless">{{category}}</h2>
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
import db from '@/db'
import data from './data'

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
  padding: 1px;
  margin: 4px;
  border: dashed 2px black;
  width: 80px;
  text-align: center;
  height: 80px;
  vertical-align: middle;
  line-height: 1;
}
li > div {
  padding: 3px 2px;
  border: white 2px solid;
  margin: 0px;
  height:  74px;
  max-height: 74px;
}
li.present, li.present strong, li.present small {
  background-color:#599f54;
  border-color: #599f54;
  color: white;
}
li strong {
  font-size: 22pt;
  font-family: "Tall Dark And Handsome Condensed";
  letter-spacing: .1em;
}
li small, li.present small {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 9pt;
  line-height: 1.05;
  display: inline-block;
  background-color: rgba(0, 0, 0, 0);
  margin-top: -2px;
}
}
</style>
