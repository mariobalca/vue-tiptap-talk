<template>
  <component :is="icon" :key="name" :class="`stroke-${color} fill-${color}`" />
</template>

<script setup>
import { defineAsyncComponent, shallowRef, watch } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  color: {
    type: [String, Array, Object],
    default: null
  }
})

const icon = shallowRef(
  defineAsyncComponent(() => import(`@/assets/icons/${props.name}.svg`))
)

watch(
  () => props.name,
  (newValue) => {
    icon.value = defineAsyncComponent(() => import(`@/assets/icons/${newValue}.svg`))
  }
)
</script>

<style lang="scss"></style>
