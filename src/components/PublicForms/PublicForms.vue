<template>
	<div class="PublicForms w100">
		<a-form :model="formAllData['formData']" :rules="formAllData['formRules']">
			<template v-for="(item,index) in formAllData['formList']" :key="index">
				<a-form-item :label="item['label']" :name="item['name']">
					<a-input v-model:value="formAllData['formData'][formAllData['formList'][index]['name']]" />
				</a-form-item>
			</template>
		</a-form>
	</div>
</template>

<script setup name="PublicForms">
import {ref, watch} from "vue";

const props = defineProps({
	data: {
		type: Object,
		default: ()=>{
			return {
				formData: {},
				formList: [],
				formRules: {},
				formConfig: {}
			}
		}
	}
})

const formAllData = ref({})

watch(()=>props.data, (val)=>{
	if(val) {
		formAllData.value = { ...formAllData.value, ...val }
	}
}, { immediate: true, deep: true })

</script>

<style scoped lang="scss">

</style>
