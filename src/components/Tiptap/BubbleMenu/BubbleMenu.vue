<template>
  <bubble-menu
    :editor="editor"
    :tippy-options="{ duration: 100, maxWidth: 'none', zIndex: 100 }"
    class="bubbleMenu"
  >
    <bubble-menu-typography :editor="editor" />
    <span class="separator"></span>
    <bubble-menu-marks :editor="editor" />
    <span class="separator"></span>
    <button
      v-tooltip.top="'Quote'"
      :class="{ isActive: editor.isActive('blockquote') }"
      @click="editor.chain().focus().toggleBlockquote().run()"
    >
      <icon class="stroke-gray-100 fill-gray-100 h-4" name="quote" />
    </button>
    <span class="separator"></span>
    <bubble-menu-link :editor="editor" />
    <span class="separator"></span>
    <bubble-menu-align :editor="editor" />
  </bubble-menu>
</template>
<script setup>
import { BubbleMenu } from '@tiptap/vue-3'
import BubbleMenuMarks from '@/components/Tiptap/BubbleMenu/BubbleMenuMarks.vue'
import BubbleMenuLink from '@/components/Tiptap/BubbleMenu/BubbleMenuLink.vue'
import BubbleMenuAlign from '@/components/Tiptap/BubbleMenu/BubbleMenuAlign.vue'
import BubbleMenuTypography from '@/components/Tiptap/BubbleMenu/BubbleMenuTypography.vue'

const props = defineProps({
  editor: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss">
.bubbleMenu {
  @apply flex bg-white p-2 shadow border border-gray-15 rounded-lg gap-1;

  button {
    @apply p-1 rounded-md cursor-pointer;
    &:hover {
      @apply bg-gray-10;
    }

    &.isActive {
      @apply bg-gray-15;
    }
  }

  .separator {
    @apply block w-px h-4 bg-gray-10 mx-2;
  }
}
</style>
