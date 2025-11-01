<template>
  <div class="relative">
    <div class="relative">
      <img class="z-10 mx-auto w-[400px]" src="../../../assets/images/border/title-border-two.svg" alt="header" />
      <span class="text-normal absolute left-[30px] top-1/2 -translate-y-1/2 text-nowrap text-[1.85vh] text-[#75F8FF]">
        XXXX
      </span>
    </div>
    <div class="absolute left-1/2 top-[3.24vh] -translate-x-1/2">
      <div id="Chart-one_container" class="absolute z-20"></div>
    </div>
  </div>
</template>

<script setup>
import { Chart } from '@antv/g2';
import { onMounted, reactive, onBeforeUnmount } from 'vue';

let chart = reactive({});
function initChart() {
  const data = [];
  const chartColors2 = [
    'rgba(206, 254, 254, 0.25)',
    'rgba(2, 206, 255, 0.25)',
    'rgba(0, 255, 0, 0.25)',
    'rgba(255, 255, 0, 0.25)',
    'rgba(253, 155, 0, 0.25)',
    'rgba(255, 0, 0, 0.25)',
  ];
  const chartColors = ['#FFE100', '#59FFFF', '#00FF00', '#FFFF00', '#FD9B00', '#FF0000'];
  chart = new Chart({
    container: 'Chart-one_container',
    width: 340,
    height: 200,
    theme: 'classicDark',
  });
  const count = (() => data.reduce((a, b) => a + b.value, 0))();
  const layer = chart.spaceLayer().data(data);
  layer.shape().style('x', '50%').style('y', '58%').style('render', myShape);
  layer
    .text()
    .style('text', `${count}`)
    .style('x', '50%')
    .style('y', '70')
    .style('dy', -25)
    .style('fontSize', 14)
    .style('fontWeight', 'bold')
    .style('fill', '#fff')
    .style('textAlign', 'center');
  layer
    .text()
    .style('text', '总计')
    .style('x', '50%')
    .style('y', '80')
    .style('dy', -25)
    .style('fontSize', 12)
    .style('fill', '#B4C0CC')
    .style('textAlign', 'center');
  layer
    .interval()
    .coordinate({ type: 'theta', outerRadius: 0.5, innerRadius: 0.3 })
    // .attr('paddingRight', 76)
    .attr('marginTop', 46)
    .transform({ type: 'stackY' })
    .encode('y', 'value')
    .encode('color', 'type')
    .legend(false)
    .scale('color', {
      range: chartColors2,
    })
    .tooltip(false)
    .style({
      inset: 2,
    });
  layer
    .interval()
    .coordinate({ type: 'theta', outerRadius: 0.8, innerRadius: 0.6 })
    .transform({ type: 'stackY' })
    .encode('y', 'value')
    .encode('color', 'name')
    .scale('color', {
      range: chartColors,
    })
    .label({
      text: (d, i, data) => {
        const total = data.reduce((a, b) => a + b.value, 0);
        const value = ((d.value / total) * 100).toFixed(0);
        return `${value} %`;
      },
      fill: '#fff',
      position: 'spider',
      connectorDistance: 0,
      fontWeight: '900',
      textBaseline: 'bottom',
      connectorStroke: (d, i) => {
        return chartColors[i];
      },
      lineDash: [800, 0],
      connectorLineWidth: 4,
      // textAlign: (d) => (['c', 'sass'].includes(d.id) ? 'end' : 'start'),
      dy: -4,
    })
    .legend({
      color: {
        position: 'top',
        itemMarker: 'circle',
        itemValueFill: '#fff',
        maxCols: 5,
        itemLabelFill: '#fff',
        layout: { layout: 'flex', justifyContent: 'center' },
        itemLabelText: (d, idx) => {
          const value = `${data[idx].name} ${data[Number(idx)].value}`;
          return value;
        },
      },
    })

    .tooltip({
      items: [
        (d) => ({
          name: d.name,
          value: d.value,
          channel: 'y',
          marker: false,
        }),
      ],
    })
    .state('active', {
      lineWidth: 5,
      lineFill: 'rgba(0,0,0,0)',
      zIndex: 50,
    })
    .style({
      inset: 2,
    })
    .interaction('elementHighlight', true)
    .interaction('tooltip', {
      marker: false,
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
        '.g2-tooltip-list-item': {
          color: '#fff',
        },
        '.g2-tooltip-list-item-type-label': {
          color: '#fff',
          'font-size': '10px',
        },
        '.g2-tooltip-list-item-value': {
          color: '#fff',
          'font-size': '10px',
        },
      },
    });

  chart.render();
  function myShape({ x, y }, context) {
    const { document } = context;
    const g = document.createElement('g', {});
    const c1 = document.createElement('circle', {
      style: {
        cx: x,
        cy: y,
        lineWidth: 15,
        r: 70,
        stroke: '#1FC6FF',
        opacity: 0.2,
      },
    });
    g.appendChild(c1);
    return g;
  }
}
onMounted(() => {
  initChart();
});
onBeforeUnmount(() => {
  chart.destroy();
});
</script>
