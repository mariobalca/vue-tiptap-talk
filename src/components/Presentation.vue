<template>
  <div class="reveal">
    <div class="slides">
      <Cover />
      <Hello />
      <Vue />
      <Tiptap />
      <Thanks />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import Reveal from 'reveal.js'
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import Notes from 'reveal.js/plugin/notes/notes.esm.js';

import Cover from '@/slides/Cover.vue'
import Hello from '@/slides/Hello.vue'
import Vue from '@/slides/Vue.vue'
import Tiptap from '@/slides/Tiptap.vue'
import Thanks from '@/slides/Thanks.vue'

onMounted(() => {
  Reveal.initialize({
    center: false,
    plugins: [Markdown, Highlight, Notes]
  })
})
</script>

<style lang="scss">
@import 'node_modules/reveal.js/dist/reveal.css';
@import 'node_modules/reveal.js/dist/theme/night.css';
</style>
