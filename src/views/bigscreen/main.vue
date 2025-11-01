<template>
  <div id="main-box" class="bg-[rgb(44, 71, 75)] h-screen w-screen overflow-hidden bg-cover bg-fixed bg-center">
    <div class="absolute left-0 top-0 h-full w-full">
      <centerContent></centerContent>
    </div>
    <!-- 遮罩 -->
    <div
      class="z-1 absolute left-0 top-0 h-[13.52vh] w-full bg-gradient-to-b from-[rgba(56,56,56,0.9)] to-[rgba(56,56,56,0)]"
    >
    </div>
    <div class="absolute left-0 top-[-20px] z-50">
      <headerZone></headerZone>
    </div>
    <screenTwo></screenTwo>
    <screenOne></screenOne>
    <screenThree></screenThree>
  </div>
</template>
<script setup>
import centerContent from './centerContent/index.vue';
import headerZone from './header/index.vue';
import screenOne from './screenOne.vue';
import screenThree from './screenThree.vue';
import screenTwo from './screenTwo.vue';
</script>
<style scoped>
#main-box {
  height: 100vh;
  width: 100vw;
}
</style>
