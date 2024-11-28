<template>
  <section data-auto-animate>
    <section class="center">
      <h3>Placeholder</h3>
    </section>
    <section class="center">
      <h3>Placeholder</h3>
      <tiptap-placeholder class="border border-gray-60 p-6 rounded" />
      <p>
        <a
          class="text-xl"
          target="_blank"
          href="https://tiptap.dev/docs/editor/extensions/functionality/placeholder"
          >https://tiptap.dev/docs/editor/extensions/functionality/placeholder</a
        >
      </p>
    </section>
    <section class="center">
      <h3>Placeholder</h3>
      <div class="text-xl">
        <p>TiptapPlaceholder.vue</p>
        <pre class="javascript">
          <code data-trim data-noescape>
            {{ tiptapCode }}
          </code>
        </pre>
      </div>
    </section>
  </section>
</template>
<script setup lang="ts">
import TiptapPlaceholder from '@/components/Tiptap/TiptapPlaceholder.vue'

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
import { Slash } from '@/components/Tiptap/Slash/extension'
import { Placeholder } from '@tiptap/extension-placeholder'
import slashSuggestion from '@/components/Tiptap/Slash/suggestion'

import BubbleMenu from './BubbleMenu/BubbleMenu.vue'

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
</script>
