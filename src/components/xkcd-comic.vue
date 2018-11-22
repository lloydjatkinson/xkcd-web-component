<template>
    <div class="container">
        <div v-if="api.success">
            <p class="title">{{ comic.title }}</p>
            <img :src="comic.img" :title="comic.alt" :alt="comic.title" />
        </div>
        <div v-if="api.pending">
            <p class="title">{{ api.pendingMessage }}</p>
        </div>
    </div>
</template>

<script>
import { getLatestComic } from '../lib/xkcd-api.js';

export default {
    name: 'XkcdComic',
    data () {
        return {
            comic: {
                title: '',
                alt: '',
                img: '',
                day: 0,
                month: 0,
                year: 0,
                number: 0
            },
            api: {
                success: false,
                pending: false,
                pendingMessage: 'Getting latest XKCD comic',
                failure: false,
                failureMessage: 'Unable to get the latest XKCD comic'
            }
        }
    },
    async created () {
        try {
            this.api.pending = true;
            const comic = await getLatestComic();

            this.comic = comic;

            this.api.success = true;
            this.api.pending = false;
        } catch (error) {
            this.api.failure = true;
            this.api.pending = false;
        }
    }
}
</script>

<style lang="scss">
.container {
    text-align: center;
    font-variant: small-caps;
    // font-weight: 500px;

    .title {
        margin: 10px;
        font-family: sans-serif;
        font-size: 21px;
        font-weight: 800;
    }
}
</style>