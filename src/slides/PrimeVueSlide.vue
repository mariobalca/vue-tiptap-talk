<template>
  <section>
    <section class="center">
      <h3>PrimeVue</h3>
    </section>
    <section class="">
      <h3>PrimeVue</h3>
      <img
        src="/img/primevue-website.png"
        alt="primevue-website"
        height="500"
        style="border-radius: 8px"
      />
      <a target="_blank" href="https://tailwind.primevue.org/" style="font-size: 1rem"
        >https://tailwind.primevue.org/</a
      >
    </section>
    <section class="text-xl">
      <p>card/index.js</p>
      <pre class="javascript">
        <code data-trim data-noescape>
          export default {
            root: {
              class: [
                //Flex
                'flex flex-col',

                //Shape
                'rounded-[12px]',
                'shadow-md',

                //Color
                'bg-surface-0 dark:bg-surface-900',
                'text-surface-700 dark:text-surface-0'
              ]
            },
            body: {
              class: [
                //Flex
                'flex flex-col',
                'gap-4',

                'p-6'
              ]
            },
            caption: {
              class: [
                //Flex
                'flex flex-col',
                'gap-2'
              ]
            },
            title: {
              class: 'text-xl font-semibold mb-0'
            },
            subtitle: {
              class: [
                //Font
                'font-normal',

                //Spacing
                'mb-0',

                //Color
                'text-surface-600 dark:text-surface-0/60'
              ]
            },
            content: {
              class: 'p-0'
            },
            footer: {
              class: 'p-0'
            }
          };
        </code>
      </pre>
    </section>
  </section>
</template>
<script setup lang="ts"></script>
