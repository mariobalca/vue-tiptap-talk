export default {
  root: {
    class: [
      // Shape
      'rounded-lg',

      // Size
      'min-w-[12rem]',
      'p-2',

      // Colors
      'bg-white',
      'border border-gray-15'
    ]
  },
  rootList: {
    class: [
      // Spacings and Shape
      'list-none',
      'm-0',
      'p-0',
      'outline-none'
    ]
  },
  item: {
    class: [
      // Position
      'relative',
      'text-sm'
    ]
  },
  itemContent: ({ context }) => ({
    class: [
      //Shape
      'rounded-md',

      //  Colors
      'text-gray-100',

      // Hover States
      {
        'hover:bg-purple-10': !context.active,
        'hover:bg-purple-10 text-gray-100': context.active
      },

      // Transitions
      'transition-shadow',
      'duration-200'
    ]
  }),
  itemLink: {
    class: [
      'relative',
      // Flexbox

      'flex',
      'items-center',

      // Spacing
      'py-2',
      'px-2',

      // Color
      'text-gray-100',

      // Misc
      'no-underline',
      'overflow-hidden',
      'cursor-pointer',
      'select-none'
    ]
  },
  itemIcon: {
    class: [
      // Spacing
      'mr-2',

      // Color
      'text-gray-80'
    ]
  },
  itemLabel: {
    class: ['leading-none']
  },
  submenuIcon: {
    class: [
      // Position
      'ml-auto'
    ]
  },
  submenu: {
    class: [
      // Size
      'w-full sm:w-48',

      // Spacing
      'py-1',
      'm-0',
      'list-none',

      // Shape
      'shadow-none sm:shadow-md',
      'border-0',

      // Position
      'static sm:absolute',
      'z-10',

      // Color
      'bg-white'
    ]
  },
  separator: {
    class: 'border-t border-gray-15 my-1'
  },
  transition: {
    enterFromClass: 'opacity-0',
    enterActiveClass: 'transition-opacity duration-250'
  }
}
