<template>
  <div class="couple">
    <Waterfall backgroundColor="transparent" :breakpoints="breakpoints" :list="imageList">
      <template #default="{ item, index }">
        <div class="card" @click="previewImg(item)">
          <LazyImg :url="item.url" />
          <p class="text"></p>
        </div>
      </template>
    </Waterfall>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { LazyImg, Waterfall } from 'vue-waterfall-plugin-next'
import { showImagePreview } from 'vant';
import 'vue-waterfall-plugin-next/dist/style.css'

// 瀑布流宽度响应式宽度设置
const breakpoints = {
  320: { rowPerView: 1 },
  480: { rowPerView: 2 },
  768: { rowPerView: 3 },
  1024: { rowPerView: 4 },
  1280: { rowPerView: 5 },
}
const imageList = ref([]);


const previewImg = (item) => {
  const url = item?.url;
  showImagePreview([url])
}

onMounted(() => {

  imageList.value = [
    { url: "/.netlify/functions/proxy?url=https://s21.ax1x.com/2025/02/28/pE8mOKK.png" },
    { url: "/.netlify/functions/proxy?url=https://s21.ax1x.com/2025/02/28/pE8mIUJ.png" },
    { url: "/.netlify/functions/proxy?url=https://s21.ax1x.com/2025/02/28/pE8mgg0.png" },
    { url: "/.netlify/functions/proxy?url=https://s21.ax1x.com/2025/02/28/pE8nKGn.png" },
    { url: "/.netlify/functions/proxy?url=https://s21.ax1x.com/2025/02/28/pE8nEqS.png" },
    { url: "/.netlify/functions/proxy?url=https://s21.ax1x.com/2025/02/28/pE8nP2t.png" },
    { url: "/.netlify/functions/proxy?url=https://s21.ax1x.com/2025/02/28/pE8mzUH.png" },
  ]
})
</script>

<style scoped lang="less"></style>