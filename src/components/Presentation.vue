<template>
  <div class="reveal">
    <div class="slides">
      <CoverSlide />
      <HelloSlide />
      <TamableSlide />
      <GoalSlide />
      <QuestionSlide />
      <VueSlide />
      <TailwindSlide />
      <TiptapSlide />
      <section class="center">
        <h3>Let's get started!</h3>
      </section>
      <StarterKitSlide />
      <ThanksSlide />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Reveal from 'reveal.js'
import Markdown from 'reveal.js/plugin/markdown/markdown'
import Highlight from 'reveal.js/plugin/highlight/highlight'
import Notes from 'reveal.js/plugin/notes/notes'

import CoverSlide from '@/slides/CoverSlide.vue'
import HelloSlide from '@/slides/HelloSlide.vue'
import VueSlide from '@/slides/VueSlide.vue'
import TiptapSlide from '@/slides/TiptapSlide.vue'
import ThanksSlide from '@/slides/ThanksSlide.vue'
import TamableSlide from '@/slides/TamableSlide.vue'
import GoalSlide from '@/slides/GoalSlide.vue'
import QuestionSlide from '@/slides/QuestionSlide.vue'
import TailwindSlide from '@/slides/TailwindSlide.vue'
import StarterKitSlide from '@/slides/StarterKitSlide.vue'

import javascript from 'highlight.js/lib/languages/javascript'

onMounted(() => {
  Reveal.initialize({
    center: false,
    highlight: {
      beforeHighlight: (hljs) => hljs.registerLanguage('javascript', javascript)
    },
    plugins: [Markdown, Highlight, Notes]
  })
})
</script>

<style lang="scss">
@import 'node_modules/reveal.js/dist/reveal.css';
@import 'node_modules/highlight.js/styles/night-owl.css';
@import '@/assets/reveal-theme';
</style>
