<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import bg from ""
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  height: 100vh;
}
body {
  width: 1880px;
  height: 100vh;
  max-width: 1880px !important;
  max-height: 100vh !important;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  background-image: url("/static/images/index_bg.png");
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, "\5FAE\8F6F\96C5\9ED1", Arial, sans-serif !important;
}
</style>