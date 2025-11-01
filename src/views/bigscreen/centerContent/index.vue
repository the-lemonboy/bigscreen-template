<template>
  <div id="world-map-container" class="fixed inset-0 z-0"></div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue';

let map = null;

const initMap = () => {
  // 等待 Leaflet 加载完成
  if (typeof window.L === 'undefined') {
    return;
  }

  // 创建地图实例，初始视角聚焦到巴黎
  map = window.L.map('world-map-container', {
    center: [48.8566, 2.3522], // 巴黎中心点（纬度48.8566度，经度2.3522度）
    zoom: 10, // 缩放级别，显示巴黎市区
    zoomControl: false, // 隐藏默认缩放控件
    attributionControl: false, // 隐藏默认属性控件
    minZoom: 2, // 最小缩放级别
    maxZoom: 19, // 最大缩放级别
  });

  // 使用 OpenStreetMap 标准地图 - 亮蓝色主题，海洋显示为蓝色
  window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '',
    maxZoom: 19,
    subdomains: ['a', 'b', 'c'],
  }).addTo(map);

  // 适配窗口大小变化
  setTimeout(() => {
    if (map) {
      map.invalidateSize();
    }
  }, 100);
};

onMounted(() => {
  // 延迟初始化，确保 Leaflet SDK 和 DOM 都已加载
  const checkLeaflet = setInterval(() => {
    if (typeof window.L !== 'undefined') {
      clearInterval(checkLeaflet);
      setTimeout(() => {
        initMap();
      }, 100);
    }
  }, 100);

  // 超时保护
  setTimeout(() => {
    clearInterval(checkLeaflet);
    if (typeof window.L !== 'undefined') {
      initMap();
    }
  }, 5000);
});

onBeforeUnmount(() => {
  if (map) {
    map.remove();
    map = null;
  }
});
</script>

<style scoped>
#world-map-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
}

/* 隐藏 Leaflet 的水印和控件 */
:deep(.leaflet-control-attribution) {
  display: none;
}

/* 确保地图画布也占满全屏 */
:deep(.leaflet-container) {
  height: 100vh;
  width: 100vw;
  background: #e6f3ff; /* 浅蓝色背景，匹配亮蓝色主题 */
}

/* 确保地图图层全屏 */
:deep(.leaflet-pane) {
  height: 100vh;
  width: 100vw;
}

/* 优化地图的视觉样式，使其更符合亮蓝色主题 */
:deep(.leaflet-tile-container img) {
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
}
</style>
