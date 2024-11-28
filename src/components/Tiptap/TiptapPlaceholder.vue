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
</script>

<style lang="scss">
.reveal .tiptap * {
  @apply text-sm text-left m-0;
}

.reveal .tiptap {
  @apply outline-0 text-sm min-h-full text-left;

  > * + * {
    @apply mt-3;
  }

  & > :first-child:not(h1, h2, h3) {
    @apply mt-1;
  }

  h1 {
    @apply text-2xl font-semibold;
  }

  h2 {
    @apply text-lg font-semibold;
  }

  h3 {
    @apply text-base font-semibold;
  }

  a {
    @apply text-gray-70 font-medium transition-colors underline;

    &:hover {
      @apply text-gray-90;
    }
  }

  ul {
    @apply ml-8 list-disc;
  }

  ol {
    @apply ml-8 list-decimal;
  }

  .is-empty::before {
    content: attr(data-placeholder);
    float: left;
    color: #adb5bd;
    pointer-events: none;
    height: 0;
  }

  .collapsible {
    @apply flex my-4;

    summary {
      @apply block;
    }

    [data-type='detailsContent'] {
      @apply text-xs py-1;
    }

    > button {
      @apply mt-0.5 mr-1 bg-center bg-no-repeat bg-contain w-4 h-4 border-0 cursor-pointer block p-0;
      background-image: url('data:image/svg+xml,<svg width="16" height="16" viewBox="0 0 16 16" fill="%23757576" stroke-width="0" xmlns="http://www.w3.org/2000/svg"><path d="M7.82579 4.73519C7.56062 4.41699 7.0877 4.37399 6.76949 4.63917C6.45128 4.90434 6.40829 5.37726 6.67346 5.69547L7.82579 4.73519ZM9.45935 7.867L10.0355 8.34714C10.2673 8.069 10.2673 7.665 10.0355 7.38686L9.45935 7.867ZM6.67346 10.0385C6.40829 10.3567 6.45128 10.8297 6.76949 11.0948C7.0877 11.36 7.56062 11.317 7.82579 10.9988L6.67346 10.0385ZM6.67346 5.69547L8.88318 8.34714L10.0355 7.38686L7.82579 4.73519L6.67346 5.69547ZM8.88318 7.38686L6.67346 10.0385L7.82579 10.9988L10.0355 8.34714L8.88318 7.38686ZM8 2.75C10.8995 2.75 13.25 5.1005 13.25 8L14.75 8C14.75 4.27208 11.7279 1.25 8 1.25L8 2.75ZM13.25 8C13.25 10.8995 10.8995 13.25 8 13.25L8 14.75C11.7279 14.75 14.75 11.7279 14.75 8L13.25 8ZM8 13.25C5.1005 13.25 2.75 10.8995 2.75 8L1.25 8C1.25 11.7279 4.27208 14.75 8 14.75L8 13.25ZM2.75 8C2.75 5.1005 5.1005 2.75 8 2.75L8 1.25C4.27208 1.25 1.25 4.27208 1.25 8L2.75 8Z"/></svg>');
      transition: background-image 0.3s cubic-bezier(0, 1, 0.5, 1);

      &:hover {
        background-image: url('data:image/svg+xml,<svg width="16" height="16" viewBox="0 0 16 16" fill="%233B3B3C" stroke-width="0" xmlns="http://www.w3.org/2000/svg"><path d="M7.82579 4.73519C7.56062 4.41699 7.0877 4.37399 6.76949 4.63917C6.45128 4.90434 6.40829 5.37726 6.67346 5.69547L7.82579 4.73519ZM9.45935 7.867L10.0355 8.34714C10.2673 8.069 10.2673 7.665 10.0355 7.38686L9.45935 7.867ZM6.67346 10.0385C6.40829 10.3567 6.45128 10.8297 6.76949 11.0948C7.0877 11.36 7.56062 11.317 7.82579 10.9988L6.67346 10.0385ZM6.67346 5.69547L8.88318 8.34714L10.0355 7.38686L7.82579 4.73519L6.67346 5.69547ZM8.88318 7.38686L6.67346 10.0385L7.82579 10.9988L10.0355 8.34714L8.88318 7.38686ZM8 2.75C10.8995 2.75 13.25 5.1005 13.25 8L14.75 8C14.75 4.27208 11.7279 1.25 8 1.25L8 2.75ZM13.25 8C13.25 10.8995 10.8995 13.25 8 13.25L8 14.75C11.7279 14.75 14.75 11.7279 14.75 8L13.25 8ZM8 13.25C5.1005 13.25 2.75 10.8995 2.75 8L1.25 8C1.25 11.7279 4.27208 14.75 8 14.75L8 13.25ZM2.75 8C2.75 5.1005 5.1005 2.75 8 2.75L8 1.25C4.27208 1.25 1.25 4.27208 1.25 8L2.75 8Z"/></svg>');
      }
    }

    &.is-open > button {
      background-image: url('data:image/svg+xml,<svg width="16" height="16" viewBox="0 0 16 16" fill="%23959596" stroke-width="0" xmlns="http://www.w3.org/2000/svg"><path d="M11.2648 7.82579C11.583 7.56062 11.626 7.0877 11.3608 6.76949C11.0957 6.45128 10.6227 6.40829 10.3045 6.67346L11.2648 7.82579ZM8.133 9.45935L7.65286 10.0355C7.93099 10.2673 8.335 10.2673 8.61314 10.0355L8.133 9.45935ZM5.96147 6.67346C5.64326 6.40829 5.17034 6.45128 4.90516 6.76949C4.63999 7.0877 4.68298 7.56062 5.00119 7.82579L5.96147 6.67346ZM10.3045 6.67346L7.65286 8.88318L8.61314 10.0355L11.2648 7.82579L10.3045 6.67346ZM8.61314 8.88318L5.96147 6.67346L5.00119 7.82579L7.65286 10.0355L8.61314 8.88318ZM13.25 8C13.25 10.8995 10.8995 13.25 8 13.25V14.75C11.7279 14.75 14.75 11.7279 14.75 8H13.25ZM8 13.25C5.1005 13.25 2.75 10.8995 2.75 8H1.25C1.25 11.7279 4.27208 14.75 8 14.75V13.25ZM2.75 8C2.75 5.1005 5.1005 2.75 8 2.75V1.25C4.27208 1.25 1.25 4.27208 1.25 8H2.75ZM8 2.75C10.8995 2.75 13.25 5.1005 13.25 8H14.75C14.75 4.27208 11.7279 1.25 8 1.25V2.75Z"/></svg>');

      &:hover {
        background-image: url('data:image/svg+xml,<svg width="16" height="16" viewBox="0 0 16 16" fill="%233B3B3C" stroke-width="0" xmlns="http://www.w3.org/2000/svg"><path d="M11.2648 7.82579C11.583 7.56062 11.626 7.0877 11.3608 6.76949C11.0957 6.45128 10.6227 6.40829 10.3045 6.67346L11.2648 7.82579ZM8.133 9.45935L7.65286 10.0355C7.93099 10.2673 8.335 10.2673 8.61314 10.0355L8.133 9.45935ZM5.96147 6.67346C5.64326 6.40829 5.17034 6.45128 4.90516 6.76949C4.63999 7.0877 4.68298 7.56062 5.00119 7.82579L5.96147 6.67346ZM10.3045 6.67346L7.65286 8.88318L8.61314 10.0355L11.2648 7.82579L10.3045 6.67346ZM8.61314 8.88318L5.96147 6.67346L5.00119 7.82579L7.65286 10.0355L8.61314 8.88318ZM13.25 8C13.25 10.8995 10.8995 13.25 8 13.25V14.75C11.7279 14.75 14.75 11.7279 14.75 8H13.25ZM8 13.25C5.1005 13.25 2.75 10.8995 2.75 8H1.25C1.25 11.7279 4.27208 14.75 8 14.75V13.25ZM2.75 8C2.75 5.1005 5.1005 2.75 8 2.75V1.25C4.27208 1.25 1.25 4.27208 1.25 8H2.75ZM8 2.75C10.8995 2.75 13.25 5.1005 13.25 8H14.75C14.75 4.27208 11.7279 1.25 8 1.25V2.75Z"/></svg>');
      }
    }

    > div {
      flex: 1 1 auto;
    }

    :last-child {
      margin-bottom: 0;
    }
  }

  pre {
    @apply bg-gray-10 text-gray-100 py-3 px-4 rounded-lg;
    font-family: 'JetBrainsMono', monospace;

    code {
      @apply p-0 bg-none text-gray-100;
    }
  }

  code {
    @apply bg-gray-10 text-gray-100 py-1 px-2 rounded-lg text-orange-100;
    font-family: 'JetBrainsMono', monospace;
  }

  blockquote {
    @apply pl-4 relative;
    &::before {
      @apply absolute inset-y-0 h-full w-1 bg-purple-100 block -ml-4;
      content: ' ';
    }
  }

  .horizontalRule {
    @apply border-gray-15 my-6;
  }

  .mention {
    @apply bg-purple-20 text-gray-80 rounded-md px-1 py-0.5;
  }

  table {
    @apply border border-gray-15 border-l-0 border-separate border-spacing-0 rounded-lg;

    th {
      @apply bg-gray-5 text-left;
    }

    td,
    th {
      @apply border-t border-l border-gray-15 relative py-1 px-2;
      min-width: 80px;
    }

    .selectedCell {
      @apply border border-purple-100;
    }

    .column-resize-handle {
      @apply bg-purple-100 absolute w-0.5 cursor-col-resize;
      bottom: -1px;
      right: -1px;
      top: 0;
    }

    tr:first-child td,
    tr:first-child th {
      @apply border-t-0;
    }

    tr:first-child td:first-child,
    tr:first-child th:first-child {
      @apply rounded-tl-lg;
    }

    tr:first-child th:last-child,
    tr:first-child th:last-child {
      @apply rounded-tr-lg;
    }

    tr:last-child td:first-child {
      @apply rounded-bl-lg;
    }

    tr:last-child td:last-child {
      @apply rounded-br-lg;
    }
  }
}
</style>
