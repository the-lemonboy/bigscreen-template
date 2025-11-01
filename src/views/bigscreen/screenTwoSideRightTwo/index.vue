<template>
  <div>
    <div class="relative">
      <img class="z-10 mx-auto w-[400px]" src="../../../assets/images/border/title-border-two.svg" alt="header" />
      <span class="text-normal absolute left-[30px] top-1/2 -translate-y-1/2 text-[1.85vh] text-[#75F8FF]">
        XXXX
      </span>
    </div>
    <div>
      <ul class="mt-[0.93vh]"> </ul>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

import { useScreenStateStore } from '@/store/modules/bigscreenState';

const screenStateStore = useScreenStateStore();
const data = ref([]);
</script>
<style scoped lang="scss">
.scroll-wrap {
  height: 49.63vh !important;
  overflow: hidden !important;
  width: 443px !important;
  margin-top: 20px;
}
</style>
