import { ceshiStore } from './ceshi.js'

export default {
    setup() {
        const OneStore = ceshiStore()
        return {
            OneStore
        }
    }
}
