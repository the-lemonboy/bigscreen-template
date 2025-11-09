<template>
  <div>
    <div class="absolute left-[24px] ph-top-[120]">
      <div class="relative bg-gradient-to-r from-[rgba(56,56,56,0.9)] to-[rgba(56,56,56,0.3)] ph-h-[940]">
        <!-- 外层边框 -->
        <img class="absolute left-0 top-0 h-full w-[443px] object-fill" src="../assets/images/border/big-border.png" />
        <div class="flex w-[400px] justify-center">
          <div class="absolute left-0 z-20 w-full ph-top-[20]">
            <sideLeftOne></sideLeftOne>
          </div>
          <div class="absolute left-0 w-full ph-top-[500]">
            <sideLeftTwo></sideLeftTwo>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute right-[24px] ph-top-[120]">
      <sideRightOne></sideRightOne>
    </div>
    <div class="absolute right-[24px] ph-top-[600]">
      <sideRightTwo></sideRightTwo>
    </div>
  </div>
</template>
<script setup>
import sideLeftOne from './sideLeftOne/index.vue';
import sideLeftTwo from './sideLeftTwo/index.vue';
import sideRightOne from './sideRightOne/index.vue';
import sideRightTwo from './sideRightTwo/index.vue';
</script>
<style scoped></style>
