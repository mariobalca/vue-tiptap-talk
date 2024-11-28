<template>
  <div class="relative">
    <button
      v-tooltip.top="'Text type'"
      :class="{ isActive: expanded }"
      class="flex items-center"
      @click="handleToggleClick"
    >
      <span class="text-sm text-gray-100">{{ selected }}</span>
      <icon class="ml-1" name="chevron-down" />
    </button>
    <Popover
      ref="panelRef"
      class="popover !w-auto"
      @hide="expanded = false"
      @show="expanded = true"
    >
      <ul class="p-2 gap-1 text-gray-100">
        <li
          class="p-2 text-sm rounded-md hover:bg-purple-10 cursor-pointer"
          @click="handleSelectNode('heading', { level: 1 })"
        >
          Heading 1
        </li>
        <li
          class="p-2 text-sm rounded-md hover:bg-purple-10 cursor-pointer"
          @click="handleSelectNode('heading', { level: 2 })"
        >
          Heading 2
        </li>
        <li
          class="p-2 text-sm rounded-md hover:bg-purple-10 cursor-pointer"
          @click="handleSelectNode('heading', { level: 3 })"
        >
          Heading 3
        </li>
        <li
          class="p-2 text-sm rounded-md hover:bg-purple-10 cursor-pointer"
          @click="handleSelectNode('paragraph')"
        >
          Text
        </li>
      </ul>
    </Popover>
  </div>
</template>

<script setup>
import Popover from 'primevue/popover'
import { computed, ref, watch } from 'vue'

const props = defineProps({
  editor: {
    type: Object,
    required: true
  }
})

const panelRef = ref()
const expanded = ref(false)
const selected = ref('Text')

const handleToggleClick = (event) => {
  panelRef.value.toggle(event)
}

const handleSelectNode = (node, options) => {
  props.editor.chain().focus().setNode(node, options).run()
}

const selectedNode = computed(() => {
  return props.editor.state.selection.$head.parent
})

watch(
  selectedNode,
  (value) => {
    let typeName = 'Text'
    let level = ''

    switch (value.type.name) {
      case 'heading':
        typeName = 'Heading'
        level = ` ${props.editor.getAttributes('heading').level}`
        break
    }

    selected.value = `${typeName}${level}`
  },
  { deep: true, immediate: true }
)
</script>
