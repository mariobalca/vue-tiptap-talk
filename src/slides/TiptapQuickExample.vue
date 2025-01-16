<template>
  <section>
    <section data-auto-animate class="center">
      <h3>How does it work?</h3>
    </section>
    <section data-auto-animate class="center">
      <h3>How does it work?</h3>
      <tiptap-headings class="border border-gray-60 p-6 rounded" />
    </section>
    <section class="center text-xl">
      <h3>How does it work?</h3>
      <pre class="javascript">
          <code data-trim data-noescape>
            {{ tiptapCode }}
          </code>
        </pre>
      <p>
        <a href="https://tiptap.dev/docs/editor/extensions/nodes/heading" target="_blank"
          >https://tiptap.dev/docs/editor/extensions/nodes/heading</a
        >
      </p>
    </section>
  </section>
</template>
<script setup lang="ts">
import TiptapHeadings from '@/components/Tiptap/TiptapHeadings.vue'

const tiptapCode = `
<template>
  <div v-if="editor" class="container">
    <div class="flex items-center">
      <button
        class="text-sm px-1 py-0.5 border rounded mr-2"
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
        :class="{ 'border-purple-100 text-purple-100': editor.isActive('heading', { level: 1 }) }"
      >
        H1
      </button>
      <button
        class="text-sm px-1 py-0.5 border rounded mr-2"
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
        :class="{ 'border-purple-100 text-purple-100': editor.isActive('heading', { level: 2 }) }"
      >
        H2
      </button>
      <button
        class="text-sm px-1 py-0.5 border rounded"
        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
        :class="{ 'border-purple-100 text-purple-100': editor.isActive('heading', { level: 3 }) }"
      >
        H3
      </button>
    </div>
    <editor-content :editor="editor" />
  </div>
</template>

<script>
import Document from '@tiptap/extension-document'
import Heading from '@tiptap/extension-heading'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import { Editor, EditorContent } from '@tiptap/vue-3'

export default {
  components: {
    EditorContent
  },

  data() {
    return {
      editor: null
    }
  },

  mounted() {
    this.editor = new Editor({
      extensions: [
        Document,
        Paragraph,
        Text,
        Heading.configure({
          levels: [1, 2, 3]
        })
      ],
      content: \`
        <h1>This is a 1st level heading</h1>
        <h2>This is a 2nd level heading</h2>
        <h3>This is a 3rd level heading</h3>
        <h4>This 4th level heading will be converted to a paragraph, because levels are configured to be only 1, 2 or 3.</h4>
      \`
    })
  },

  beforeUnmount() {
    this.editor.destroy()
  }
}
<\/script>
`
</script>
