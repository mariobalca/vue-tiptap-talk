import { mergeAttributes } from '@tiptap/core'
import { VueNodeViewRenderer } from '@tiptap/vue-3'
import Image from '@tiptap/extension-image'

import Component from './ImageComponent.vue'

export default Image.extend({
  addAttributes() {
    return {
      ...this.parent(),
      width: null,
      href: null
    }
  },

  parseHTML() {
    return [
      {
        tag: 'tiptap-image'
      }
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['tiptap-image', mergeAttributes(HTMLAttributes)]
  },

  addNodeView() {
    return VueNodeViewRenderer(Component)
  }
})
