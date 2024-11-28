import { VueRenderer } from '@tiptap/vue-3'
import tippy from 'tippy.js'

import CommandsList from './CommandList.vue'

export default {
  items: ({ query }) => {
    return [
      {
        title: 'H1',
        command: ({ editor, range }) => {
          editor.chain().focus().deleteRange(range).setHeading({ level: 1 }).run()
        },
        icon: 'heading',
        group: 'Basic'
      },
      {
        title: 'H2',
        command: ({ editor, range }) => {
          editor.chain().focus().deleteRange(range).setHeading({ level: 2 }).run()
        },
        icon: 'heading'
      },
      {
        title: 'H3',
        command: ({ editor, range }) => {
          editor.chain().focus().deleteRange(range).setHeading({ level: 3 }).run()
        },
        icon: 'heading'
      },
      {
        title: 'Text',
        command: ({ editor, range }) => {
          editor.chain().focus().deleteRange(range).setParagraph().run()
        },
        icon: 'text'
      },
      {
        title: 'Bulleted List',
        command: ({ editor, range }) => {
          editor.chain().focus().deleteRange(range).toggleBulletList().run()
        },
        icon: 'list'
      },
      {
        title: 'Numbered List',
        command: ({ editor, range }) => {
          editor.chain().focus().deleteRange(range).toggleOrderedList().run()
        },
        icon: 'ordered-list'
      },
      {
        title: 'Quote',
        command: ({ editor, range }) => {
          editor.chain().focus().deleteRange(range).setBlockquote().run()
        },
        icon: 'quote'
      },
      {
        title: 'Collapsible',
        command: ({ editor, range }) => {
          editor.chain().focus().deleteRange(range).setDetails().run()
        },
        icon: 'arrow-down-circle'
      },
      {
        title: 'Table',
        command: ({ editor, range }) => {
          editor.chain().focus().deleteRange(range).insertTable({ rows: 3, cols: 3 }).run()
        },
        icon: 'table'
      },
      {
        title: 'Codeblock',
        command: ({ editor, range }) => {
          editor.chain().focus().deleteRange(range).setCodeBlock().run()
        },
        icon: 'code'
      },
      {
        title: 'Divider',
        command: ({ editor, range }) => {
          editor.chain().focus().deleteRange(range).setHorizontalRule().run()
        },
        icon: 'divider'
      },
      {
        title: 'Mention',
        command: ({ editor, range }) => {
          editor.chain().focus().deleteRange(range).insertContent('@').run()
        },
        icon: 'at'
      },
      {
        title: 'Emoji',
        command: ({ editor, range }) => {
          editor.chain().focus().deleteRange(range).insertContent(':').run()
        },
        icon: 'emoji'
      },
      {
        title: 'Image',
        command: ({ editor, range }) => {
          editor.chain().focus().deleteRange(range).setImage().run()
        },
        icon: 'photo',
        group: 'Media'
      },
      {
        title: 'Video',
        command: ({ editor, range }) => {
          editor.chain().focus().deleteRange(range).setYoutubeVideo().run()
        },
        icon: 'play'
      }
    ].filter((item) => item.title.toLowerCase().startsWith(query.toLowerCase()))
  },

  render: () => {
    let component
    let popup

    return {
      onStart: (props) => {
        component = new VueRenderer(CommandsList, {
          props,
          editor: props.editor
        })

        if (!props.clientRect) {
          return
        }

        popup = tippy('body', {
          getReferenceClientRect: props.clientRect,
          appendTo: () => document.body,
          content: component.element,
          showOnCreate: true,
          interactive: true,
          trigger: 'manual',
          placement: 'bottom-start'
        })
      },

      onUpdate(props) {
        component.updateProps(props)

        if (!props.clientRect) {
          return
        }

        popup[0].setProps({
          getReferenceClientRect: props.clientRect
        })
      },

      onKeyDown(props) {
        if (props.event.key === 'Escape') {
          popup[0].hide()

          return true
        }

        return component.ref?.onKeyDown(props)
      },

      onExit() {
        popup[0].destroy()
        component.destroy()
      }
    }
  }
}
