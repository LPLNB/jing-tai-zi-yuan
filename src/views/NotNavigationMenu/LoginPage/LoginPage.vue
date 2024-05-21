<template>
	<div class="LoginPage whv100">
		<div class="login-region">
			<div class="enter-region">
				<!--<template v-for="(item,index) in "></template>-->
				<!--<a-input v-model:value="value" placeholder="Basic usage" />-->
				<!--<a-input v-model:value.lazy="value1" autofocus placeholder="Lazy usage" />-->
			</div>
			<div class="btn-region"></div>
		</div>
	</div>
</template>

<script setup name="LoginPage">
import LoginPage from './config/LoginPage.json'
import {reactive} from "vue";
import {deepCopy} from "@/utils/GlobalApproach.js";
import pinia from '@/pinia'

const allData = reactive(deepCopy(LoginPage))
console.log(pinia.userInfoStore.userBasicInfo)
console.log(import.meta.env)
</script>

<style scoped lang="scss">
.LoginPage {
	background-image: url("@/assets/PublicImages/keqing1.jpg");
	background-repeat: no-repeat;
	background-size: 100% 100%;
}
</style>
