<template>
  <div class="relative flex items-center">
    <button v-tooltip.top="'Replace video'" @click="handleReplaceYoutube">
      <icon class="stroke-gray-100 fill-gray-100" name="play" />
    </button>
  </div>
</template>
<script setup>
const props = defineProps({
  editor: {
    type: Object,
    required: true
  }
})

const handleReplaceYoutube = () => {
  props.editor.chain().focus().updateAttributes('youtube', { src: undefined }).run()
}
</script>
