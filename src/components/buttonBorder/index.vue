<template>
  <div style="cursor: pointer" @click="$emit('click', $event)">
    <img class="h-full w-full" :src="props.url" />
    <slot></slot>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  url: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['click']);
</script>
