<template>
  <div id="world-map-container" class="fixed inset-0 z-0"></div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import * as L from 'leaflet'

let map = null

const initMap = () => {
  const container = document.getElementById('world-map-container')
  if (!container || map) return

  try {
    map = L.map('world-map-container', {
      center: [48.8566, 2.3522],
      zoom: 10,
      zoomControl: false,
      attributionControl: false,
      minZoom: 2,
      maxZoom: 19,
    })

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '',
      maxZoom: 19,
      subdomains: 'abcd',
    }).addTo(map)

    setTimeout(() => {
      if (map) map.invalidateSize()
    }, 100)
  } catch (error) {
    map = null
  }
}

onMounted(() => {
  initMap()
})

onBeforeUnmount(() => {
  if (map) {
    try {
      map.remove()
    } catch (e) {}
    map = null
  }
  const container = document.getElementById('world-map-container')
  if (container) container.innerHTML = ''
})
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
  background: #0a0e27; /* 深色科技感背景，暗蓝色 */
}

/* 增强地图的科技感视觉效果 */
:deep(.leaflet-container) {
  filter: brightness(0.9) contrast(1.1);
}

/* 为地图添加微妙的发光效果，增强科技感 */
:deep(.leaflet-tile-container) {
  opacity: 0.95;
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
