import { mergeAttributes } from '@tiptap/core'
import { VueNodeViewRenderer } from '@tiptap/vue-3'
import Youtube from '@tiptap/extension-youtube'

import Component from './YoutubeComponent.vue'

export default Youtube.extend({
  addAttributes() {
    return {
      ...this.parent()
    }
  },

  addCommands() {
    return {
      setYoutubeVideo:
        (options) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: options
          })
        }
    }
  },

  parseHTML() {
    return [
      {
        tag: 'tiptap-youtube'
      }
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['tiptap-youtube', mergeAttributes(HTMLAttributes)]
  },

  addNodeView() {
    return VueNodeViewRenderer(Component)
  }
})
