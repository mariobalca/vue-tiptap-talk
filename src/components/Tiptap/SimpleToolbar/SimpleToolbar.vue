<template>
  <div class="flex items-center justify-between mt-4">
    <div class="flex items-center gap-1">
      <button
        class="h-6 w-6 flex items-center justify-center"
        type="button"
        @click="handleEmojiClick"
      >
        <icon name="emoji" />
      </button>
      <label
        :for="`${id}_imageUpload`"
        class="h-6 w-6 flex items-center justify-center cursor-pointer"
      >
        <icon name="photo" />
      </label>
      <input
        :id="`${id}_imageUpload`"
        ref="simpleFileInputRef"
        accept="image/gif, image/png, image/jpeg"
        class="hidden"
        type="file"
        @change="handleSimpleInputChange"
      />
    </div>
    <button
      :disabled="btnDisabled"
      class="btn btn--secondary"
      type="button"
      @click="$emit('submit')"
    >
      {{ btnLabel }}
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  id: {
    type: String,
    default: null
  },
  editor: {
    type: Object,
    required: true
  },
  btnLabel: {
    type: String,
    default: 'Save'
  },
  btnDisabled: {
    type: Boolean,
    default: true
  },
  entityId: {
    type: String,
    default: null
  },
  entityType: {
    type: String,
    default: null
  }
})

defineEmits(['submit'])

const simpleFileInputRef = ref()

const handleEmojiClick = () => {
  props.editor.chain().focus().insertContent(' :').run()
}

const handleSimpleInputChange = async (e) => {
  await uploadFile(e.target.files[0])
  simpleFileInputRef.value = null
}

const uploadFile = async (file) => {
  props.editor.chain().focus().setImage({ src: URL.createObjectURL(file) }).run()
}
</script>
