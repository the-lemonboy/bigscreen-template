<template>
  <div class="flex">
    <buttonBorder class="relative mr-4" :url="btnImg('screen1')" @click="changeScreen('screen1')"
      ><span
        :style="screenStateStore.screenTwoBtnState.screen1 ? 'color: #FFFFFF; fontWeight: bold' : ''"
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-nowrap text-[16px] text-[#1FC6FF]"
        >卫星数据</span
      ></buttonBorder
    >
    <buttonBorder class="relative" :url="btnImg('screen2')" @click="changeScreen('screen2')"
      ><span
        :style="screenStateStore.screenTwoBtnState.screen2 ? 'color: #FFFFFF; fontWeight: bold' : ''"
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-nowrap text-[16px] text-[#1FC6FF]"
        >专题应用</span
      ></buttonBorder
    >
  </div>
</template>
<script setup>
import buttonBorder from '@/components/buttonBorder/index.vue';
import { useScreenStateStore } from '@/store/modules/bigscreenState';
// 切换大屏

const screenStateStore = useScreenStateStore();
function changeScreen(type) {
  screenStateStore.changeScreenTwoBtnState(type);
}

function btnImg(type) {
  if (screenStateStore.screenTwoBtnState[type]) {
    return new URL('../../../assets/images/header-button/btn-right-active.svg', import.meta.url).href;
  }
  return new URL('../../../assets/images/header-button/btn-right.svg', import.meta.url).href;
}
</script>
<style scoped></style>
