<template>
	<div id="MapContainer" style="width: 100%; height: 100%;"></div>
	<div>{{ "你当前的 纬度：" + latitude + ", 经度：" + longitude }}</div>
	<div>{{ showError }}</div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
const location = [36.783954, 121.205125]

const mapInstance = ref()

const latitude = ref(0);
const longitude = ref(0);
const showError = ref();

onMounted(async () => {


	mapInstance.value = new TMap.Map("MapContainer", {
		minZoom: 8,
		maxZoom: 22,
		baseMap: [
			// { type: "vector" },
			{ type: "satellite" },
		],
		// showControl: false,
		pitch: 0,
		zoom: 16,
		center: new TMap.LatLng(...location),
	});
	mapInstance.value.removeControl(TMap.constants.DEFAULT_CONTROL_ID.ZOOM);


	const marker = new TMap.MultiMarker({
		id: "marker-layer", //图层id
		map: mapInstance.value,
		styles: { //点标注的相关样式
			"marker11": new TMap.MarkerStyle({
				"width": 24,// 24,
				"height": 36,
				"anchor": { x: 12, y: 36 },
				color: "#ffffff",
				backgroundWidth: 200,
				backgroundHeight: 28,
				direction: "top",
				size: 18,
				strokeColor: "#000000",
				backgroundColor: "#f24e4e",
				backgroundBorderRadius: 4
			})
		},
		geometries: [{ //点标注数据数组
			"id": "demo",
			"styleId": "marker11",
			wrapOptions: {},
			content: "婚礼地点：\n方圆大酒店",
			"position": new TMap.LatLng(...location),
			"properties": {
				title: "marker"
			},


		}]
	});



	// 测试

	wx.checkJsApi({
		jsApiList: ['getLocation'],
		success: function (res) {
			if (res.checkResult.getLocation) {
				// 已授权，可以直接调用getLocation
				wx.getLocation({
					type: "gcj02", // 默认为'gcj02'，可以使用'gcj02', 'wgs84'，'bd09ll'等
					success: function (res) {
						latitude.value = res.latitude; // 纬度，浮点数
						longitude.value = res.longitude; // 经度，浮点数
					},
					fail: function (error) {
						alert("获取位置失败：", error);
						showError.value = error
						console.error("获取位置失败：", error);
						// 处理错误情况，比如提示用户授权位置信息
					},
				});
			} else {
				alert("未授权")
				// 未授权，引导用户授权
				// 这里可以展示一个按钮或者弹窗提示用户授权
			}
		}
	});

})
</script>
<style scoped lang="less"></style>