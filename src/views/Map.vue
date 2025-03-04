<template>
	<div id="MapContainer" style="width: 100%; height: 100%;"></div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
const location = [36.783954, 121.205125]

const mapInstance = ref()

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
})
</script>
<style scoped lang="less"></style>