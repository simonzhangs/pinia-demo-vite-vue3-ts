import { defineStore } from "pinia"
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
            console.log('wordToUpper被调用了！')
            return state.word.toLocaleUpperCase()
        }
    },
    actions:{
        changeState(){
            this.count++
            this.data = 'Hello Actions'
        },
        getSongList(){
            console.log(anotherStore().songsList)
        }
    }
})