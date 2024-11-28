<template>
  <div class="relative flex items-center">
    <button v-tooltip.top="'Replace image'" @click="handleReplaceImage">
      <icon class="stroke-gray-100 fill-gray-100" name="photo" />
    </button>
    <span class="separator"></span>
    <button v-tooltip.top="'Link'" @click="handleToggleClick">
      <icon class="stroke-gray-100 fill-gray-100" name="link" />
    </button>
    <button v-if="isLink" v-tooltip.top="'Unlink'" @click="handleUnsetLink">
      <icon class="stroke-gray-100 fill-gray-100" name="unlink" />
    </button>
    <Popover ref="panelRef" class="popover" @hide="expanded = false" @show="expanded = true">
      <form @submit.prevent="handleSetLink">
        <InputText v-model="url" placeholder="Type or paste the URL" type="text" />
      </form>
    </Popover>
  </div>
</template>
<script setup>
import Popover from 'primevue/popover'
import InputText from 'primevue/inputtext'
import { computed, ref, watch } from 'vue'

const props = defineProps({
  editor: {
    type: Object,
    required: true
  }
})

const panelRef = ref()
const expanded = ref(false)
const url = ref(null)

const handleToggleClick = (event) => {
  panelRef.value.toggle(event)
}

const isLink = computed(() => {
  return props.editor.getAttributes('image').href
})

const handleReplaceImage = () => {
  props.editor.chain().focus().updateAttributes('image', { src: undefined }).run()
}
const handleSetLink = () => {
  props.editor.chain().focus().updateAttributes('image', { href: url.value }).run()
}
const handleUnsetLink = () => {
  props.editor.chain().focus().updateAttributes('image', { href: undefined }).run()
}

watch(
  isLink,
  (newValue) => {
    url.value = newValue
  },
  { immediate: true }
)
</script>
