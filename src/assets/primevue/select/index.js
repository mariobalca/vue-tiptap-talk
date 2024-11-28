export default {
  root: ({ props, state, parent }) => ({
    class: [
      // Display and Position
      'inline-flex',
      'relative',

      // Shape
      'rounded-md',

      // Spacing
      'p-1',

      // Color and Background
      'bg-white',
      { 'border-gray-15 dark:border-surface-600': !props.invalid },

      // Invalid State
      { 'border-red-500 dark:border-red-400': props.invalid },

      // Transitions
      'transition-all',
      'duration-200',

      // States
      { 'hover:bg-gray-15': !props.invalid },
      { 'outline-none outline-offset-0 ring-0': state.focused },

      // Misc
      'cursor-pointer',
      'select-none',
      {
        'opacity-60': props.disabled,
        'pointer-events-none': props.disabled,
        'cursor-default': props.disabled
      }
    ]
  }),
  label: ({ props, parent }) => ({
    class: [
      //Font
      'font-sans',
      'leading-none',
      'text-sm',

      // Display
      'block',
      'flex-auto',

      // Color and Background
      'bg-transparent',
      'border-0',
      {
        'text-gray-60 dark:text-white/80': props.modelValue != undefined,
        'text-surface-400 dark:text-surface-500': props.modelValue == undefined
      },
      'placeholder:text-surface-400 dark:placeholder:text-surface-500',

      // Sizing and Spacing
      'pr-1',
      { 'pr-7': props.showClear },

      //Shape
      'rounded-none',

      // Transitions
      'transition',
      'duration-200',

      // States
      'focus:outline-none focus:shadow-none',

      // Misc
      'relative',
      'cursor-pointer',
      'overflow-hidden overflow-ellipsis',
      'whitespace-nowrap',
      'appearance-none'
    ]
  }),
  dropdown: {
    class: [
      // Flexbox
      'flex items-center justify-center',
      'shrink-0',

      // Color and Background
      'bg-transparent',
      'text-surface-500',

      // Size
      'w-2',

      // Shape
      'rounded-tr-md',
      'rounded-br-md'
    ]
  },
  overlay: {
    class: [
      // Position
      'absolute top-0 left-0',

      // Shape
      'border',
      'rounded-lg',
      'shadow-md',

      // Color
      'bg-white',
      'border-gray-15',
      'text-gray-100'
    ]
  },
  listContainer: {
    class: [
      // Sizing
      'max-h-[200px]',

      // Misc
      'overflow-auto'
    ]
  },
  list: {
    class: 'p-2 list-none m-0'
  },
  option: ({ context }) => ({
    class: [
      // Font
      'font-normal',
      'text-sm',
      'leading-none',

      // Position
      'relative',

      // Shape
      'border-0',
      'rounded-md',

      // Spacing
      'm-0',
      'p-2',

      // Color
      {
        'text-gray-100 dark:text-gray-100/80':
          !context.focused && !context.selected && !context.disabled
      },
      {
        'text-gray-100 dark:text-gray-100/70':
          !context.focused && !context.selected && context.disabled
      },
      {
        'bg-purple-10 text-gray-100': context.focused && !context.selected
      },
      {
        'bg-purple-10 text-purple-100': context.focused && context.selected
      },
      {
        'bg-white text-purple-100': !context.focused && context.selected
      },

      //States
      {
        'hover:bg-purple-10': !context.focused && !context.selected
      },
      {
        'hover:text-gray-100 hover:bg-purple-10': context.focused && !context.selected
      },
      'focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring focus-visible:ring-inset focus-visible:ring-primary-400/50 dark:focus-visible:ring-primary-300/50',

      // Transitions
      'transition-shadow',
      'duration-200',

      // Misc
      { 'pointer-events-none cursor-default': context.disabled },
      { 'cursor-pointer': !context.disabled },
      'overflow-hidden',
      'whitespace-nowrap'
    ]
  }),
  optionGroup: {
    class: [
      //Font
      'font-bold',

      // Spacing
      'm-0',
      'py-3 px-5',

      // Color
      'text-gray-100 dark:text-white/80',
      'bg-white dark:bg-surface-600/80',

      // Misc
      'cursor-auto'
    ]
  },
  optionCheckIcon: 'relative -ms-1.5 me-1.5 text-surface-700 dark:text-white/80 w-4 h-4',
  optionBlankIcon: 'w-4 h-4',
  emptyMessage: {
    class: [
      // Font
      'leading-none',

      // Spacing
      'py-3 px-5',

      // Color
      'text-gray-100 dark:text-white/80',
      'bg-transparent'
    ]
  },
  header: {
    class: [
      // Spacing
      'py-3 px-5',
      'm-0',

      //Shape
      'border-b',
      'rounded-tl-md',
      'rounded-tr-md',

      // Color
      'text-gray-100',
      'bg-white',
      'border-gray-15'
    ]
  },
  clearIcon: {
    class: [
      // Color
      'text-gray-60',

      // Position
      'absolute',
      'top-1/2',
      'right-12',

      // Spacing
      '-mt-2'
    ]
  },
  loadingIcon: {
    class: 'text-surface-400 dark:text-surface-500 animate-spin'
  },
  transition: {
    enterFromClass: 'opacity-0 scale-y-[0.8]',
    enterActiveClass:
      'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
    leaveActiveClass: 'transition-opacity duration-100 ease-linear',
    leaveToClass: 'opacity-0'
  }
}
