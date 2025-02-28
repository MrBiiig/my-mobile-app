<template>
  <div class="couple">
    <Waterfall :breakpoints="breakpoints" :list="imageList">
      <template #default="{ item, index }">
        <div class="card" @click="previewImg(item)">
          <LazyImg :url="item.url" />
          <p class="text">{{ index }}</p>
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
    { url: "/.netlify/functions/proxy?url=https://s21.ax1x.com/2025/02/28/pE8mqv6.png" },
    { url: "/.netlify/functions/proxy?url=https://s21.ax1x.com/2025/02/28/pE8mbgx.png" },
    { url: "/.netlify/functions/proxy?url=https://s21.ax1x.com/2025/02/28/pE8mH81.png" },
    { url: "/.netlify/functions/proxy?url=https://s21.ax1x.com/2025/02/28/pE8m7CR.png" },
    { url: "/.netlify/functions/proxy?url=https://s21.ax1x.com/2025/02/28/pE8mIUJ.png" },
    { url: "/.netlify/functions/proxy?url=https://s21.ax1x.com/2025/02/28/pE8m5E4.png" },
    { url: "/.netlify/functions/proxy?url=https://s21.ax1x.com/2025/02/28/pE8mhbF.png" },
    { url: "/.netlify/functions/proxy?url=https://s21.ax1x.com/2025/02/28/pE8mfDU.png" },
    { url: "/.netlify/functions/proxy?url=https://s21.ax1x.com/2025/02/28/pE8mWuT.png" },
    { url: "/.netlify/functions/proxy?url=https://s21.ax1x.com/2025/02/28/pE8mgg0.png" },
    { url: "/.netlify/functions/proxy?url=https://s21.ax1x.com/2025/02/28/pE8nKGn.png" },
    { url: "/.netlify/functions/proxy?url=https://s21.ax1x.com/2025/02/28/pE8mc3q.png" },
    { url: "/.netlify/functions/proxy?url=https://s21.ax1x.com/2025/02/28/pE8m6Cn.png" },
    { url: "/.netlify/functions/proxy?url=https://s21.ax1x.com/2025/02/28/pE8ms4s.png" },
    { url: "/.netlify/functions/proxy?url=https://s21.ax1x.com/2025/02/28/pE8mrNj.png" },
    { url: "/.netlify/functions/proxy?url=https://s21.ax1x.com/2025/02/28/pE8nEqS.png" },
    { url: "/.netlify/functions/proxy?url=https://s21.ax1x.com/2025/02/28/pE8nP2t.png" },
    { url: "/.netlify/functions/proxy?url=https://s21.ax1x.com/2025/02/28/pE8nS5d.png" },
    { url: "/.netlify/functions/proxy?url=https://s21.ax1x.com/2025/02/28/pE8mzUH.png" },
    { url: "/.netlify/functions/proxy?url=https://s21.ax1x.com/2025/02/28/pE8mxVe.png" },
    { url: "/.netlify/functions/proxy?url=https://s21.ax1x.com/2025/02/28/pE8mjbD.png" },
    { url: "/.netlify/functions/proxy?url=https://s21.ax1x.com/2025/02/28/pE8mXDO.png" },
  ]
})
</script>

<style scoped lang="less"></style>