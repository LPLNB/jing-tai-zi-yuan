import { defineStore } from "pinia";

export const userInfoStore = defineStore({
    id: "ceshi",
    state: ()=>({
        userBasicInfo: {
            ceshi: 123
        }
    }),
    actions: {
        xiugaineirong() {
            this.userBasicInfo.ceshi = 345
        }
    }
})
