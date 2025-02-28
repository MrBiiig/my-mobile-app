<template>
  <div class="gallery">
    <h1>Gallery</h1>
    <div v-for="(item, index) in items" :key="index" class="item">
      <img v-if="item.type === 'image'" :src="item.src" alt="Gallery Image" />
      <video-player v-else :options="item.options" class="video-player-box" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import videoPlayer from "vue-video-player";
import "video.js/dist/video-js.css";

const items = ref([
  { type: "image", src: "/path/to/image1.jpg" },
  {
    type: "video",
    options: { sources: [{ src: "/path/to/video1.mp4", type: "video/mp4" }] },
  },
  { type: "image", src: "/path/to/image2.jpg" },
  {
    type: "video",
    options: { sources: [{ src: "/path/to/video2.mp4", type: "video/mp4" }] },
  },
]);
</script>

<style scoped lang="less">
.gallery {
  padding: 20px;
}

.item {
  margin-bottom: 20px;
}

img {
  max-width: 100%;
  height: auto;
}

.video-player-box {
  width: 100%;
}
</style>
