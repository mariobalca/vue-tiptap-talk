<template>
  <node-view-wrapper class="tiptap-image">
    <div v-if="src" :style="{ textAlign: textAlign }">
      <a :href="href" target="_blank">
        <img :alt="alt" :src="src" :style="{ width: width }" :title="title" />
      </a>
    </div>
    <div v-else class="tiptap-image-input">
      <Tabs class="tiptap-tabs" value="upload">
        <TabList>
          <Tab value="upload"> Upload</Tab>
          <Tab value="embed"> Embed</Tab>
        </TabList>
        <TabPanel value="upload">
          <div class="h-16">
            <FileUpload
              :entity-id="entityId"
              :entity-type="entityType"
              :mime-types="['image/jpeg', 'image/png', 'image/gif']"
              class="!h-full"
              visibility="public"
              @file-uploaded="handleFileUploaded"
            />
          </div>
        </TabPanel>
        <TabPanel value="embed">
          <form class="flex items-center gap-2" @submit.prevent="handleLinkSubmitted">
            <InputText v-model="url" class="grow" placeholder="Paste image URL here" />
            <button class="btn btn--primary">Embed image</button>
          </form>
        </TabPanel>
      </Tabs>
    </div>
  </node-view-wrapper>
</template>

<script>
import InputText from 'primevue/inputtext'
import Tabs from 'primevue/tabs'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanel from 'primevue/tabpanel'
import { nodeViewProps, NodeViewWrapper } from '@tiptap/vue-3'
import FileUpload from '@/components/FileUpload.vue'

export default {
  components: {
    FileUpload,
    InputText,
    Tabs,
    Tab,
    TabList,
    TabPanel,
    NodeViewWrapper
  },

  props: nodeViewProps,

  computed: {
    src() {
      return this.node.attrs.src
    },
    alt() {
      return this.node.attrs.alt
    },
    title() {
      return this.node.attrs.title
    },
    href() {
      return this.editor.isEditable ? undefined : this.node.attrs.href
    },
    width() {
      return this.node.attrs.width
    },
    entityId() {
      return this.extension.options.entityId
    },
    entityType() {
      return this.extension.options.entityType
    },
    textAlign() {
      return this.node.attrs.textAlign
    }
  },

  data() {
    return {
      url: null
    }
  },

  methods: {
    handleFileUploaded(file) {
      this.updateAttributes({ src: file.url })
    },
    handleLinkSubmitted() {
      this.updateAttributes({ src: this.url })
    }
  }
}
</script>

<style lang="scss">
.tiptap-image {
  img {
    @apply inline max-w-full;
  }

  .tiptap-image-input {
    @apply p-2 border border-gray-15 rounded-lg;
  }

  &.ProseMirror-selectednode {
    .tiptap-image-input,
    img {
      @apply border border-purple-100;
    }
  }
}
</style>
