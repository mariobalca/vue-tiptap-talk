<template>
  <floating-menu :editor="editor" :tippy-options="{ duration: 100, placement: 'left' }">
    <button
      class="w-4 h-4 rounded-md hover:bg-gray-10 flex items-center justify-center"
      style="transform: translateX(-28px)"
      @click="editor.chain().focus().insertContent('/').run()"
    >
      <icon name="plus-xs" />
    </button>
  </floating-menu>
</template>
<script setup>
import { FloatingMenu } from '@tiptap/vue-3'

const props = defineProps({
  editor: {
    type: Object,
    required: true
  }
})
</script>
