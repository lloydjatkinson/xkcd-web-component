<template>
    <div class="container">
        <div v-if="api.success">
            <p class="title">xkcd #{{ comic.num }} - {{ comic.title }}</p>
            <img :src="comic.img" :title="comic.alt" />
        </div>
        <div v-if="api.pending">
            <p class="title">{{ api.pendingMessage }}</p>
        </div>
        <div v-if="api.failure">
            <p class="title">{{ api.failureMessage }}</p>
        </div>
    </div>
</template>

<script>
import { getLatestComic } from '../lib/xkcd-api.js';

export default {
    name: 'XkcdComic',
    props: {
        number: {
            type: Number,
        },
    },
    data () {
        return {
            comic: {
                title: '',
                alt: '',
                img: '',
                day: 0,
                month: 0,
                year: 0,
                num: 0
            },
            api: {
                success: false,
                pending: false,
                pendingMessage: 'Getting latest xkcd comic',
                failure: false,
                failureMessage: 'Unable to get the latest xkcd comic'
            }
        }
    },
    async created () {
        try {
            this.api.pending = true;
            const comic = await getLatestComic(this.number);

            this.comic = comic;

            this.api.pending = false;
            this.api.success = true;
        } catch (error) {
            this.api.pending = false;
            this.api.failure = true;
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