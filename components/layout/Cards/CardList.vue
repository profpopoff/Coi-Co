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
.cards {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}
</style>