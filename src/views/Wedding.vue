<template>
  <div class="wedding">
    <van-cell-group>
      <van-cell size="large" label="婚期倒计时">
        <template #title>
          <div class="count-down-wrapper">
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
          </div>
        </template>
      </van-cell>
    </van-cell-group>


    <div class="calendar-wrapper">
      <van-calendar ref="calendarRef" :default-date="weddingTime" readonly :min-date="minDate" :max-date="maxDate"
        :poppable="false" :show-confirm="false">
        <template #title>
        </template>
      </van-calendar>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const time = ref(0);

const weddingTime = new Date("2025/05/03 00:00:00");

const minDate = new Date("2025/05/01 00:00:00");
const maxDate = new Date("2025/05/31 00:00:00");

const calendarRef = ref(null)

onMounted(() => {
  time.value = weddingTime.getTime() - new Date().getTime();
})


</script>

<style scoped lang="less">
.count-down-wrapper {
  // padding: 12px;

  .colon {
    display: inline-block;
    margin: 0 4px;
    // color: #1989fa;
  }

  .block {
    display: inline-block;
    text-align: center;
    font-size: 30px;
    // width: 22px;
    // color: #fff;
    // font-size: 12px;
    // background-color: #1989fa;
  }
}


.calendar-wrapper {
  padding: 12px;

  .van-calendar {
    box-shadow: 0 0 1px 1px #dddddd;
    padding: 4px;
    border-radius: 4px;
  }
}
</style>
