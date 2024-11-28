<template>
  <node-view-wrapper class="tiptap-youtube">
    <div v-if="isValidYoutubeUrl" :style="{ textAlign: textAlign }">
      <iframe
        :height="height"
        :src="src"
        :width="width"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        frameborder="0"
        referrerpolicy="strict-origin-when-cross-origin"
        title="YouTube video player"
      ></iframe>
    </div>
    <div v-else class="tiptap-youtube-input">
      <Tabs class="tiptap-tabs" value="embed">
        <TabList>
          <Tab value="embed"> Embed</Tab>
        </TabList>
        <TabPanel value="embed">
          <form class="flex items-center gap-2" @submit.prevent="handleLinkSubmitted">
            <InputText v-model="url" class="grow" placeholder="Paste Youtube URL here" />
            <button class="btn btn--primary">Embed Video</button>
          </form>
          <span v-if="src && !isValidYoutubeUrl" class="text-destructive-100 block mt-2 text-xs"
            >Invalid YouTube URL</span
          >
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

const YOUTUBE_REGEX =
  /^(https?:\/\/)?(www\.|music\.)?(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(?!channel\/)(?!@)(.+)?$/

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
    isValidYoutubeUrl() {
      return this.node.attrs.src?.match(YOUTUBE_REGEX)
    },
    src() {
      return this.node.attrs.src
        ?.replace('youtube.com', 'youtube-nocookie.com')
        .replace('watch?v=', 'embed/')
    },
    width() {
      return this.node.attrs.width ?? 640
    },
    height() {
      return this.node.attrs.height ?? 480
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
    handleLinkSubmitted() {
      this.updateAttributes({ src: this.url })
    }
  }
}
</script>

<style lang="scss">
.tiptap-youtube {
  &-input {
    @apply p-2 border border-gray-15 rounded-lg;
  }

  iframe {
    @apply inline;
  }

  &.ProseMirror-selectednode {
    .tiptap-youtube-input,
    iframe {
      @apply border border-purple-100;
    }
  }
}
</style>
