<template>
  <div class="home">
    <van-button type="primary" @click="goToGallery">Go to Gallery</van-button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goToGallery = () => {
  router.push({ name: "Gallery" });
};
</script>

<style scoped lang="less">
.home {
  text-align: center;
  margin-top: 50px;
}
</style>
