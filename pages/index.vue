<script setup lang="ts">
import { Data } from '~/components/layout/Cards/mockData';
</script>

<template>
    <h1>home page</h1>
    <CardList title="Recomended" :data="Data" />
</template>