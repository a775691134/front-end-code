<template>
	<div>
    <h1 v-text='title'></h1>
    <input v-model='newItem' @keyup.13="addNew">
    <ul>
      <li v-for='item in items' v-on:click='Finish(item)' v-bind:class='{finished:item.isFinished}'> {{item.label}} </li>
    </ul>
    <router-link to="/">返回vue首页</router-link>
	</div>
</template>
<script>
import Store from '../../store.js'
export default {
  name: 'app',
  data: function () {
    return {
      title: 'this is a todo list',
      items: Store.fetch(),
      newItem: ''
    }
  },
  methods: {
    Finish: function (item) {
      item.isFinished = !item.isFinished
    },
    addNew: function () {
      this.items.push({
        label: this.newItem,
        isFinished: false
      })
      this.newItem = ''
    }
  },
  watch: {
    items: {
      handler: function (val, oldVal) {
        Store.save(this.items)
      },
      deep: true
    }
  }
}
</script>
