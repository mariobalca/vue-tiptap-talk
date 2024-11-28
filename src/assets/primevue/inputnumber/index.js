export default {
  root: ({ props, parent }) => ({
    class: [
      // Flex
      'inline-flex',
      { 'flex-col': props.showButtons && props.buttonLayout == 'vertical' },
      { 'flex-1 w-[1%]': parent.instance.$name == 'InputGroup' },

      // Shape
      {
        'first:rounded-l-md rounded-none last:rounded-r-md':
          parent.instance.$name == 'InputGroup' && !props.showButtons
      },
      {
        'border-0 border-y border-l last:border-r border-surface-300 dark:border-surface-600':
          parent.instance.$name == 'InputGroup' && !props.showButtons
      },
      { 'first:ml-0 -ml-px': parent.instance.$name == 'InputGroup' && !props.showButtons },

      //Sizing
      { '!w-16': props.showButtons && props.buttonLayout == 'vertical' }
    ]
  }),
  pcInput: {
    root: ({ parent, context }) => ({
      class: [
        // Display
        'flex flex-auto',

        // Font
        'font-sans leading-none text-sm',

        //Text
        { 'text-center': parent.props.showButtons && parent.props.buttonLayout == 'vertical' },

        // Spacing
        'p-1',
        'm-0',

        // Shape
        'rounded-lg',
        { 'rounded-tr-none rounded-br-none': parent.props.showButtons },
        {
          'rounded-tl-none rounded-bl-none':
            parent.props.showButtons && parent.props.buttonLayout == 'horizontal'
        },
        { 'rounded-none': parent.props.showButtons && parent.props.buttonLayout == 'vertical' },

        {
          '!rounded-none':
            parent.instance.$parentInstance?.$name == 'InputGroup' && !parent.props.showButtons
        },
        {
          'border-0':
            parent.instance.$parentInstance?.$name == 'InputGroup' && !parent.props.showButtons
        },

        // Colors
        'text-gray-100',
        'placeholder:text-gray-50',
        'border border-gray-15 outline-none ring-none',

        // Invalid State
        { 'border-red-500 dark:border-red-400': parent.props.invalid },

        // States
        'focus:outline-none focus:ring-0 focus:border-purple-80 focus:shadow-sm',
        { 'opacity-60 select-none pointer-events-none cursor-default': context.disabled },

        // Filled State *for FloatLabel
        { filled: parent.instance?.$name == 'FloatLabel' && context.filled },

        //Position
        {
          'order-2':
            parent.props.buttonLayout == 'horizontal' || parent.props.buttonLayout == 'vertical'
        }
      ]
    })
  },
  buttonGroup: ({ props }) => ({
    class: [
      'absolute',

      // Flex
      'flex',
      'flex-col',

      'top-px right-px',

      { 'h-[calc(100%-2px)]': props.showButtons && props.buttonLayout === 'stacked' }
    ]
  }),
  incrementButton: ({ props }) => ({
    class: [
      // Display
      { 'flex flex-initial shrink-0': props.showButtons && props.buttonLayout === 'horizontal' },
      { 'flex flex-auto': props.showButtons && props.buttonLayout === 'stacked' },

      // Alignment
      'items-center',
      'justify-center',
      'text-center align-bottom',

      //Position
      'relative',
      { 'order-3': props.showButtons && props.buttonLayout === 'horizontal' },
      { 'order-1': props.showButtons && props.buttonLayout === 'vertical' },

      //Color
      'text-surface-800 dark:text-surface-0',
      'bg-transparent',
      { 'dark:bg-surface-900': props.showButtons && props.buttonLayout !== 'stacked' },
      'border border-surface-300 dark:border-surface-700',
      { 'border-0': props.showButtons && props.buttonLayout === 'stacked' },
      {
        'border-l-0':
          props.showButtons &&
          props.buttonLayout !== 'stacked' &&
          props.buttonLayout === 'horizontal'
      },
      {
        'border-b-0':
          props.showButtons && props.buttonLayout !== 'stacked' && props.buttonLayout === 'vertical'
      },

      // Sizing
      'w-[3rem]',
      { 'px-3 py-2': props.showButtons && props.buttonLayout !== 'stacked' },
      { 'p-0': props.showButtons && props.buttonLayout === 'stacked' },
      { 'w-full': props.showButtons && props.buttonLayout === 'vertical' },

      // Shape
      'rounded-md',
      { 'rounded-md': props.showButtons && props.buttonLayout == 'stacked' },
      {
        'rounded-bl-none rounded-tl-none': props.showButtons && props.buttonLayout === 'horizontal'
      },
      { 'rounded-bl-none rounded-br-none': props.showButtons && props.buttonLayout === 'vertical' },

      //States
      'hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]',

      //Misc
      'cursor-pointer overflow-hidden select-none'
    ]
  }),
  incrementIcon: 'inline-block w-4 h-4',
  decrementButton: ({ props }) => ({
    class: [
      // Display
      { 'flex flex-initial shrink-0': props.showButtons && props.buttonLayout === 'horizontal' },
      { 'flex flex-auto': props.showButtons && props.buttonLayout === 'stacked' },

      // Alignment
      'items-center',
      'justify-center',
      'text-center align-bottom',

      //Position
      'relative',
      { 'order-1': props.showButtons && props.buttonLayout === 'horizontal' },
      { 'order-3': props.showButtons && props.buttonLayout === 'vertical' },

      //Color
      'text-surface-800 dark:text-surface-0',
      'bg-transparent',
      { 'dark:bg-surface-900': props.showButtons && props.buttonLayout !== 'stacked' },
      'border border-surface-300 dark:border-surface-700',
      { 'border-0': props.showButtons && props.buttonLayout === 'stacked' },
      {
        'border-r-0':
          props.showButtons &&
          props.buttonLayout !== 'stacked' &&
          props.buttonLayout === 'horizontal'
      },
      {
        'border-t-0':
          props.showButtons && props.buttonLayout !== 'stacked' && props.buttonLayout === 'vertical'
      },

      // Sizing
      'w-[3rem]',
      { 'px-3 py-2': props.showButtons && props.buttonLayout !== 'stacked' },
      { 'p-0': props.showButtons && props.buttonLayout === 'stacked' },
      { 'w-full': props.showButtons && props.buttonLayout === 'vertical' },

      // Shape
      'rounded-md',
      {
        'rounded-tr-none rounded-tl-none rounded-bl-none':
          props.showButtons && props.buttonLayout === 'stacked'
      },
      {
        'rounded-tr-none rounded-br-none ': props.showButtons && props.buttonLayout === 'horizontal'
      },
      {
        'rounded-tr-none rounded-tl-none ': props.showButtons && props.buttonLayout === 'vertical'
      },

      //States
      'hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]',

      //Misc
      'cursor-pointer overflow-hidden select-none'
    ]
  }),
  decrementIcon: 'inline-block w-4 h-4'
}
