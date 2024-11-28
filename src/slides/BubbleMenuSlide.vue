<template>
  <section data-auto-animate>
    <section class="center">
      <h3>Bubble Menu</h3>
    </section>
    <section class="center">
      <h3>Bubble Menu</h3>
      <div class="relative">
        <tiptap-bubble-menu class="border border-gray-60 p-6 rounded" />
      </div>
      <p>
        <a
          class="text-xl"
          target="_blank"
          href="https://tiptap.dev/docs/editor/extensions/functionality/bubble-menu"
          >https://tiptap.dev/docs/editor/extensions/functionality/bubble-menu</a
        >
      </p>
    </section>
    <section class="center">
      <h3>Bubble Menu</h3>
      <div class="text-xl">
        <p>TiptapBubbleMenu.vue</p>
        <pre class="javascript">
          <code data-trim data-noescape>
            {{ tiptapCode }}
          </code>
        </pre>
      </div>
    </section>
    <section class="center">
      <h3>Bubble Menu</h3>
      <div class="text-xl">
        <p>BubbleMenu.vue</p>
        <pre class="javascript">
          <code data-trim data-noescape>
            {{ bubbleMenuCode }}
          </code>
        </pre>
      </div>
    </section>
    <section class="center">
      <h3>Bubble Menu</h3>
      <div class="text-xl">
        <p>BubbleMenuMarks.vue</p>
        <pre class="javascript">
          <code data-trim data-noescape>
            {{ bubbleMenuMarksCode }}
          </code>
        </pre>
      </div>
    </section>
    <section class="center">
      <h3>Bubble Menu</h3>
      <div class="text-xl">
        <p>BubbleMenuAlign.vue</p>
        <pre class="javascript">
          <code data-trim data-noescape>
            {{ bubbleMenuAlignCode }}
          </code>
        </pre>
      </div>
    </section>
    <section class="center">
      <h3>Bubble Menu</h3>
      <div class="text-xl">
        <p>BubbleMenuTypography.vue</p>
        <pre class="javascript">
          <code data-trim data-noescape>
            {{ bubbleMenuTypographyCode }}
          </code>
        </pre>
      </div>
    </section>
  </section>
</template>
<script setup lang="ts">
import TiptapBubbleMenu from '@/components/Tiptap/TiptapBubbleMenu.vue'

const tiptapCode = `
<template>
  <div class="basis-full text-sm">
    <bubble-menu v-if="editor" :editor="editor" />
    <editor-content :editor="editor" class="h-full" />
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount } from 'vue'
import { EditorContent, useEditor } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

import BubbleMenu from './BubbleMenu/BubbleMenu.vue'

const model = defineModel({ type: String, default: null })

const extensions = computed(() => [StarterKit])

const editor = useEditor({
  content: model.value,
  extensions: extensions.value,
  onUpdate: ({ editor }) => {
    model.value = editor.getHTML()
  }
})

onBeforeUnmount(() => {
  editor.value.destroy()
})
<\/script>
`

const bubbleMenuCode = `
<template>
  <div ref="rootRef">
    <bubble-menu
      :editor="editor"
      :should-show="shouldShow"
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
  </div>
</template>
<script setup>
import { BubbleMenu } from '@tiptap/vue-3'
import BubbleMenuMarks from '@/components/Tiptap/BubbleMenu/BubbleMenuMarks.vue'
import BubbleMenuLink from '@/components/Tiptap/BubbleMenu/BubbleMenuLink.vue'
import BubbleMenuAlign from '@/components/Tiptap/BubbleMenu/BubbleMenuAlign.vue'
import BubbleMenuTypography from '@/components/Tiptap/BubbleMenu/BubbleMenuTypography.vue'
<\/script>

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
<\/style>
`

const bubbleMenuMarksCode = `
<template>
  <button
    v-tooltip.top="'Bold'"
    :class="{ isActive: editor.isActive('bold') }"
    @click="editor.chain().focus().toggleBold().run()"
  >
    <icon class="stroke-gray-100 fill-gray-100" name="bold" />
  </button>
  <button
    v-tooltip.top="'Italic'"
    :class="{ isActive: editor.isActive('italic') }"
    @click="editor.chain().focus().toggleItalic().run()"
  >
    <icon class="stroke-gray-100 fill-gray-100" name="italic" />
  </button>
  <button
    v-tooltip.top="'Underline'"
    :class="{ isActive: editor.isActive('underline') }"
    @click="editor.chain().focus().toggleUnderline().run()"
  >
    <icon class="stroke-gray-100 fill-gray-100" name="underline" />
  </button>
  <button
    v-tooltip.top="'Strike through'"
    :class="{ isActive: editor.isActive('strike') }"
    @click="editor.chain().focus().toggleStrike().run()"
  >
    <icon class="stroke-gray-100 fill-gray-100" name="strikethrough" />
  </button>
  <button
    v-tooltip.top="'Inline Code'"
    :class="{ isActive: editor.isActive('code') }"
    @click="editor.chain().focus().toggleCode().run()"
  >
    <icon class="stroke-gray-100 fill-gray-100" name="code" />
  </button>
</template>

<script setup>
defineProps({
  editor: {
    type: Object,
    required: true
  }
})
<\/script>
`

const bubbleMenuAlignCode = `
<template>
  <div class="relative">
    <button v-tooltip.top="'Align'" :class="{ isActive: expanded }" @click="handleToggleClick">
      <icon :name="selected" />
    </button>
    <Popover
      ref="panelRef"
      class="popover !w-auto"
      @hide="expanded = false"
      @show="expanded = true"
    >
      <div class="bubbleMenu">
        <button
          v-tooltip.top="'Align left'"
          :class="{ isActive: editor.isActive({ textAlign: 'left' }) }"
          @click="handleSelectAlign('left')"
        >
          <icon class="stroke-gray-100 fill-gray-100" name="align-left" />
        </button>
        <button
          v-tooltip.top="'Align center'"
          :class="{ isActive: editor.isActive({ textAlign: 'center' }) }"
          @click="handleSelectAlign('center')"
        >
          <icon class="stroke-gray-100 fill-gray-100" name="align-center" />
        </button>
        <button
          v-tooltip.top="'Align right'"
          :class="{ isActive: editor.isActive({ textAlign: 'right' }) }"
          @click="handleSelectAlign('right')"
        >
          <icon class="stroke-gray-100 fill-gray-100" name="align-right" />
        </button>
        <button
          v-tooltip.top="'Justify'"
          :class="{ isActive: editor.isActive({ textAlign: 'justify' }) }"
          @click="handleSelectAlign('justify')"
        >
          <icon class="stroke-gray-100 fill-gray-100" name="align-justify" />
        </button>
      </div>
    </Popover>
  </div>
</template>

<script setup>
import Popover from 'primevue/popover'
import { computed, ref, watch } from 'vue'

const props = defineProps({
  editor: {
    type: Object,
    required: true
  }
})

const panelRef = ref()
const expanded = ref(false)
const selected = ref('align-left')

const selectedNode = computed(() => {
  return props.editor.state.selection.node ?? props.editor.state.selection.$head.parent
})

watch(
  selectedNode,
  (value) => {
    selected.value = \`align-\$\{value.attrs.textAlign ?? 'left'\}\`
  },
  { deep: true, immediate: true }
)

const handleToggleClick = (event) => {
  panelRef.value.toggle(event)
}

const handleSelectAlign = (align) => {
  props.editor.chain().focus().setTextAlign(align).run()
  selected.value = \`align-\$\{align\}\`
}
<\/script>
`

const bubbleMenuTypographyCode = `
<template>
  <div class="relative">
    <button
      v-tooltip.top="'Text type'"
      :class="{ isActive: expanded }"
      class="flex items-center"
      @click="handleToggleClick"
    >
      <span class="text-sm text-gray-100">{{ selected }}</span>
      <icon class="ml-1" name="chevron-down" />
    </button>
    <Popover
      ref="panelRef"
      class="popover !w-auto"
      @hide="expanded = false"
      @show="expanded = true"
    >
      <ul class="p-2 gap-1 text-gray-100">
        <li
          class="p-2 text-sm rounded-md hover:bg-purple-10 cursor-pointer"
          @click="handleSelectNode('heading', { level: 1 })"
        >
          Heading 1
        </li>
        <li
          class="p-2 text-sm rounded-md hover:bg-purple-10 cursor-pointer"
          @click="handleSelectNode('heading', { level: 2 })"
        >
          Heading 2
        </li>
        <li
          class="p-2 text-sm rounded-md hover:bg-purple-10 cursor-pointer"
          @click="handleSelectNode('heading', { level: 3 })"
        >
          Heading 3
        </li>
        <li
          class="p-2 text-sm rounded-md hover:bg-purple-10 cursor-pointer"
          @click="handleSelectNode('paragraph')"
        >
          Text
        </li>
      </ul>
    </Popover>
  </div>
</template>

<script setup>
import Popover from 'primevue/popover'
import { computed, ref, watch } from 'vue'

const props = defineProps({
  editor: {
    type: Object,
    required: true
  }
})

const panelRef = ref()
const expanded = ref(false)
const selected = ref('Text')

const handleToggleClick = (event) => {
  panelRef.value.toggle(event)
}

const handleSelectNode = (node, options) => {
  props.editor.chain().focus().setNode(node, options).run()
}

const selectedNode = computed(() => {
  return props.editor.state.selection.$head.parent
})

watch(
  selectedNode,
  (value) => {
    let typeName = 'Text'
    let level = ''

    switch (value.type.name) {
      case 'heading':
        typeName = 'Heading'
        level = \` \$\{props.editor.getAttributes('heading').level\}\`
        break
    }

    selected.value = \`\$\{typeName\}\$\{level\}\`
  },
  { deep: true, immediate: true }
)
<\/script>
`
</script>
