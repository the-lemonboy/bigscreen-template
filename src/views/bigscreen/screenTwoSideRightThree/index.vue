<template>
  <div>
    <div class="relative">
      <img class="z-10 mx-auto w-[400px]" src="../../../assets/images/border/title-border-two.svg" alt="header" />
      <span class="text-normal absolute left-[30px] top-1/2 -translate-y-1/2 text-[1.85vh] text-[#75F8FF]">
        成果历史
      </span>
    </div>
    <div style="color: white; margin: 10px">
      横沙岛位于上海长江口的最东端，是三座岛屿中最娇小的一座，功能定位是“休闲度假岛”，主要开发国际会务会展中心、国际娱乐中心、低密度高档住宅别墅区、游艇俱乐部等项目。1992年横沙岛被国务院列为首批13个国家级旅游度假村之一。<br />
      横沙岛原属川沙县，1958年划归宝山县（今宝山区），系长江泥沙冲积而成。因岛上有刘晓居住，故名。清咸丰年间（1851一1861）始成沙洲，光绪十二年（1886年）开始围垦。横沙岛呈三角形，面积49平方公里。横沙岛地势平坦，河渠纵横。农业发达，淡水养殖业和海洋捕捞业亦著。横沙乡设有24个行政村，1个居委会，246个村民小组。其中，渔业村1个。总人口3.3万人。乡政府所在地为新民镇。1992年，横沙岛被国务院列为国家级旅游度假区。2002年3月，上海市人民政府正式批准将横沙岛建设成为上海国际大都市的森林生态岛，规划全岛森林覆盖率70%，预计横沙森林生态岛初期，每年吸引游客160万人次。
      经上海市人民政府报请国务院批准，原属上海市宝山区的长兴、横沙两个乡行政区划，自2005年5月18日起成建制划入崇明县（今崇明区）。<br />
      为开发长江口崇明、长兴、横沙三岛，规划修建由桥隧组成的长江口越江工程，设想为东西两条线，西线跨海工程，作为沿海南北交通大走廊，计划2010年完成；东线跨海工程。开发崇明三岛，并与浦东新区联接，建设大上海经济区，计划2020年完成，预计投资200亿元。
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';

import { useScreenStateStore } from '@/store/modules/bigscreenState';

// import { shipNameDictionnary } from './shipDictionary';

const screenStateStore = useScreenStateStore();
const data = ref([]);
function paraseData(rawString) {
  const jsonMatch = rawString.match(/func\((.*)\)/);
  const parsed = JSON.parse(jsonMatch[1]); // 解析 JSON
  const { data } = parsed; // 获取 data 数组
  return data;
}
const classOptions = {
  step: 0.2,
  limitMoveNum: 6,
};
</script>
<style scoped lang="scss">
.scroll-wrap {
  height: 49.63vh !important;
  overflow: hidden !important;
  width: 443px !important;
  margin-top: 20px;
}
</style>
