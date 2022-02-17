// Pinia优点：
// 1.更加简洁的语法;
// 2.完美支持Vue3的Composition api;
// 3.对 TypeScript 的完美支持。

// 创建store状态管理库：
// 1. 定义状态容器
// 2. 修改容器中的state
// 3. 容器中getters和actions的使用

import { defineStore } from "pinia"
//store间的相互调用
import { anotherStore } from '../store/another';

export const myStore = defineStore('myStore',{
    state:()=>{
        return{
            data:'Hello Pinia!',
            count:0,
            word:'Lowcase'
        }
    },
    getters:{
        wordToUpper(state){
            //验证getters的缓存特性
            console.log('wordToUpper被调用了！')
            return state.word.toLocaleUpperCase()
        },
        //也可以用this，不传递state
        // wordToUpper1:String(){
        //     return this.word.toLocaleUpperCase()
        // }
    },
    //4.直接在acitons中写好逻辑，再调用actions
    actions:{
        //普通函数，最好不用箭头函数
        changeState(){
            this.count++
            this.data = 'Hello Actions'
        },
        getSongList(){
            console.log(anotherStore().songsList)
        }
    }
})