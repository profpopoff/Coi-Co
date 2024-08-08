<script setup lang="ts">
import type { CardData } from './types';

interface CardProps {
    card: CardData
}

const { card } = defineProps<CardProps>()
const { title, year, image, type, ageLimit } = card
</script>

<template>
    <article>
        <picture>
            <source media="(min-width: 600px)" :srcset="image.landscape">
            <source :srcset="image.poster">
            <img :src="image.landscape" :alt="title">
        </picture>
        <footer>
            <ul role="list">
                <li>{{ year }}</li>
                <li class="type">
                    <MovieIcon class="icon" v-if="type.toLowerCase() === 'movie'" />
                    <TvIcon class="icon" v-else-if="type.toLowerCase() === 'tv series'" />
                    {{ type }}
                </li>
                <li>{{ ageLimit }}</li>
            </ul>
            <h3>{{ title }}</h3>
        </footer>
    </article>
</template>

<style scoped>
article {
    display: flex;
    flex-direction: column;
    gap: .3rem;
}

ul[role="list"] {
    display: flex;
    opacity: .7;
    font-weight: 300;
}

ul[role="list"] li:not(:last-child):after {
    content: "•";
    padding-inline: .5rem;
}

.type {
    display: inline-flex;
}

.icon {
    width: .85rem;
    margin-right: .25rem;
}

img {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    border-radius: .5rem;
}

h3 {
    font-weight: 500;
}
</style>