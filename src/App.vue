<template>
  <div id="app">
    <xkcd-comic />
  </div>
</template>

<script>
import XkcdComic from './components/xkcd-comic.vue';

export default {
  name: 'app',
  components: {
    XkcdComic
  }
}
</script>

<style lang="scss">
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
</style>
