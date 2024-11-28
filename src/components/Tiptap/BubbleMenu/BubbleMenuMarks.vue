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
</script>
