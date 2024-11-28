export default {
  root: ({ props }) => ({
    class: [
      // Display and Position
      {
        flex: props.fluid,
        'inline-flex': !props.fluid
      },
      'max-w-full',
      'relative',

      // Misc
      { 'opacity-60 select-none pointer-events-none cursor-default': props.disabled }
    ]
  }),
  pcInput: ({ props, parent }) => ({
    root: {
      class: [
        // Display
        'flex flex-auto',

        // Font
        'font-sans leading-none',

        // Colors
        'text-gray-100 dark:text-surface-200',
        'placeholder:text-surface-400 dark:placeholder:text-gray-60',
        'bg-white dark:bg-surface-900',
        'border',
        { 'border-surface-300 dark:border-gray-100': !props.invalid },

        // Invalid State
        { 'border-red-500 dark:border-red-400': props.invalid },

        // Spacing
        'm-0 p-2',

        // Shape
        'appearance-none',
        { 'rounded-md': !props.showIcon || props.iconDisplay == 'input' },
        { 'rounded-l-md  flex-1 pr-9': props.showIcon && props.iconDisplay !== 'input' },
        { 'rounded-md flex-1 pr-9': props.showIcon && props.iconDisplay === 'input' },

        // Transitions
        'transition-colors',
        'duration-200',

        // States
        { 'hover:border-primary-500 dark:hover:border-primary-400': !props.invalid },
        'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-500/50 dark:focus:ring-primary-400/50'
      ]
    }
  }),
  dropdownIcon: {
    class: ['absolute top-[50%] -mt-2', 'text-gray-100 dark:text-surface-200', 'right-[.75rem]']
  },
  dropdown: {
    class: [
      'relative',

      // Alignments
      'items-center inline-flex text-center align-bottom',

      // Shape
      'rounded-r-md',

      // Size
      'px-4 py-3 leading-none',

      // Colors
      'text-white',
      'bg-primary-500',
      'border border-primary-500',

      // States
      'focus:outline-none focus:outline-offset-0 focus:ring',
      'hover:bg-primary-600 hover:border-primary-600',
      'focus:ring-primary-400/50'
    ]
  },
  inputIconContainer: 'absolute cursor-pointer top-1/2 right-3 -mt-3',
  inputIcon: 'inline-block text-base',
  panel: ({ props }) => ({
    class: [
      // Display & Position
      {
        absolute: !props.inline,
        'inline-block': props.inline
      },

      // Size
      { 'w-auto': !props.inline },
      { 'min-w-[80vw] w-auto p-2 ': props.touchUI },
      { 'p-0 w-full max-w-2xs': props.inline },

      // Shape
      'border border-gray-15 rounded-lg',
      {
        'shadow-md': !props.inline
      },

      // Colors
      'bg-white',
      'border-surface-200',

      //misc
      { 'overflow-x-auto': props.inline }
    ]
  }),
  header: {
    class: [
      //Font
      'font-medium',

      // Flexbox and Alignment
      'flex items-center justify-between',

      // Spacing
      'p-2',
      'm-0',

      // Shape
      'border-b',
      'rounded-t-md',

      // Colors
      'border-gray-15',
      'text-surface-700',
      'bg-white',
      'border-surface-200'
    ]
  },
  previousButton: {
    class: [
      'relative',

      // Flexbox and Alignment
      'inline-flex items-center justify-center',

      // Size
      'w-6 h-6',
      'p-0 m-0',

      // Shape
      'rounded-full',

      // Colors
      'text-gray-100 dark:text-white/70',
      'border border-transparent',
      'bg-transparent',

      // Transitions
      'transition-colors duration-200 ease-in-out',

      // States
      'hover:text-purple-100 dark:hover:text-white/80',
      'hover:bg-purple-10 dark:hover:bg-surface-800/80',
      'hover:border-purple-100',

      // Misc
      'cursor-pointer overflow-hidden'
    ]
  },
  nextButton: {
    class: [
      'relative',

      // Flexbox and Alignment
      'inline-flex items-center justify-center',

      // Size
      'w-6 h-6',
      'p-0 m-0',

      // Shape
      'rounded-full',

      // Colors
      'text-gray-100 dark:text-white/70',
      'border border-transparent',
      'bg-transparent',

      // Transitions
      'transition-colors duration-200 ease-in-out',

      // States
      'hover:text-purple-100 dark:hover:text-white/80',
      'hover:bg-purple-10 dark:hover:bg-surface-800/80',
      'hover:border-purple-100',

      // Misc
      'cursor-pointer overflow-hidden'
    ]
  },
  title: {
    class: [
      // Text
      'text-sm',
      'leading-1',
      'mx-auto my-0'
    ]
  },
  selectMonth: {
    class: [
      // Font
      'text-sm leading-1',
      'font-medium',

      // Colors
      'text-gray-100',

      // Transitions
      'transition duration-200',

      // Spacing
      'px-2 py-1',
      'm-0',

      // Border
      'border border-transparent rounded-md',

      // States
      'hover:text-purple-100 hover:border-purple-100 hover:bg-purple-10',

      // Misc
      'cursor-pointer'
    ]
  },
  selectYear: {
    class: [
      // Font
      'text-sm leading-1',
      'font-medium',

      // Colors
      'text-gray-100 dark:text-white/80',

      // Transitions
      'transition duration-200',

      // Spacing
      'px-2 py-1',
      'm-0',

      // Border
      'border border-transparent rounded-md',

      // States
      'hover:text-purple-100 dark:hover:text-primary-400',
      'hover:border-purple-100',
      'hover:bg-purple-10',

      // Misc
      'cursor-pointer'
    ]
  },
  table: {
    class: [
      // Font
      'text-sm leading-none',
      // Size & Shape
      'border-collapse',

      // Spacing
      'my-2 mx-auto'
    ]
  },
  tableHeaderCell: {
    class: [
      // Spacing
      'p-0 md:p-2 font-medium'
    ]
  },
  weekHeader: {
    class: ['leading-5', 'text-gray-100 dark:text-white/70', 'opacity-60 cursor-default']
  },
  weekNumber: {
    class: ['text-gray-100 dark:text-white/70', 'opacity-60 cursor-default']
  },
  weekday: {
    class: [
      // Colors
      'text-gray-60 text-xs dark:text-white/60'
    ]
  },
  dayCell: {
    class: [
      // Spacing
      'p-0'
    ]
  },
  weekLabelContainer: {
    class: [
      // Flexbox and Alignment
      'flex items-center justify-center',
      'mx-auto',

      // Shape & Size
      'w-8 h-8',
      'rounded-full',
      'border-transparent border',
      'leading-[normal]',

      // Colors
      'opacity-60 cursor-default'
    ]
  },
  dayView: 'w-full',
  day: ({ context }) => ({
    class: [
      // Flexbox and Alignment
      'flex items-center justify-center',
      'mx-auto',

      // Shape & Size
      'w-8 h-8 font-light',
      'text-sm',
      'rounded-md',
      'border border-transparent',

      // Colors
      {
        'text-purple-100 dark:text-primary-400': context.date.today,
        'text-gray-100 dark:text-white/70 bg-transparent':
          !context.selected && !context.disabled && !context.date.today,
        'text-purple-100 !border-purple-100 dark:text-surface-0 dark:bg-primary-300/40':
          context.selected && !context.disabled
      },

      // States
      'focus:outline-none focus:outline-offset-0 dark:focus:ring-primary-300/50',
      {
        'hover:text-purple-100 hover:border-purple-100 hover:bg-purple-10 dark:hover:bg-gray-100/80':
          !context.selected && !context.disabled,
        'hover:text-purple-100 hover:border-purple-100 hover:bg-purple-10 dark:hover:bg-primary-200/40':
          context.selected && !context.disabled
      },
      {
        'text-gray-40 cursor-default': context.disabled,
        'cursor-pointer': !context.disabled
      }
    ]
  }),
  monthView: {
    class: [
      // Spacing
      'my-2'
    ]
  },
  month: ({ context }) => ({
    class: [
      // Flexbox and Alignment
      'inline-flex items-center justify-center',

      // Size
      'w-1/3',
      'py-1',
      'text-sm',

      // Shape
      'rounded-md',

      // Border
      'border border-transparent',

      // Colors
      {
        'text-gray-100 dark:text-white/70 bg-transparent': !context.selected && !context.disabled,
        'border-purple-100 text-purple-100 dark:text-surface-0 dark:bg-primary-300/40':
          context.selected && !context.disabled
      },

      // States
      'focus:outline-none focus:outline-offset-0 dark:focus:ring-primary-300/50',
      {
        'hover:border-purple-100 hover:text-purple-100 hover:bg-purple-10 dark:hover:bg-gray-100/80':
          !context.selected && !context.disabled,
        'hover:border-purple-100 hover:text-purple-100 hover:bg-purple-10 dark:hover:bg-primary-200/40':
          context.selected && !context.disabled
      },

      // Misc
      'cursor-pointer'
    ]
  }),
  yearView: {
    class: [
      // Spacing
      'my-2'
    ]
  },
  year: ({ context }) => ({
    class: [
      // Flexbox and Alignment
      'inline-flex items-center justify-center',

      // Size
      'w-1/3',
      'py-1',
      'text-sm',

      // Shape
      'rounded-md',

      // Border
      'border border-transparent',

      // Colors
      {
        'text-gray-100 dark:text-white/70 bg-transparent': !context.selected && !context.disabled,
        'text-purple-100 border-purple-100 dark:text-surface-0 dark:bg-primary-300/40':
          context.selected && !context.disabled
      },

      // States
      'focus:outline-none focus:outline-offset-0 dark:focus:ring-primary-300/50',
      {
        'hover:border-purple-100 hover:text-purple-100 hover:bg-purple-10 dark:hover:bg-gray-100/80':
          !context.selected && !context.disabled,
        'hover:border-purple-100 hover:text-purple-100 hover:bg-purple-10 dark:hover:bg-primary-200/40':
          context.selected && !context.disabled
      },

      // Misc
      'cursor-pointer'
    ]
  }),
  timePicker: {
    class: [
      // Flexbox
      'flex',
      'justify-center items-center',

      // Borders
      'border-t-1',
      'border-solid border-gray-15',

      // Spacing
      'p-2'
    ]
  },
  separatorContainer: {
    class: [
      // Flexbox and Alignment
      'flex',
      'items-center',
      'flex-col',

      // Spacing
      'px-2'
    ]
  },
  separator: {
    class: [
      // Text
      'text-xl'
    ]
  },
  hourPicker: {
    class: [
      // Flexbox and Alignment
      'flex',
      'items-center',
      'flex-col',

      // Spacing
      'px-2'
    ]
  },
  minutePicker: {
    class: [
      // Flexbox and Alignment
      'flex',
      'items-center',
      'flex-col',

      // Spacing
      'px-2'
    ]
  },
  secondPicker: {
    class: [
      // Flexbox and Alignment
      'flex',
      'items-center',
      'flex-col',

      // Spacing
      'px-2'
    ]
  },
  ampmPicker: {
    class: [
      // Flexbox and Alignment
      'flex',
      'items-center',
      'flex-col',

      // Spacing
      'px-2'
    ]
  },
  calendarContainer: 'flex',
  calendar: 'flex-auto border-l first:border-l-0 border-surface-200',
  buttonbar: {
    class: [
      // Flexbox
      'flex justify-between items-center',

      // Spacing
      'py-3 px-0',

      // Shape
      'border-t border-surface-200 dark:border-surface-700'
    ]
  },
  transition: {
    enterFromClass: 'opacity-0 scale-y-[0.8]',
    enterActiveClass:
      'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
    leaveActiveClass: 'transition-opacity duration-100 ease-linear',
    leaveToClass: 'opacity-0'
  }
}
