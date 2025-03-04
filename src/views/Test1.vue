<template>
	五彩
</template>
<script setup>
import { ref, onMounted } from 'vue'
import confetti from 'canvas-confetti'


const start = () => {
	var end = Date.now() + (10 * 1000);

	var colors = ['#FF0000', '#FFD700', '#0000FF', '#00FF00', '#800080', '#FFA500', '#FFC0CB', '#C0C0C0'];

	(function frame() {
		confetti({
			particleCount: 2,
			angle: 60,
			spread: 55,
			origin: {
				x: 0
			},
			colors: colors
		});
		confetti({
			particleCount: 2,
			angle: 120,
			spread: 55,
			origin: {
				x: 1
			},
			colors: colors
		});

		if (Date.now() < end) {
			requestAnimationFrame(frame);
		}
	}());
}

onMounted(() => {
	start();
})
</script>
<style scoped lang="less"></style>