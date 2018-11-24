<template>
    <div class="container">
        <div v-if="api.success">
            <p class="title">xkcd #{{ comic.num }} - {{ comic.title }}</p>
            <p class="date">Published {{ formattedDate }}</p>
            <a :href="linkUrl">
                <img
                    :src="comic.img"
                    :title="comic.alt">
            </a>
        </div>
        <p
            v-if="api.pending"
            class="title">
            {{ api.pendingMessage }}
        </p>
        <p
            v-if="api.failure"
            class="title">
            {{ api.failureMessage }}
        </p>
    </div>
</template>

<script>
import { getLatestComic } from '../lib/xkcd-api.js';

export default {
    name: 'XkcdComic',
    props: {
        number: {
            type: Number,
            default: undefined
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
        };
    },
    computed: {
        linkUrl () {
            return `https://xkcd.com/${this.comic.num}`;
        },
        formattedDate () {
            return `${this.comic.day}/${this.comic.month}/${this.comic.year}`;
        }
    },
    async created () {
        try {
            this.api.pending = true;
            const comic = await getLatestComic(this.number);

            if (!this.number) this.comic.num = comic.num;

            this.comic = comic;

            this.api.pending = false;
            this.api.success = true;
        } catch (error) {
            this.api.pending = false;
            this.api.failure = true;
        }
    }
};
</script>

<style lang="scss">
.container {
    text-align: center;
    font-variant: small-caps;
    font-family: sans-serif;

    .title {
        margin-top: 0;
        margin-bottom: 2px;
        font-size: 21px;
        font-weight: 800;
    }

    .date {
        margin-bottom: 15px;
        margin-top: 0;
        font-size: 16px;
        font-weight: 500;
    }
}
</style>