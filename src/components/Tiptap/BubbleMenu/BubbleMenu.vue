<template>
  <div ref="rootRef">
    <bubble-menu
      :editor="editor"
      :should-show="shouldShow"
      :tippy-options="{ duration: 100, maxWidth: 'none', zIndex: 100 }"
      class="bubbleMenu"
    >
      <div v-if="isImage" class="flex items-center">
        <bubble-menu-image :editor="editor" />
        <span class="separator"></span>
        <bubble-menu-align :editor="editor" />
      </div>
      <div v-else-if="isYoutube" class="flex items-center">
        <bubble-menu-youtube :editor="editor" />
        <span class="separator"></span>
        <bubble-menu-align :editor="editor" />
      </div>
      <div v-else-if="isTable" class="flex items-center">
        <bubble-menu-marks :editor="editor" />
        <span class="separator"></span>
        <bubble-menu-link :editor="editor" />
        <span v-if="isTable" class="separator"></span>
        <bubble-menu-table v-if="isTable" :editor="editor" />
      </div>
      <div v-else class="flex items-center">
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
      </div>
    </bubble-menu>
  </div>
</template>
<script setup>
import { computed, ref } from 'vue'
import { BubbleMenu } from '@tiptap/vue-3'
import BubbleMenuMarks from '@/components/Tiptap/BubbleMenu/BubbleMenuMarks.vue'
import BubbleMenuLink from '@/components/Tiptap/BubbleMenu/BubbleMenuLink.vue'
import BubbleMenuAlign from '@/components/Tiptap/BubbleMenu/BubbleMenuAlign.vue'
import BubbleMenuTypography from '@/components/Tiptap/BubbleMenu/BubbleMenuTypography.vue'
import BubbleMenuTable from '@/components/Tiptap/BubbleMenu/BubbleMenuTable.vue'
import BubbleMenuImage from '@/components/Tiptap/BubbleMenu/BubbleMenuImage.vue'
import BubbleMenuYoutube from '@/components/Tiptap/BubbleMenu/BubbleMenuYoutube.vue'
import { isTextSelection } from '@tiptap/core'

const props = defineProps({
  editor: {
    type: Object,
    required: true
  }
})

const rootRef = ref()

const isImage = computed(() => {
  return props.editor.isActive('image')
})

const isTable = computed(() => {
  return props.editor.isActive('table')
})

const isYoutube = computed(() => {
  return props.editor.isActive('youtube')
})

const shouldShow = ({ view, state, from, to }) => {
  const { doc, selection } = state
  const { empty } = selection

  if (selection.jsonID === 'cell') return true

  // Sometime check for `empty` is not enough.
  // Doubleclick an empty paragraph returns a node size of 2.
  // So we check also for an empty text size.
  const isEmptyTextBlock = !doc.textBetween(from, to).length && isTextSelection(state.selection)

  // When clicking on a element inside the bubble menu the editor "blur" event
  // is called and the bubble menu item is focussed. In this case we should
  // consider the menu as part of the editor and keep showing the menu
  const isChildOfMenu = rootRef.value.contains(document.activeElement)

  const hasEditorFocus = view.hasFocus() || isChildOfMenu

  if (!hasEditorFocus || empty || isEmptyTextBlock || !props.editor.isEditable) {
    return false
  }

  if (isImage.value) {
    return props.editor.getAttributes('image').src
  } else if (isYoutube.value) {
    return props.editor.getAttributes('youtube').src
  }
  return true
}
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
