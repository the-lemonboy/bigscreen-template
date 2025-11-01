<template>
  <div class="relative">
    <div class="relative">
      <img class="z-10" src="../../../assets/images/border/title-border.svg" alt="header" />
      <span class="text-normal absolute left-8 top-1/2 -translate-y-1/2 text-[1.85vh] text-[#75F8FF]">
        陆域调查现场
      </span>
    </div>
    <div>
      <img class="absolute top-[1.85vh] h-[41.04vh] w-[443px]" src="../../../assets/images/border/right-border.png" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const imgUrl = ref(new URL('../../../assets/images/border/right-border-mini.svg', import.meta.url).href);
function responsiveSize() {
  if (window.innerHeight < 1080) {
    imgUrl.value = new URL('../../../assets/images/border/right-border-mini.svg', import.meta.url).href;
  } else {
    imgUrl.value = new URL('../../../assets/images/border/right-border.svg', import.meta.url).href;
  }
}
const scrollWrap = ref(null);
const data = ref([]);

onMounted(() => {
  window.addEventListener('load', responsiveSize());
  window.addEventListener('resize', responsiveSize());
});
</script>

<style lang="scss" scoped>
.scroll-wrap {
  height: 33.63vh !important;
  overflow: hidde !important;
  margin-top: 20px;
}
:deep(.ant-image) {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  width: 72px;
  height: 4vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
:deep(.ant-image-img) {
  width: 100%;
  height: 100%;
}
</style>
