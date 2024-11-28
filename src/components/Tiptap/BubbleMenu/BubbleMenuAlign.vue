<template>
  <div class="relative">
    <button v-tooltip.top="'Align'" :class="{ isActive: expanded }" @click="handleToggleClick">
      <icon :name="selected" />
    </button>
    <Popover
      ref="panelRef"
      class="popover !w-auto"
      @hide="expanded = false"
      @show="expanded = true"
    >
      <div class="bubbleMenu">
        <button
          v-tooltip.top="'Align left'"
          :class="{ isActive: editor.isActive({ textAlign: 'left' }) }"
          @click="handleSelectAlign('left')"
        >
          <icon class="stroke-gray-100 fill-gray-100" name="align-left" />
        </button>
        <button
          v-tooltip.top="'Align center'"
          :class="{ isActive: editor.isActive({ textAlign: 'center' }) }"
          @click="handleSelectAlign('center')"
        >
          <icon class="stroke-gray-100 fill-gray-100" name="align-center" />
        </button>
        <button
          v-tooltip.top="'Align right'"
          :class="{ isActive: editor.isActive({ textAlign: 'right' }) }"
          @click="handleSelectAlign('right')"
        >
          <icon class="stroke-gray-100 fill-gray-100" name="align-right" />
        </button>
        <button
          v-tooltip.top="'Justify'"
          :class="{ isActive: editor.isActive({ textAlign: 'justify' }) }"
          @click="handleSelectAlign('justify')"
        >
          <icon class="stroke-gray-100 fill-gray-100" name="align-justify" />
        </button>
      </div>
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
const selected = ref('align-left')

const selectedNode = computed(() => {
  return props.editor.state.selection.node ?? props.editor.state.selection.$head.parent
})

watch(
  selectedNode,
  (value) => {
    selected.value = `align-${value.attrs.textAlign ?? 'left'}`
  },
  { deep: true, immediate: true }
)

const handleToggleClick = (event) => {
  panelRef.value.toggle(event)
}

const handleSelectAlign = (align) => {
  props.editor.chain().focus().setTextAlign(align).run()
  selected.value = `align-${align}`
}
</script>
