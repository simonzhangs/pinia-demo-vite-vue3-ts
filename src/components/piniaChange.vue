<template>
    <div><button @click="handleClick">点击count加1</button></div>
    <div><button @click="handleClickPatch">Patch点击count加2</button></div>
    <div><button @click="handleClickMethod">Method点击count加2</button></div>
    <div><button @click="store.changeState()">Action点击count加1</button></div>

    <div><button @click="handleClickToUpper">变成大写</button></div>

    <div><button @click="getList">getList</button></div>
    <div><button @click="store.getSongList">getList</button></div>


</template>
<script lang="ts" setup>
import { myStore } from '../store/index.'
const store = myStore()

const handleClick = ()=>{
    store.count++
}

const handleClickPatch = ()=>{
    store.$patch({
        count:store.count + 2,
        data: store.data === 'Hello Pinia!'?'Hello World':'Hello Pinia!'
    })
}

const handleClickMethod = ()=>{
    store.$patch((state)=>{
        state.count++;
        state.data === 'Hello Pinia!'?'Hello World':'Hello Pinia!'
    })
}

const handleClickToUpper = ()=>{
    store.word = 'pinia'
}

const  getList = ()=>{
    store.getSongList()
}
</script>
<style scoped>
</style>