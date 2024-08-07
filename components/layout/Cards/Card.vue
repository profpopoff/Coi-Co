<script setup lang="ts">
import type { CardData } from './types';

interface CardProps {
    card: CardData
}

const { card } = defineProps<CardProps>()
const { title, year } = card
</script>

<template>
    <article>
        <picture>
            <source srcset="https://source.unsplash.com/1600x400/?modern-interior">
        </picture>
        <footer>
            <ul role="list">
                <li>{{ year }}</li>
                <li></li>
                <li></li>
            </ul>
            <h3>{{ title }}</h3>
        </footer>
    </article>
</template>