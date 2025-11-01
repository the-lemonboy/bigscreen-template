<template>
  <div>
    <div>
      <buttonBorder
        v-for="(value, key) in btnMap"
        :key="key"
        class="relative mb-10"
        :url="getImageUrl(key)"
        @click="handleClick(key)"
        ><span
          class="absolute left-1/2 mt-1 -translate-x-1/2 text-nowrap text-[14px] text-[#1FC6FF]"
          :style="value.show ? 'color:rgb(255, 230, 121)' : 'color: rgb(137, 231, 255)'"
          >{{ value.name }}</span
        ></buttonBorder
      >
    </div>
    <!-- popup -->
    <div v-show="showPopup" class="fixed bottom-[50px] left-1/2 -translate-x-1/2">
      <div class="relative">
        <img class="h-full w-full" src="../../../assets/images/tool/popup.svg" />
        <img
          class="absolute right-[-20px] top-[-20px] cursor-pointer"
          src="../../../assets/images/tool/close.svg"
          @click="showPopup = false"
        />
        <span class="text-bold absolute left-8 top-[40px] text-[20px] text-white">{{ popupValue.title }}</span>
        <ul class="absolute left-8 top-[80px]">
          <li
            ><span class="mr-5 text-[14px] text-[#6c6c6c]">影像时间</span
            ><span class="text-[14px] text-white">2022-11-11</span></li
          >
          <li
            ><span class="mr-5 text-[14px] text-[#6c6c6c]">影像精度</span
            ><span class="text-[14px] text-white">0.5m</span></li
          >
          <li
            ><span class="mr-5 text-[14px] text-[#6c6c6c]">拍摄卫星</span
            ><span class="text-[14px] text-white">CN48493</span></li
          >
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, defineEmits, ref } from 'vue';

import buttonBorder from '@/components/buttonBorder/index.vue';

const emit = defineEmits(['handleClick']);
const showPopup = ref(false);
const popupValue = reactive({
  title: '无人机多光谱影像',
  content1: '',
});
// 按钮配置表
const btnMap = reactive({
  jcdl: {
    url: 'btn1.svg',
    selectUrl: 'btn1-select.svg',
    name: '无人机多光谱',
    show: false,
  },
  ygyx: {
    url: 'btn2.svg',
    selectUrl: 'btn2-select.svg',
    name: '卫星多光谱',
    show: false,
  },
  cyjc: {
    url: 'btn3.svg',
    selectUrl: 'btn3-select.svg',
    name: '卫星高分',
    show: false,
  },
  fysj: {
    url: 'btn4.svg',
    selectUrl: 'btn4-select.svg',
    name: '雷达卫星',
    show: false,
  },
  tdly: {
    url: 'btn5.svg',
    selectUrl: 'btn5-select.svg',
    name: '土地利用',
    show: false,
  },
});

// 动态生成图片路径
const getImageUrl = (key) => {
  const item = btnMap[key];
  const path = item.show ? item.selectUrl : item.url;
  return new URL(`../../../assets/images/screenTwoBtn/${path}`, import.meta.url).href;
};

// 点击处理函数
const handleClick = (key) => {
  btnMap[key].show = !btnMap[key].show;
  popupValue.title = btnMap[key].name;
  showPopup.value = btnMap[key].show;
  emit('handleClick', key);
};
</script>
