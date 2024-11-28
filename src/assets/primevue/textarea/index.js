export default {
  root: ({ context, props, parent }) => ({
    class: [
      // Font
      'font-sans leading-5',

      // Spacing
      'm-0',
      'py-1.5 px-3',

      // Shape
      'rounded-md',

      // Colors
      'text-gray-100',
      'placeholder:text-gray-60',
      'bg-white',
      'border',
      { 'border-gray-15': !props.invalid },

      // Invalid State
      { 'border-red-500 dark:border-red-400': props.invalid },

      // States
      {
        'hover:border-gray-30': !context.disabled && !props.invalid,
        'focus:outline-none focus:outline-offset-0 focus:ring-0 focus:ring-gray-80/50 focus:border-purple-80 focus:shadow-sm':
          !context.disabled,
        'opacity-60 select-none pointer-events-none cursor-default': context.disabled
      },

      // Filled State *for FloatLabel
      {
        filled:
          parent.instance?.$name == 'FloatLabel' &&
          props.modelValue !== null &&
          props.modelValue?.length !== 0
      },

      // Misc
      'appearance-none',
      'transition-colors duration-200'
    ]
  })
}
