<template>
  <section data-auto-animate>
    <section class="center">
      <h3>Floating Menu</h3>
    </section>
    <section class="center">
      <h3>Floating Menu</h3>
      <div class="relative">
        <tiptap-floating-menu class="border border-gray-60 p-6 rounded" />
      </div>
      <p>
        <a
          class="text-xl"
          target="_blank"
          href="https://tiptap.dev/docs/editor/extensions/functionality/floatingmenu"
          >https://tiptap.dev/docs/editor/extensions/functionality/floatingmenu</a
        >
      </p>
    </section>
    <section class="center">
      <h3>Floating Menu</h3>
      <div class="text-xl">
        <p>TiptapFloatingMenu.vue</p>
        <pre class="javascript">
          <code data-trim data-noescape>
            {{ tiptapCode }}
          </code>
        </pre>
      </div>
    </section>
    <section class="center">
      <h3>Floating Menu</h3>
      <div class="text-xl">
        <p>FloatingMenu.vue</p>
        <pre class="javascript">
          <code data-trim data-noescape>
            {{ floatingMenuCode }}
          </code>
        </pre>
      </div>
    </section>
  </section>
</template>
<script setup lang="ts">
import TiptapFloatingMenu from '@/components/Tiptap/TiptapFloatingMenu.vue'

const tiptapCode = `
<template>
  <div class="basis-full text-sm">
    <bubble-menu v-if="editor" :editor="editor" />
    <editor-content :editor="editor" class="h-full" />
    <floating-menu v-if="editor" :editor="editor" />
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount } from 'vue'
import { EditorContent, useEditor } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import { Slash } from '@/components/Tiptap/Slash/extension'
import { Placeholder } from '@tiptap/extension-placeholder'
import slashSuggestion from '@/components/Tiptap/Slash/suggestion'

import BubbleMenu from './BubbleMenu/BubbleMenu.vue'
import FloatingMenu from '@/components/Tiptap/Slash/FloatingMenu.vue'

const model = defineModel({ type: String, default: null })

const extensions = computed(() => [
  Placeholder.configure({
    placeholder: ({ node }) => {
      if (node.type.name === 'heading') {
        return 'Header'
      } else if (['codeBlock'].includes(node.type.name)) {
        return 'Write something'
      }
      return "Write something or press '/' for command"
    }
  }),
  StarterKit,
  Slash.configure({
    suggestion: slashSuggestion
  })
])

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
const floatingMenuCode = `
<template>
  <floating-menu :editor="editor" :tippy-options="{ duration: 100, placement: 'left' }">
    <button
      class="w-4 h-4 rounded-md hover:bg-gray-10 flex items-center justify-center"
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
<\/script>
`
</script>
