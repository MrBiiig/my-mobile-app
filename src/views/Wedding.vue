<template>
  <div class="wedding">
    <h2>婚期倒计时</h2>
    <van-count-down millisecond :time="time">
      <template #default="timeData">
        <span class="block">{{ timeData.days }}</span>
        <span class="colon"> 天</span>
        <span class="block">{{ timeData.hours }}</span>
        <span class="colon"> 小时</span>
        <span class="block">{{ timeData.minutes }}</span>
        <span class="colon"> 分钟</span>
        <span class="block">{{ timeData.seconds }}</span>
        <span class="colon"> 秒</span>
        <span class="block">{{ timeData.milliseconds }}</span>
      </template>
    </van-count-down>

    <van-calendar ref="calendarRef" :default-date="weddingTime" readonly :poppable="false" :show-confirm="false"
      :style="{ height: '500px' }">
      <template #title>
      </template>
    </van-calendar>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const time = ref(0);
const weddingTime = new Date("2025/05/03 00:00:00");
const calendarRef = ref(null)

onMounted(() => {
  time.value = weddingTime.getTime() - new Date().getTime();
})


</script>

<style scoped lang="less"></style>
