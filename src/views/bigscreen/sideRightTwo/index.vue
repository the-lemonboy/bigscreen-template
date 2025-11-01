<template>
  <div class="relative">
    <div class="relative">
      <img class="z-10" src="../../../assets/images/border/title-border.svg" alt="header" />
      <span class="text-normal absolute left-8 top-1/2 -translate-y-1/2 text-[1.85vh] text-[#75F8FF]"
        >海域调查现场
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
const data = ref([]);
const holeIDs = [
  '4b751396-03f2-4936-baf6-c265e06f9df8',
  'e1eb0890-2d31-4bac-96cf-f095c47300a6',
  'd94ef21b-e829-401a-b527-1495d4eeee45',
  'bdadd13a-a457-44ee-b460-25995390344e',
  'b8f7e8d4-4727-42c2-bb6b-9c936a3ef056',
];
onMounted(() => {
  window.addEventListener('load', responsiveSize());
  window.addEventListener('resize', responsiveSize());
});
</script>

<style lang="scss" scoped>
.scroll-wrap {
  height: 33.63vh !important;
  overflow: hidden !important;
  margin-top: 20px;
}
:deep(.ant-image) {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 50;
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
