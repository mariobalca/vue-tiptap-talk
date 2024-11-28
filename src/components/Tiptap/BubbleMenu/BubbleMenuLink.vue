<template>
  <div class="relative">
    <button v-tooltip.top="'Link'" @click="handleToggleClick">
      <icon class="stroke-gray-100 fill-gray-100" name="link" />
    </button>
    <button v-if="isLink" v-tooltip.top="'Unlink'" @click="handleUnsetLink">
      <icon class="stroke-gray-100 fill-gray-100" name="unlink" />
    </button>
    <Popover ref="panelRef" class="popover" @hide="expanded = false" @show="expanded = true">
      <form @submit.prevent="handleSetLink">
        <input v-model="url" placeholder="Type or paste the URL" type="text" />
      </form>
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
const url = ref('')

const handleToggleClick = (event) => {
  panelRef.value.toggle(event)
}

const isLink = computed(() => {
  return props.editor.isActive('link')
})

const handleSetLink = () => {
  props.editor.chain().focus().setLink({ href: url.value, target: '_blank' }).run()
}

const handleUnsetLink = () => {
  props.editor.chain().focus().unsetLink().run()
}

watch(isLink, () => {
  url.value = props.editor.getAttributes('link').href
})
</script>
