<template>
    <div id="app">
        <xkcd-comic number="657" />
        <xkcd-comic />
    </div>
</template>

<script>
import XkcdComic from './components/xkcd-comic.vue';

export default {
    name: 'App',
    components: {
        XkcdComic
    }
};
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