<script setup lang="ts">
import type { CardData } from './types';

interface CardListProps {
    title?: string
    data: CardData[]
}

defineProps<CardListProps>()
</script>

<template>
    <section>
        <h2 v-if="title">{{ title }}</h2>
        <div class="cards">
            <Card v-for="card in data" :key="card.id" :card />
        </div>
    </section>
</template>

<style scoped>
h2 {
    font-weight: 300;
    padding-bottom: var(--main-padding);
}

.cards {
    display: grid;
    gap: var(--main-padding);
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
}
</style>