<template>
  <div class="relative w-[443px]">
    <div class="relative w-full ph-h-[40]">
      <span class="text-normal absolute left-8 top-1/2 -translate-y-1/2 text-[#75F8FF] ph-text-[18]">XXXX </span>
      <!-- 父容器高度可变 -->
      <img class="h-full w-full" src="../../assets/images/border/title-border.png" alt="header" />
    </div>

    <div
      ref="chartContainerRef"
      class="relative w-full bg-gradient-to-l from-[rgba(56,56,56,0.9)] to-[rgba(56,56,56,0.3)] ph-h-[410] ph-mt-[10]"
    >
      <div id="chartContainer3" class=""></div>
      <img class="absolute left-0 top-0 z-[-1] h-full w-full" src="../../../assets/images/border/right-border.png" />
    </div>
  </div>
</template>

<script setup>
import { Chart } from '@antv/g2';
import { ref, onMounted, onUnmounted, nextTick } from 'vue';

let chart = null;

const chartContainerRef = ref(null);
const lineChartHeight = ref(0);
const lineChartWidth = ref(0);

function chartContainer() {
  const chartContainerValue = chartContainerRef.value;
  if (chartContainerValue) {
    lineChartHeight.value = chartContainerValue.clientHeight || chartContainerValue.offsetHeight;
    lineChartWidth.value = chartContainerValue.clientWidth || chartContainerValue.offsetWidth;
  }
}
const resizeHandler = null;

function handleResize() {
  window.addEventListener('resize', () => {
    chartContainer();
    if (chart && lineChartHeight.value > 0 && lineChartWidth.value > 0) {
      chart.destroy();
      chart = null;
      initChart();
    }
  });
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}
function initChart() {
  chart = new Chart({
    container: 'chartContainer3',
    height: lineChartHeight.value,
    width: lineChartWidth.value,
    theme: 'classicDark',
  });

  chart.coordinate({ type: 'radial', endAngle: Math.PI });

  chart
    .interval()
    .data({
      // Data is collected by the end of 2022.11.09
      value: [
        { name: 'G', star: 814 },
        { name: 'G2', star: 11425 },
        { name: 'G2Plot', star: 2320 },
        { name: 'S2', star: 968 },
        { name: 'F2', star: 7346 },
        { name: 'L7', star: 2888 },
        { name: 'G6', star: 9314 },
        { name: 'X6', star: 3985 },
        { name: 'AVA', star: 1151 },
      ],
      transform: [{ type: 'sortBy', fields: [['star', true]] }],
    })
    .encode('x', 'name')
    .encode('y', 'star')
    .scale('y', { type: 'sqrt' })
    .encode('color', 'name')
    .encode('size', 40)
    .style('radius', 20)
    .label({
      text: 'star',
      position: 'outside',
      autoRotate: true,
      rotateToAlignArc: true,
      dx: 3,
    })
    .axis('x', { title: false })
    .axis('y', false)
    .animate('enter', { type: 'waveIn', duration: 1000 });

  chart.render();
}
onMounted(async () => {
  await nextTick();
  chartContainer();
  if (lineChartHeight.value === 0 || lineChartWidth.value === 0) {
    setTimeout(() => {
      chartContainer();
      if (lineChartHeight.value > 0 && lineChartWidth.value > 0) {
        initChart();
      }
    }, 100);
  } else {
    initChart();
  }
  handleResize();
});
onUnmounted(() => {
  if (resizeHandler) {
    window.removeEventListener('resize', resizeHandler);
  }
  if (chart) {
    chart.destroy();
    chart = null;
  }
});
</script>
<style lang="scss" scoped></style>
