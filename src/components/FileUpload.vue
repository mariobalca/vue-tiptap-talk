<template>
  <div
    :class="$style.fileUpload"
    :data-active="active"
    @dragenter.prevent="setActive"
    @dragover.prevent="setActive"
    @dragleave.prevent="setInactive"
    @drop.prevent="handleDrop"
  >
    <input
      id="fileUploadInput"
      ref="inputRef"
      :accept="computedMimeTypes"
      class="hidden"
      multiple
      type="file"
      @change="handleUpload"
    />
    <p v-if="!active">
      Drag and drop file here or
      <label
        ref="inputLabelRef"
        class="text-purple-100 underline cursor-pointer font-medium"
        for="fileUploadInput"
      >Upload here</label
      >
    </p>
    <p v-else class="text-purple-100">Drop it</p>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

const emit = defineEmits(['file-uploaded'])

const props = defineProps({
  entityType: {
    type: String,
    required: true
  },
  entityId: {
    type: String,
    required: true
  },
  visibility: {
    type: String,
    default: 'private'
  },
  mimeTypes: {
    type: Array,
    default: () => []
  }
})

const active = ref(false)
const inputRef = ref(null)
const inputLabelRef = ref(null)
let inActiveTimeout = null

const computedMimeTypes = computed(() => {
  return props.mimeTypes.join(', ') ?? undefined
})

defineExpose({
  inputLabelRef
})

const setActive = () => {
  active.value = true
  clearTimeout(inActiveTimeout)
}

const setInactive = () => {
  active.value = false
  inActiveTimeout = setTimeout(() => {
    active.value = false
  }, 50)
}

const handleDrop = (e) => {
  setInactive()
  e.dataTransfer.files.forEach((file) => uploadFile(file))
}

const handleUpload = (e) => {
  e.target.files.forEach((file) => uploadFile(file))

  inputRef.value = null
}

const uploadFile = async (file) => {
  emit('file-uploaded', { url: URL.createObjectURL(file) })
}

function preventDefaults(e) {
  e.preventDefault()
}

const events = ['dragenter', 'dragover', 'dragleave', 'drop']

onMounted(() => {
  events.forEach((eventName) => {
    document.body.addEventListener(eventName, preventDefaults)
  })
})

onUnmounted(() => {
  events.forEach((eventName) => {
    document.body.removeEventListener(eventName, preventDefaults)
  })
})
</script>

<style lang="scss" module>
.fileUpload {
  @apply min-h-10 p-2 bg-gray-0 rounded-lg border border-gray-15 border-dashed flex items-center justify-center transition-all text-sm;
  &[data-active='true'] {
    @apply basis-full bg-purple-10;
  }
}
</style>
