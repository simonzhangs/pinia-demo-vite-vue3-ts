import { defineStore } from "pinia";

export const anotherStore = defineStore('anotherStore',{
    state:()=>{
        return{
            songsList:['love story','lover','All to well']
        }
    },
    getters:{},
    actions:{}
})