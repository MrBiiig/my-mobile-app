<template>
  <div class="dog">
    <Waterfall :breakpoints="breakpoints" :list="imageList">
      <template #default="{ item, index }">
        <div class="card">
          <LazyImg :url="item.url" @click="previewImg(item)" />
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
  const modules = import.meta.glob('/src/assets/imgs/dog/*.png');
  imageList.value = Object.keys(modules).map((key, index) => {
    return {
      url: key,
    };
  });
})
</script>

<style scoped lang="less"></style>