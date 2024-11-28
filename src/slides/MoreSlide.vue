<template>
  <section data-auto-animate="">
    <section class="center"><h3>What else can we do?</h3></section>
    <section class="center">
      <h3>Details</h3>
      <tiptap v-model="details" class="border border-gray-60 p-6 rounded" />
      <p>
        <a
          class="text-xl"
          target="_blank"
          href="https://tiptap.dev/docs/editor/extensions/nodes/details"
          >https://tiptap.dev/docs/editor/extensions/nodes/details</a
        >
      </p>
    </section>
    <section class="center">
      <h3>Tables</h3>
      <tiptap v-model="table" class="border border-gray-60 p-6 rounded" />
      <p>
        <a
          class="text-xl"
          target="_blank"
          href="https://tiptap.dev/docs/editor/extensions/nodes/table"
          >https://tiptap.dev/docs/editor/extensions/nodes/table</a
        >
      </p>
    </section>
    <section class="center">
      <h3>Emojis</h3>
      <tiptap v-model="emojis" class="border border-gray-60 p-6 rounded" />
      <p>
        <a
          class="text-xl"
          target="_blank"
          href="https://tiptap.dev/docs/editor/extensions/nodes/table"
          >https://tiptap.dev/docs/editor/extensions/nodes/table</a
        >
      </p>
    </section>
    <section class="center">
      <h3>And plenty more</h3>
      <p>
        <a class="text-xl" target="_blank" href="https://tiptap.dev/docs/editor/extensions/nodes"
          >https://tiptap.dev/docs/editor/extensions/nodes</a
        >
      </p>
    </section>
  </section>
</template>
<script setup lang="ts">
import Tiptap from '@/components/Tiptap/Tiptap.vue'
import { ref } from 'vue'

const details = ref(
  '<details class="collapsible"><summary>This is the details component title</summary><div data-type="detailsContent"><p>Which has this hidden content</p></div></details><p></p>'
)

const table = ref(
  '<table style="min-width: 75px"><colgroup><col style="min-width: 25px"><col style="min-width: 25px"><col style="min-width: 25px"></colgroup><tbody><tr><th colspan="1" rowspan="1">First name</th><th colspan="1" rowspan="1">Last name</th><th colspan="1" rowspan="1">Job title</th></tr><tr><td colspan="1" rowspan="1">John</td><td colspan="1" rowspan="1">Doe</td><td colspan="1" rowspan="1">Frontend Engineer</td></tr><tr><td colspan="1" rowspan="1">Jane</td><td colspan="1" rowspan="1">Doe</td><td colspan="1" rowspan="1">Product Manager</td></tr></tbody></table>'
)

const emojis = ref('🧑‍💻 🚀 🥳')
</script>
