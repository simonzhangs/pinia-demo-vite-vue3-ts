<template>
    <div><button @click="handleClick">点击count加1</button></div>
    <div><button @click="handleClickPatch">Patch点击count加2</button></div>
    <div><button @click="handleClickMethod">Method点击count加2</button></div>
    <!-- 4.直接在acitons中写好逻辑，再调用actions -->
    <div><button @click="store.changeState()">Action点击count加1</button></div>

    <div><button @click="handleClickToUpper">变成大写</button></div>

    <div><button @click="getList">getList</button></div>
    <div><button @click="store.getSongList">getList</button></div>


</template>
<script lang="ts" setup>
import { myStore } from '../store/index.'
const store = myStore()

//1.通过对象读取方法
//适用于简单的业务逻辑数据改变
const handleClick = ()=>{
    store.count++
}

//2.通过$patch修改多条数据
//适用于多条数据同时更新状态,数据改变是经过优化的
const handleClickPatch = ()=>{
    store.$patch({
        count:store.count + 2,
        data: store.data === 'Hello Pinia!'?'Hello World':'Hello Pinia!'
    })
}

//3.通过$patch加函数
//传入参数state是$patch前面对应的状态库
//适用于复杂的业务逻辑
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