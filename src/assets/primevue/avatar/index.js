export default {
  root: ({ props, parent }) => ({
    class: [
      // Font
      {
        'text-xs': props.size === 'small',
        'text-sm': props.size === null || props.size === 'normal',
        'text-xl': props.size === 'large',
        'text-2xl': props.size === 'xlarge'
      },

      // Alignments
      'inline-flex items-center justify-center',
      'relative',

      // Sizes
      {
        'h-4 w-4': props.size === 'small',
        'h-6 w-6': props.size === null || props.size === 'normal',
        'w-10 h-10': props.size === 'large',
        'w-16 h-16': props.size === 'xlarge'
      },
      { '-ml-3': parent.instance.$style?.name === 'avatargroup' },

      // Shapes
      {
        'rounded-md': props.shape === 'square',
        'rounded-full': props.shape === 'circle'
      },
      { 'border-2': parent.instance.$style?.name === 'avatargroup' },

      // Colors
      { 'border-white': parent.instance.$style?.name === 'avatargroup' }
    ]
  }),
  image: ({ props }) => ({
    class: [
      'h-full w-full',
      {
        'rounded-md': props.shape === 'square',
        'rounded-full': props.shape === 'circle'
      }
    ]
  })
}
