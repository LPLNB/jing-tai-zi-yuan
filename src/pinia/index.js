import { createPinia } from "pinia";
const pinia = createPinia()

import { userInfoStore } from './modules/user.js'


export default {
    userInfoStore: userInfoStore()
}
