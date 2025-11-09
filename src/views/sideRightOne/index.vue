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
      <div id="chartContainer2" class=""></div>
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
  if (chart) {
    chart.destroy();
    chart = null;
  }
  const container = document.getElementById('chartContainer2');
  if (container) {
    container.innerHTML = '';
  }

  chart = new Chart({
    container: 'chartContainer2',
    height: lineChartHeight.value,
    width: lineChartWidth.value,
    theme: 'classicDark',
  });
  chart
    .point()
    .data({
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/antvdemo/assets/data/bubble.json',
    })
    .encode('x', 'GDP')
    .encode('y', 'LifeExpectancy')
    .encode('size', 'Population')
    .encode('color', 'continent')
    .encode('shape', 'point')
    .scale('size', { type: 'log', range: [4, 20] })
    .style('fillOpacity', 0.3)
    .style('lineWidth', 1)
    .legend('size', false);

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
