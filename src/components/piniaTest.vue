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

//直接解构得到store的数据并不是响应式数据，
//当count数据改变时，解构的数据并不会跟着发生变化
//需要在pinia引入`storeToRefs()`方法
const {data,count,wordToUpper} = storeToRefs(store)
</script>
<style scoped>
</style>