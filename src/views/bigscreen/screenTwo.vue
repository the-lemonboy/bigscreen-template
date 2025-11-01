<template>
  <div class="">
    <transition-group name="screen-right">
      <div v-if="screenStateStore.screenState.screen2" key="1" class="relative top-[100px]">
        <div
          class="absolute right-[24px] top-[0px] h-[89.22vh] w-[443px] bg-gradient-to-l from-[rgba(56,56,56,0.9)] to-[rgba(56,56,56,0.3)]"
        >
        </div>
        <!-- 外层边框 -->
        <div class="absolute right-[24px] top-[6.48vh] h-[82.22vh] w-[443px]">
          <img class="h-[82.22vh] w-[443px]" src="../../assets/images/border/big-border.png" />
        </div>
        <div class="absolute right-[24px] top-[2.78vh] w-[443px]">
          <sideRightOne></sideRightOne>
        </div>
        <div class="absolute right-[24px] top-[32.41vh] w-[443px]">
          <sideRightTwo></sideRightTwo>
        </div>
      </div>
    </transition-group>
  </div>
</template>
<script setup>
import { useScreenStateStore } from '@/store/modules/bigscreenState';

import sideRightOne from './screenTwoSideRightOne/index.vue';
import sideRightTwo from './screenTwoSideRightTwo/index.vue';
// 切换屏幕
const screenStateStore = useScreenStateStore();
</script>
<style scoped></style>
