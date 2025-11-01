<template>
  <div>
    <transition name="screen-right">
      <div v-if="screenStateStore.screenState.screen3" key="2" class="relative top-[100px]">
        <!-- <div
          class="absolute right-[24px] top-[0px] h-[89.22vh] w-[443px] bg-gradient-to-l from-[rgba(56,56,56,0.9)] to-[rgba(56,56,56,0.3)]"
        >
        </div>
        <div class="absolute right-[24px] top-[6.48vh] h-[82.22vh] w-[443px]">
          <img class="h-[82.22vh] w-[443px]" src="../../assets/images/border/big-border.png" />
        </div>
        <div class="absolute right-[24px] top-[1.41vh] w-[443px]">
          <sideRightThree></sideRightThree>
        </div> -->
      </div>
    </transition>
  </div>
</template>
<script setup>
import { useScreenStateStore } from '@/store/modules/bigscreenState';

import sideRightThree from './screenTwoSideRightThree/index.vue';

const screenStateStore = useScreenStateStore();
</script>
<style scoped lang="scss"></style>
