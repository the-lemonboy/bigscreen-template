<template>
  <div>
    <div class="relative">
      <img class="" src="../../assets/images/border/title-border-two.svg" alt="header" />
      <span class="text-normal absolute left-4 top-1/2 -translate-y-1/2 text-[#75F8FF] ph-text-[18px]">XXXX</span>
    </div>
    <div ref="chartContainerRef" class="flex items-center justify-center ph-mt-[20]" style="height: 37vh; width: 100%">
      <div id="lineChartContainer" class=""></div>
    </div>
  </div>
</template>

<script setup>
import { Chart } from '@antv/g2';
import { onMounted, ref, nextTick, onUnmounted } from 'vue';

const data = [
  {
    firstType: '电子产品',
    total: 2400,
    leaves: [
      {
        secondType: '智能手机',
        num: 1200,
      },
      {
        secondType: '平板电脑',
        num: 600,
      },
      {
        secondType: '笔记本电脑',
        num: 600,
      },
    ],
  },
  {
    firstType: '家居用品',
    total: 1800,
    leaves: [
      {
        secondType: '床上用品',
        num: 500,
      },
      {
        secondType: '家具',
        num: 600,
      },
      {
        secondType: '家电',
        num: 500,
      },
      {
        secondType: '厨房用品',
        num: 200,
      },
    ],
  },
  {
    firstType: '服装配饰',
    total: 1500,
    leaves: [
      {
        secondType: '男装',
        num: 600,
      },
      {
        secondType: '女装',
        num: 500,
      },
      {
        secondType: '配饰',
        num: 400,
      },
    ],
  },
  {
    firstType: '食品饮料',
    total: 1300,
    leaves: [
      {
        secondType: '食品',
        num: 600,
      },
      {
        secondType: '饮料',
        num: 500,
      },
      {
        secondType: '酒水',
        num: 200,
      },
    ],
  },
  {
    firstType: '运动户外',
    total: 2000,
    leaves: [
      {
        secondType: '运动装备',
        num: 1000,
      },
      {
        secondType: '户外用品',
        num: 600,
      },
      {
        secondType: '健身器材',
        num: 400,
      },
    ],
  },
];
// const chart = ref(null);
let chart = null;
const chartContainerRef = ref(null);
const lineChartHeight = ref(0);
const lineChartWidth = ref(0);

function chartContainer() {
  const chartContainerValue = chartContainerRef.value;
  if (chartContainerValue) {
    lineChartHeight.value = chartContainerValue.offsetHeight || chartContainerValue.clientHeight;
    lineChartWidth.value = chartContainerValue.offsetWidth || chartContainerValue.clientWidth;
  }
}

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
function handleChartData() {
  const handleData = [];
  const colors = ['rgba(0, 170, 255, 0.50)', 'rgba(0, 255, 85, 0.50)', 'rgba(76, 59, 25, 0.50)'];
  const borderColors = ['#0AF', '#0AFFA7', '#FEB257'];
  data.forEach((item) => {
    if (Array.isArray(item.leaves)) {
      item.leaves.forEach((child, index) => {
        handleData.push({
          type: item.firstType,
          name: child.secondType,
          value: child.num,
          color: colors[index % colors.length],
          borderColor: borderColors[index % borderColors.length],
        });
      });
    }
  });
  return handleData;
}
const chartData = ref(handleChartData());
function initChart() {
  if (chart) {
    chart.destroy();
    chart = null;
  }
  const container = document.getElementById('lineChartContainer');
  if (container) {
    container.innerHTML = '';
  }

  chart = new Chart({
    container: 'lineChartContainer',
    height: lineChartHeight.value,
    width: lineChartWidth.value,
    theme: 'classicDark',
    paddingBottom: 60, // 这里
  });
  chart
    .interval()
    .data(chartData.value)
    .transform({ type: 'stackY' })
    .encode('x', 'type')
    .encode('y', 'value')
    .encode('color', 'name')
    .legend(false)
    .axis({
      x: {
        title: false,
        labelFontSize: 12,
        transform: [],
        labelAutoRotate: {
          type: 'rotate',
          optionalAngles: [0],
        },
        labelFormatter: (datum) => {
          datum = datum.replace(/.{4}/g, '$&\n');
          return datum;
        },
        labelFill: '#CDE9FF',
      },
      y: {
        label: false,
        title: false,
      },
    })
    .encode('size', 14)
    .style({
      fill: (d) => d.color,
      radius: 2,
      strokeWidth: 1,
      stroke: (d) => d.borderColor,
    });
  chart
    .interaction('tooltip', {
      shared: true,
      css: {
        '.g2-tooltip': {
          background: 'rgba(0, 0, 0, 0.50)',
          'border-radius': ' 2px !important',
          'box-shadow': '0px 10px 20px 0px rgba(0, 0, 0, 0.50)',
        },
        '.g2-tooltip-title': {
          'border-bottom': '0.5px solid #0F445B',
          color: '#fff',
        },
        '.g2-tooltip-list-item-name-label': {
          color: '#fff',
          'font-size': '10px',
        },
        '.g2-tooltip-list-item-value': {
          color: '#fff',
          'font-size': '10px',
        },
      },
    })
    .interaction('elementHighlight', { background: true });
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
  handleResize();
  if (chart) {
    chart.destroy();
    chart = null;
  }
});
</script>
