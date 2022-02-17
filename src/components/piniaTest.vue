<template>
    <h2>{{store.data}}</h2>
    <h2>count:{{store.count}}</h2>
    <hr>
    <h2>{{data}}</h2>
    <h2>count:{{count}}</h2>
    <hr>
    <h2>{{wordToUpper}}</h2>
    <h2>{{wordToUpper}}</h2>
</template>
<script lang="ts" setup>
import { myStore } from '../store/index.'
import { storeToRefs } from 'pinia';

const store = myStore()

const {data,count,wordToUpper} = storeToRefs(store)
</script>
<style scoped>
</style>