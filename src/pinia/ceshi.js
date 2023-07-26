import { defineStore } from 'pinia'

export const ceshiStore = defineStore('main', {
    state: ()=> ({
        ceshi: 123
    }),
    actions: {
        change() {
            this.ceshi = ++this.ceshi
        }
    }
})
