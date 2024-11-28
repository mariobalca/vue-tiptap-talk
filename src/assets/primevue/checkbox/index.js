export default {
  root: {
    class: [
      'relative',

      // Alignment
      'inline-flex',
      'align-bottom',

      // Size
      'w-4',
      'h-4',

      // Color
      'text-white',

      // Misc
      'cursor-pointer',
      'select-none'
    ]
  },
  box: ({ props, context }) => ({
    class: [
      // Alignment
      'flex',
      'items-center',
      'justify-center',

      // Size
      'w-4',
      'h-4',

      // Shape
      'rounded',
      'border',

      // Colors
      {
        'border-gray-15 bg-white': !context.checked && !props.invalid,
        'border-purple-100 bg-purple-100': context.checked
      },

      // Invalid State
      { 'border-red-500 dark:border-red-400': props.invalid },

      // States
      {
        'peer-hover:border-purple-100': !props.disabled && !context.checked && !props.invalid,
        'peer-hover:bg-purple-100 peer-hover:border-purple-100': !props.disabled && context.checked,
        'peer-focus-visible:border-purple-100 peer-focus-visible:ring-2 peer-focus-visible:ring-purple-100/20 ':
          !props.disabled,
        'cursor-default opacity-60': props.disabled
      },

      // Transitions
      'transition-colors',
      'duration-200'
    ]
  }),
  input: {
    class: [
      'peer',

      // Size
      'w-full ',
      'h-full',

      // Position
      'absolute',
      'top-0 left-0',
      'z-10',

      // Spacing
      'p-0',
      'm-0',

      // Shape
      'opacity-0',
      'rounded-sm',
      'outline-none',
      'border-1 border-gray-15',

      // Misc
      'appearance-none',
      'cursor-pointer'
    ]
  },
  icon: ({ context, state }) => ({
    class: [
      // Font
      'text-base leading-none',

      // Size
      'w-4',
      'h-4',

      // Colors
      'text-white',

      // Transitions
      'transition-all',
      'duration-200'
    ]
  })
}
