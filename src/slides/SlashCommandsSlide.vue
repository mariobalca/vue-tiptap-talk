<template>
  <section data-auto-animate>
    <section class="center">
      <h3>Slash Commands</h3>
    </section>
    <section class="center">
      <h3>Slash Commands</h3>
      <tiptap-slash class="border border-gray-60 p-6 rounded" />
      <p>
        <a
          class="text-xl"
          target="_blank"
          href="https://tiptap.dev/docs/examples/experiments/slash-commands"
          >https://tiptap.dev/docs/examples/experiments/slash-commands</a
        >
      </p>
    </section>
    <section class="center">
      <h3>Slash Commands</h3>
      <div class="text-xl">
        <p>TiptapSlash.vue</p>
        <pre class="javascript">
          <code data-trim data-noescape>
            {{ tiptapCode }}
          </code>
        </pre>
      </div>
    </section>
    <section class="center">
      <h3>Slash Commands</h3>
      <div class="text-xl">
        <p>Suggestion.js</p>
        <pre class="javascript">
          <code data-trim data-noescape>
            {{ suggestionCode }}
          </code>
        </pre>
      </div>
    </section>
    <section class="center">
      <h3>Slash Commands</h3>
      <div class="text-xl">
        <p>CommandList.vue</p>
        <pre class="javascript">
          <code data-trim data-noescape>
            {{ commandListCode }}
          </code>
        </pre>
      </div>
    </section>
  </section>
</template>
<script setup lang="ts">
import TiptapSlash from '@/components/Tiptap/TiptapSlash.vue'

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
import slashSuggestion from '@/components/Tiptap/Slash/suggestion'

import BubbleMenu from './BubbleMenu/BubbleMenu.vue'

const model = defineModel({ type: String, default: null })

const extensions = computed(() => [
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

const suggestionCode = `

import { VueRenderer } from '@tiptap/vue-3'
import tippy from 'tippy.js'

import CommandsList from './CommandList.vue'

export default {
  items: ({ query }) => {
    return [
      {
        title: 'H1',
        command: ({ editor, range }) => {
          editor.chain().focus().deleteRange(range).setHeading({ level: 1 }).run()
        },
        icon: 'heading',
        group: 'Basic'
      },
      {
        title: 'H2',
        command: ({ editor, range }) => {
          editor.chain().focus().deleteRange(range).setHeading({ level: 2 }).run()
        },
        icon: 'heading'
      },
      {
        title: 'H3',
        command: ({ editor, range }) => {
          editor.chain().focus().deleteRange(range).setHeading({ level: 3 }).run()
        },
        icon: 'heading'
      },
      {
        title: 'Text',
        command: ({ editor, range }) => {
          editor.chain().focus().deleteRange(range).setParagraph().run()
        },
        icon: 'text'
      },
      {
        title: 'Bulleted List',
        command: ({ editor, range }) => {
          editor.chain().focus().deleteRange(range).toggleBulletList().run()
        },
        icon: 'list'
      },
      {
        title: 'Numbered List',
        command: ({ editor, range }) => {
          editor.chain().focus().deleteRange(range).toggleOrderedList().run()
        },
        icon: 'ordered-list'
      },
      {
        title: 'Quote',
        command: ({ editor, range }) => {
          editor.chain().focus().deleteRange(range).setBlockquote().run()
        },
        icon: 'quote'
      },
      {
        title: 'Collapsible',
        command: ({ editor, range }) => {
          editor.chain().focus().deleteRange(range).setDetails().run()
        },
        icon: 'arrow-down-circle'
      },
      {
        title: 'Table',
        command: ({ editor, range }) => {
          editor.chain().focus().deleteRange(range).insertTable({ rows: 3, cols: 3 }).run()
        },
        icon: 'table'
      },
      {
        title: 'Codeblock',
        command: ({ editor, range }) => {
          editor.chain().focus().deleteRange(range).setCodeBlock().run()
        },
        icon: 'code'
      },
      {
        title: 'Divider',
        command: ({ editor, range }) => {
          editor.chain().focus().deleteRange(range).setHorizontalRule().run()
        },
        icon: 'divider'
      },
      {
        title: 'Mention',
        command: ({ editor, range }) => {
          editor.chain().focus().deleteRange(range).insertContent('@').run()
        },
        icon: 'at'
      },
      {
        title: 'Emoji',
        command: ({ editor, range }) => {
          editor.chain().focus().deleteRange(range).insertContent(':').run()
        },
        icon: 'emoji'
      },
      {
        title: 'Image',
        command: ({ editor, range }) => {
          editor.chain().focus().deleteRange(range).setImage().run()
        },
        icon: 'photo',
        group: 'Media'
      },
      {
        title: 'Video',
        command: ({ editor, range }) => {
          editor.chain().focus().deleteRange(range).setYoutubeVideo().run()
        },
        icon: 'play'
      }
    ].filter((item) => item.title.toLowerCase().startsWith(query.toLowerCase()))
  },

  render: () => {
    let component
    let popup

    return {
      onStart: (props) => {
        component = new VueRenderer(CommandsList, {
          props,
          editor: props.editor
        })

        if (!props.clientRect) {
          return
        }

        popup = tippy('body', {
          getReferenceClientRect: props.clientRect,
          appendTo: () => document.body,
          content: component.element,
          showOnCreate: true,
          interactive: true,
          trigger: 'manual',
          placement: 'bottom-start'
        })
      },

      onUpdate(props) {
        component.updateProps(props)

        if (!props.clientRect) {
          return
        }

        popup[0].setProps({
          getReferenceClientRect: props.clientRect
        })
      },

      onKeyDown(props) {
        if (props.event.key === 'Escape') {
          popup[0].hide()

          return true
        }

        return component.ref?.onKeyDown(props)
      },

      onExit() {
        popup[0].destroy()
        component.destroy()
      }
    }
  }
}`

const commandListCode = `
<template>
  <div class="suggestionList">
    <template v-if="items.length">
      <div v-for="(item, index) in items" :key="index">
        <p v-if="item.group" class="suggestionListTitle">{{ item.group }}</p>
        <button
          :id="\`option-\$\{index\}\`"
          :class="{ isHovered: index === selectedIndex }"
          class="suggestionListItem"
          @click="selectItem(index)"
        >
          <icon :name="item.icon" class="mr-1 h-4 w-4" color="gray-50" />
          <span>{{ item.title }}</span>
        </button>
      </div>
    </template>
    <div v-else class="text-xs text-gray-60">No result</div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    },

    command: {
      type: Function,
      required: true
    }
  },

  data() {
    return {
      selectedIndex: 0
    }
  },

  watch: {
    items() {
      this.selectedIndex = 0
    }
  },

  methods: {
    onKeyDown({ event }) {
      if (event.key === 'ArrowUp') {
        this.upHandler()
        return true
      }

      if (event.key === 'ArrowDown') {
        this.downHandler()
        return true
      }

      if (event.key === 'Enter') {
        this.enterHandler()
        return true
      }

      return false
    },

    upHandler() {
      this.selectedIndex = (this.selectedIndex + this.items.length - 1) % this.items.length
      this.$el
        .querySelector('#option-' + this.selectedIndex)
        .scrollIntoView({ behaviour: 'smooth', block: 'end' })
    },

    downHandler() {
      this.selectedIndex = (this.selectedIndex + 1) % this.items.length
      this.$el
        .querySelector('#option-' + this.selectedIndex)
        .scrollIntoView({ behaviour: 'smooth', block: 'end' })
    },

    enterHandler() {
      this.selectItem(this.selectedIndex)
    },

    selectItem(index) {
      const item = this.items[index]

      if (item) {
        this.command(item)
      }
    }
  }
}
<\/script>

<style lang="scss">
.suggestionList {
  @apply grid border border-gray-15 rounded-lg p-2 gap-1 max-h-96 overflow-auto bg-white;
}

.suggestionListTitle {
  @apply rounded-lg p-2 text-xs text-gray-60;
}

.suggestionListItem {
  @apply rounded-md p-2 text-sm text-gray-100 text-left w-full flex items-center;
  &:hover,
  &.isHovered {
    @apply bg-purple-10;
  }
}
<\/style>
`
</script>
