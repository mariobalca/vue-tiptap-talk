export default {
  root: ({ props }) => ({
    class: [
      //Size and Shape
      'w-96 rounded-md',

      // Positioning
      { '-translate-x-2/4': props.position == 'top-center' || props.position == 'bottom-center' }
    ]
  }),
  message: ({ props }) => ({
    class: [
      'mb-2',
      'rounded-md w-full',
      'backdrop-blur-[10px] shadow-md',

      // Colors
      {
        'bg-gray-80': props.message.severity == 'info',
        'bg-success-100': props.message.severity == 'success',
        'bg-warning-100': props.message.severity == 'warn',
        'bg-destructive-100': props.message.severity == 'error'
      },
      'text-white'
    ]
  }),
  messageContent: ({ props }) => ({
    class: ['flex', 'items-center', 'basis-full', 'p-2']
  }),
  messageIcon: ({ props }) => ({
    class: [
      // Sizing and Spacing
      'w-4 h-4',
      'text-lg leading-none mr-2 shrink-0',
      'hidden'
    ]
  }),
  messageText: {
    class: [
      // Font and Text
      'flex',
      'items-center',
      'justify-between',
      'basis-full',
      'text-sm'
    ]
  },
  summary: {
    class: 'font-medium block'
  },
  detail: ({ props }) => ({
    class: ['block', { 'mt-2': props.message.summary }]
  }),
  closeButton: ({ props }) => ({
    class: [
      // Flexbox
      'flex items-center justify-center',

      // Size
      'w-4 h-4',

      // Spacing and Misc
      'ml-auto  relative',

      // Shape
      'rounded-full',

      // Colors
      'bg-transparent',

      // Transitions
      'transition duration-200 ease-in-out',

      // States
      'hover:bg-white/50',

      // Misc
      'overflow-hidden'
    ]
  }),
  transition: {
    enterFromClass: 'opacity-0 translate-y-2/4',
    enterActiveClass: 'transition-[transform,opacity] duration-300',
    leaveFromClass: 'max-h-[1000px]',
    leaveActiveClass:
      '!transition-[max-height_.45s_cubic-bezier(0,1,0,1),opacity_.3s,margin-bottom_.3s] overflow-hidden',
    leaveToClass: 'max-h-0 opacity-0 mb-0'
  }
}
