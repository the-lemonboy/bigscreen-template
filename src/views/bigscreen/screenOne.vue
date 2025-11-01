<template>
  <div>
    <div class="absolute left-[24px] top-[10.81vh]">
      <div class="relative">
        <!-- 遮罩 -->
        <div
          class="absolute left-0 top-0 h-[88.13vh] w-[400px] bg-gradient-to-r from-[rgba(56,56,56,0.9)] to-[rgba(56,56,56,0.3)]"
        >
        </div>
        <!-- 外层边框 -->
        <img
          class="absolute left-0 top-[1.93vh] h-[86.13vh] w-[443px] object-fill"
          src="../../assets/images/border/big-border.png"
        />
        <div class="flex h-[86.22vh] w-[400px] justify-center">
          <div class="absolute left-0 top-[1.93vh] z-20 ml-2 w-[96%]">
            <sideLeftOne></sideLeftOne>
          </div>
          <div class="absolute left-0 top-[48.44vh] ml-2 w-[96%]">
            <sideLeftTwo></sideLeftTwo>
          </div>
        </div>
      </div>
    </div>
    <transition name="screen-right">
      <div v-if="screenStateStore.screenState.screen1" class="relative top-[10px]">
        <div
          class="absolute right-[24px] top-[10.07vh] h-[87.8vh] w-[443px] bg-gradient-to-l from-[rgba(56,56,56,0.9)] to-[rgba(56,56,56,0.3)]"
        >
        </div>
        <!-- <div class="absolute right-[24px] top-[10.04vh]">
          <sideRightOne></sideRightOne>
        </div>
        <div class="absolute right-[24px] top-[55vh]">
          <sideRightTwo></sideRightTwo>
        </div> -->
      </div>
    </transition>
  </div>
</template>
<script setup>
import { useScreenStateStore } from '@/store/modules/bigscreenState';

import sideLeftOne from './sideLeftOne/index.vue';
import sideLeftTwo from './sideLeftTwo/index.vue';
import sideRightOne from './sideRightOne/index.vue';
import sideRightTwo from './sideRightTwo/index.vue';
// 切换屏幕
const screenStateStore = useScreenStateStore();
</script>
<style scoped></style>
