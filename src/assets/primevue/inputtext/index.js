export default {
  root: ({ props, context, parent }) => ({
    class: [
      // Font
      'font-sans leading-none text-sm',

      // Flex
      { 'flex-1 w-[1%]': parent.instance.$name == 'InputGroup' },

      // Spacing
      'm-0',
      {
        'px-4 py-4': props.size == 'large',
        'px-2 py-2': props.size == 'small',
        'p-3': props.size == null
      },

      // Shape
      { 'rounded-lg': parent.instance.$name !== 'InputGroup' },
      {
        'first:rounded-l-md rounded-none last:rounded-r-md': parent.instance.$name == 'InputGroup'
      },
      { 'border-0 border-y border-l last:border-r': parent.instance.$name == 'InputGroup' },
      { 'first:ml-0 -ml-px': parent.instance.$name == 'InputGroup' && !props.showButtons },

      // Colors
      'text-gray-100',
      'placeholder:text-gray-60',
      'bg-white',
      'border',
      { 'border-gray-15': !props.invalid },

      // States
      {
        'hover:border-gray-30': !context.disabled && !props.invalid,
        'focus:outline-none focus:outline-offset-0 focus:ring-0 focus:ring-gray-80/50 focus:border-purple-80 focus:shadow-sm':
          !context.disabled,
        'opacity-60 select-none pointer-events-none cursor-default': context.disabled
      },

      // Filled State *for FloatLabel
      { filled: parent.instance?.$name == 'FloatLabel' && context.filled },

      // Misc
      'appearance-none',
      'transition-colors duration-200'
    ]
  })
}
