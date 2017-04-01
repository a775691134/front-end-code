<template>
  <div id="app" class='my-first-app'>
    <img src="./assets/logo.png">
    <router-view></router-view>
    <h1 v-text='title'></h1>
    <input v-model='newItem' @keyup.13="addNew">
    <ul>
      <li v-for='item in items' v-on:click='Finish(item)' v-bind:class='{finished:item.isFinished}'> {{item.label}} </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      title: 'this is a todo list',
      items: [],
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
  }
}
</script>

<style>
.finished{
    text-decoration: underline;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  widows: 60%;
  margin: 60px auto ;
}
ul{
  width: 100px;
  margin:0 auto;
}
li{
  width:100px;
  font-size: 20px;
  
}
</style>
