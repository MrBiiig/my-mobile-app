<template>
	<div class="container">
		<van-nav-bar v-if="!hideTop">
			<template #title>
				<span>{{ title }}</span>
			</template>
		</van-nav-bar>
		<div class="content">
			<keep-alive v-if="route.meta.keepAlive">
				<router-view />
			</keep-alive>
			<router-view v-else />
		</div>
		<van-tabbar v-model="tabbarActive" v-if="!hideBottom" @change="handleChange">
			<van-tabbar-item v-for="item in tabbarItems" :name="item.name" :icon="item.icon">
				{{ item.title }}
			</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";


const tabbarItems = [
	{
		name: "couple",
		icon: "smile",
		title: "两人"
	},
	{
		name: "dog",
		icon: "bell",
		title: "一狗"
	},
	{
		name: "wedding",
		icon: "like",
		title: "婚礼"
	}
]

const router = useRouter();
const route = useRoute();

const hideTop = computed(() => route.meta?.hideTop);
const hideBottom = computed(() => route.meta?.hideBottom);
const title = computed(() => route.meta?.title);

const tabbarActive = ref("couple");

onMounted(() => {
	tabbarActive.value = route.name;
});

const handleChange = (name) => {
	router.push({ name });
}

</script>

<style scoped lang="less">
.container {
	height: 100%;

	.content {
		height: calc(100% - 46px);
		box-sizing: border-box;
		padding-bottom: 50px;
		overflow-y: auto;
	}

	:deep(.van-nav-bar) {
		background-color: #fff9e6;
		box-shadow: 0 0 0 1px #ffdab9;

		.van-nav-bar__title {
			color: #8c7a5b;
		}
	}

	:deep(.van-tabbar) {
		background-color: #fff9e6;
		border-top: 1px solid #ffdab9;

		.van-tabbar-item {
			color: #8c7a5b;
		}

		.van-tabbar-item.van-tabbar-item--active {
			box-shadow: 0 0 0 1px #FFE4C4;
			background-color: #FFE4C4;
			color: #5C4A3B;
		}
	}

}
</style>
