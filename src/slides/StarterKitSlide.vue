<template>
  <section data-auto-animate>
    <section class="center">
      <h3>StarterKit</h3>
    </section>
    <section class="center">
      <h3>StarterKit</h3>
      <tiptap-starter-kit class="border border-gray-60 p-6 rounded" />
      <p>
        <a
          class="text-xl"
          target="_blank"
          href="https://tiptap.dev/docs/editor/extensions/functionality/starterkit"
          >https://tiptap.dev/docs/editor/extensions/functionality/starterkit</a
        >
      </p>
    </section>
    <section class="center">
      <h3>StarterKit</h3>
      <div class="text-xl">
        <p>TiptapStarterKit.vue</p>
        <pre class="javascript">
          <code data-trim data-noescape>
            {{ tiptapCode }}
          </code>
        </pre>
      </div>
    </section>
    <section class="center text-xl">
      <h3>StarterKit</h3>
      <p>
        <a
          class="text-xl"
          target="_blank"
          href="https://tiptap.dev/docs/editor/extensions/functionality/starterkit"
          >https://tiptap.dev/docs/editor/extensions/functionality/starterkit</a
        >
      </p>
      <div class="flex text-left">
        <div class="w-1/3">
          <p>Included nodes</p>
          <ul>
            <li>Blockquote</li>
            <li>BulletList</li>
            <li>CodeBlock</li>
            <li>Document</li>
            <li>HardBreak</li>
            <li>Heading</li>
            <li>HorizontalRule</li>
            <li>ListItem</li>
            <li>OrderedList</li>
            <li>Paragraph</li>
            <li>Text</li>
          </ul>
        </div>
        <div class="w-1/3">
          <p>Included marks</p>
          <ul>
            <li>Marks</li>
            <li>Bold</li>
            <li>Code</li>
            <li>Italic</li>
            <li>Strike</li>
          </ul>
        </div>
        <div class="w-1/3">
          <p>Included extensions</p>
          <ul>
            <li>Dropcursor</li>
            <li>Gapcursor</li>
            <li>History</li>
          </ul>
        </div>
      </div>
    </section>
  </section>
</template>
<script setup lang="ts">
import TiptapStarterKit from '@/components/Tiptap/TiptapStarterKit.vue'

const tiptapCode = `
<template>
  <div class="basis-full text-sm">
    <editor-content :editor="editor" class="h-full" />
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount } from 'vue'
import { EditorContent, useEditor } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

const model = defineModel({ type: String, default: null })

const extensions = computed(() => {
  return [StarterKit]
})

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
