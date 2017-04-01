<template>
  <div id="app" class='my-first-app'>
    <router-view></router-view>
    <App/>
  </div>
</template>
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
