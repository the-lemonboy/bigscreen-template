<template>
  <div class="relative">
    <div class="relative">
      <img class="z-10" src="../../../assets/images/border/title-border-two.svg" alt="header" />
      <span class="text-normal absolute left-4 top-1/2 -translate-y-1/2 text-[1.85vh] text-[#75F8FF]">XXXX</span>
    </div>
    <!-- <vue3ScrollSeamless class="scroll-wrap" :class-options="classOptions" :data-list="tableData"> -->
    <ul class="mt-[0.93vh]"> </ul>
    <!-- </vue3ScrollSeamless> -->
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

import { useScreenStateStore } from '@/store/modules/bigscreenState';

const screenStateStore = useScreenStateStore();
const tableData = ref([
  {
    id: 0,
    name: '陆域表层沉积物',
    holeCount: 0,
    actualCount: 0,
    precent: 0,
  },
  {
    id: 1,
    name: '海域表层沉积物',
    holeCount: 0,
    actualCount: 0,
    precent: 0,
  },
  {
    id: 2,
    name: '浅表层沉积物',
    holeCount: 0,
    actualCount: 0,
    precent: 0,
  },
  {
    id: 3,
    name: '海砂调查孔',
    holeCount: 0,
    actualCount: 0,
    precent: 0,
  },
  {
    id: 4,
    name: '工程地质孔',
    holeCount: 0,
    actualCount: 0,
    precent: 0,
  },
  {
    id: 5,
    name: '物探勘测',
    holeCount: 0,
    actualCount: 0,
    precent: 0,
  },
]);
function initData() {
  return new Promise((resolve) => {
    [].forEach((project) => {
      switch (project.ItemName) {
        case '陆域表层沉积物':
          tableData.value[0].holeCount = project.PlanWorkLoad ?? 0;
          tableData.value[0].actualCount = 800;
          tableData.value[0].precent = project.PlanWorkLoad
            ? (tableData.value[0].actualCount / tableData.value[0].holeCount) * 100
            : 0;
          break;
        case '综合断面表层取样':
          tableData.value[1].holeCount = 370;
          tableData.value[1].actualCount = 0;
          tableData.value[1].precent = project.PlanWorkLoad
            ? (tableData.value[1].actualCount / tableData.value[1].holeCount) * 100
            : 0;
          break;
        case '浅层地下水监测井成井':
          tableData.value[2].holeCount = 500;
          tableData.value[2].actualCount = 303;
          tableData.value[2].precent = project.PlanWorkLoad
            ? (tableData.value[2].actualCount / tableData.value[2].holeCount) * 100
            : 0;
          break;
        case '海沙地质钻探':
          tableData.value[3].holeCount = project.PlanWorkLoad ?? 0;
          tableData.value[3].actualCount = project.CompleteWorkLoad ?? 0;
          tableData.value[3].precent = (tableData.value[3].actualCount / tableData.value[3].holeCount) * 100;
          break;
        case '工程地质钻探':
          tableData.value[4].holeCount = project.PlanWorkLoad ?? 0;
          tableData.value[4].actualCount = project.CompleteWorkLoad ?? 0;
          tableData.value[4].precent = project.PlanWorkLoad
            ? (tableData.value[4].actualCount / tableData.value[4].holeCount) * 100
            : 0;
          break;
        case '物探勘测':
          tableData.value[5].holeCount = 108;
          tableData.value[5].actualCount = 23;
          tableData.value[5].precent = project.PlanWorkLoad
            ? (tableData.value[5].actualCount / tableData.value[5].holeCount) * 100
            : 0;
          break;
        default:
          break;
      }
    });
    tableData.value.sort((a, b) => {
      return b.precent - a.precent;
    });
    resolve();
  });
}

onMounted(async () => {
  await initData();
});
</script>

<style lang="scss" scoped>
.scroll-wrap {
  height: 300px;
  overflow: hidden;
  margin-top: 20px;
}
</style>
