<template>
  <div class="relative">
    <button
      v-tooltip.top="'Table actions'"
      :class="{ isActive: expanded }"
      @click="handleToggleClick"
    >
      <icon color="gray-100" name="table" />
    </button>
    <Popover
      ref="panelRef"
      class="popover !w-auto"
      @hide="expanded = false"
      @show="expanded = true"
    >
      <ul class="p-2 gap-1 text-gray-100">
        <li
          v-if="editor.can().addColumnBefore()"
          class="p-2 text-sm rounded-md hover:bg-purple-10 cursor-pointer"
          @click="handleActionClick('addColumnBefore')"
        >
          Add column before
        </li>

        <li
          v-if="editor.can().addColumnAfter()"
          class="p-2 text-sm rounded-md hover:bg-purple-10 cursor-pointer"
          @click="handleActionClick('addColumnAfter')"
        >
          Add column after
        </li>

        <li
          v-if="editor.can().deleteColumn()"
          class="p-2 text-sm rounded-md hover:bg-purple-10 cursor-pointer"
          @click="handleActionClick('deleteColumn')"
        >
          Delete column
        </li>

        <li
          v-if="editor.can().addRowBefore()"
          class="p-2 text-sm rounded-md hover:bg-purple-10 cursor-pointer"
          @click="handleActionClick('addRowBefore')"
        >
          Add row before
        </li>

        <li
          v-if="editor.can().addRowAfter()"
          class="p-2 text-sm rounded-md hover:bg-purple-10 cursor-pointer"
          @click="handleActionClick('addRowAfter')"
        >
          Add row after
        </li>

        <li
          v-if="editor.can().deleteRow()"
          class="p-2 text-sm rounded-md hover:bg-purple-10 cursor-pointer"
          @click="handleActionClick('deleteRow')"
        >
          Delete row
        </li>

        <li
          v-if="editor.can().deleteTable()"
          class="p-2 text-sm rounded-md hover:bg-purple-10 cursor-pointer"
          @click="handleActionClick('deleteTable')"
        >
          Delete table
        </li>

        <li
          v-if="editor.can().mergeCells()"
          class="p-2 text-sm rounded-md hover:bg-purple-10 cursor-pointer"
          @click="handleActionClick('mergeCells')"
        >
          Merge cells
        </li>

        <li
          v-if="editor.can().splitCell()"
          class="p-2 text-sm rounded-md hover:bg-purple-10 cursor-pointer"
          @click="handleActionClick('splitCell')"
        >
          Split cell
        </li>

        <li
          v-if="editor.can().toggleHeaderCell()"
          class="p-2 text-sm rounded-md hover:bg-purple-10 cursor-pointer"
          @click="handleActionClick('toggleHeaderCell')"
        >
          Toggle header cell
        </li>

        <li
          v-if="editor.can().mergeOrSplit()"
          class="p-2 text-sm rounded-md hover:bg-purple-10 cursor-pointer"
          @click="handleActionClick('mergeOrSplit')"
        >
          Merge or split
        </li>
      </ul>
    </Popover>
  </div>
</template>

<script setup>
import Popover from 'primevue/popover'
import { ref } from 'vue'

const props = defineProps({
  editor: {
    type: Object,
    required: true
  }
})

const panelRef = ref()
const expanded = ref(false)

const handleToggleClick = (event) => {
  panelRef.value.toggle(event)
}

const handleActionClick = (action) => {
  props.editor.chain().focus()[action].call().run()
  handleToggleClick()
}
</script>
