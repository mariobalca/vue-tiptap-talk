<template>
  <section data-auto-animate>
    <section class="center">
      <h3>This is our goal</h3>
    </section>
    <section class="max-h-full overflow-auto">
      <Tiptap v-model="content" class="max-w-3xl mx-auto" />
    </section>
  </section>
</template>
<script setup lang="ts">
import Tiptap from "@/components/Tiptap/Tiptap.vue"
import {ref} from "vue"

const content = ref(`
<h1>This is the editor</h1><blockquote><p>For every quote, there’s a component<br>Just like this one</p></blockquote><pre><code>But we can also do this</code></pre><table style="min-width: 75px"><colgroup><col style="min-width: 25px"><col style="min-width: 25px"><col style="min-width: 25px"></colgroup><tbody><tr><th colspan="1" rowspan="1">Or</th><th colspan="1" rowspan="1">a</th><th colspan="1" rowspan="1">table</th></tr><tr><td colspan="1" rowspan="1">With</td><td colspan="1" rowspan="1">random</td><td colspan="1" rowspan="1">content</td></tr><tr><td colspan="1" rowspan="1"></td><td colspan="1" rowspan="1"></td><td colspan="1" rowspan="1"></td></tr></tbody></table><hr class="horizontalRule"><h2>We can also have youtube videos</h2><tiptap-youtube src="https://www.youtube.com/watch?v=9HQx5pgUoiY" start="0" width="640" height="480"></tiptap-youtube><p></p>
`)
</script>
