<template>
	<div class="LoginPage whv100">
		<div class="background-video wh100 dfc">
			<!--<video class="wh100 dfc" muted autoplay src="@/assets/PublicVideos/keqingzatan.mp4"></video>-->
			<video class="wh100 dfc" muted autoplay src=""></video>
		</div>
		<div class="login-region wh100 dfc">
			<div class="region-box w-500 p-24 bor-20">
				<div class="enter-region">
					<template v-for="(item,index) in allData['enterData']" :key="index">
						<div class="enter-box df flr jc-fs alc">
							<div class="title df flr jc-fe alc w-100">
								<p>{{ item.title }}：</p>
							</div>
							<a-input v-model:value="item.value" allowClear :placeholder="item['pla']" v-if="item['type'] === 'input'" />
							<a-input-password  v-model:value="item.value" allowClear :placeholder="item['pla']" v-else-if="item['type'] === 'pass'" />
						</div>
					</template>
				</div>
				<a-button type="primary" class="w100 h-40 m-t-20 fs-20" @click="LoginCon">登录</a-button>
			</div>
		</div>
	</div>
</template>

<script setup name="LoginPage">
import LoginPage from './config/LoginPage.json'
import {reactive, ref} from "vue";
import {deepCopy} from "@/utils/GlobalApproach.js";

const allData = reactive(deepCopy(LoginPage))

// 登录内容
async function LoginCon() {

}


</script>

<style scoped lang="scss">
.LoginPage {
	.background-video {
		background-color: #000000;
		video {
			object-fit: fill;
		}
	}
	.login-region {
		position: fixed;
		top: 0;
		left: 0;
		.region-box {
			background-color: #ffffff;
			.enter-region {
				.enter-box {
					margin-bottom: 20px;
				}
				.enter-box:last-child {
					margin-bottom: 0;
				}
			}
		}
	}
}
</style>
