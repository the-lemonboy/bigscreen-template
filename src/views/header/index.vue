<template>
  <div class="relative">
    <img class="z-10 h-[10.65vh] w-screen" src="../../assets/images/border/header.png" alt="header" />
    <div class="absolute inset-0 left-4 flex items-center">
      <p class="header-title"> XXXXXX大屏 </p>
    </div>
    <div class="absolute right-[0.83vw] top-1/2 flex -translate-y-1/3 items-center">
      <div class="flex flex-col items-center justify-center">
        <span class="text-[2.41vh] font-bold tracking-[0.24vh] text-[#1FF4FF]">{{ curTime }}</span>
        <div>
          <span class="mr-[0.52vw] text-[1.3vh] font-normal text-[#1FF4FF]">{{ curDate }}</span>
          <span class="text-[1.3vh] font-normal text-[#1FF4FF]">{{ curWeek }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import dayjs from 'dayjs';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const curDate = ref(null);
const curWeek = ref(null);
const curTime = ref(null);
let timerId = null;
function getTimer() {
  timerId = setInterval(() => {
    curDate.value = dayjs().format('YYYY-MM-DD');
    // 中文星期
    const week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    curWeek.value = week[dayjs().day()];
    curTime.value = dayjs().format('HH:mm:ss');
  }, 1000);
}
onMounted(() => {
  getTimer();
});

onBeforeUnmount(() => {
  clearInterval(timerId); // 在组件卸载前清除定时器
});
</script>

<style lang="scss" scoped>
.header-title {
  color: #fff;
  text-align: center;
  text-shadow:
    6px 7px 4.4px rgba(10, 41, 42, 0.97),
    2px 7px 29.5px rgba(80, 229, 237, 0.86);
  -webkit-text-stroke-width: 0.4000000059604645;
  -webkit-text-stroke-color: #045a5e;
  font-size: 5.19vh;
  font-style: normal;
  font-weight: 800;
  letter-spacing: 0.93vw;
  font-style: italic;
  font-family: aliPuHui;
  margin: 0.93vh 0 0 2.08vw;
}

.btn-text {
  font-style: italic;
  font-size: 2.04vh;
  color: #55f5fd;
  font-size: 1.85vh;
  font-weight: 400;
  text-shadow:
    2px 2px 14.2px rgba(80, 229, 237, 0.38),
    8px 6px 1.3px rgba(0, 0, 0, 0.22);
}
</style>
