<template>
  <div class="suggestionList">
    <template v-if="items.length">
      <button
        v-for="(item, index) in items"
        :key="item.id"
        :class="{ isHovered: index === selectedIndex }"
        class="suggestionListItem"
        @click="selectItem(item)"
      >
        {{ item.name }}
      </button>
    </template>
    <div v-else class="text-xs text-gray-60">No result</div>
  </div>
</template>

<script>
import { format } from 'date-fns'

export default {
  props: {
    items: {
      type: Array,
      required: true
    },

    command: {
      type: Function,
      required: true
    }
  },

  data() {
    return {
      selectedIndex: 0
    }
  },

  watch: {
    items() {
      this.selectedIndex = 0
    }
  },

  methods: {
    onKeyDown({ event }) {
      if (event.key === 'ArrowUp') {
        this.upHandler()
        return true
      }

      if (event.key === 'ArrowDown') {
        this.downHandler()
        return true
      }

      if (event.key === 'Enter') {
        this.enterHandler()
        return true
      }

      return false
    },

    upHandler() {
      this.selectedIndex = (this.selectedIndex + this.items.length - 1) % this.items.length
    },

    downHandler() {
      this.selectedIndex = (this.selectedIndex + 1) % this.items.length
    },

    enterHandler() {
      this.selectItem(this.selectedIndex)
    },

    selectItem(index) {
      const item = this.items[index]

      if (item) {
        this.command({
          id: item.id,
          label: item.name,
          timestamp: format(new Date(), 'y-MM-dd HH:mm:ss')
        })
      }
    }
  }
}
</script>

<style lang="scss">
.suggestionList {
  @apply grid border border-gray-15 rounded-lg p-2 gap-1 max-h-96 overflow-auto bg-white;
}

.suggestionListItem {
  @apply rounded-md p-2 text-sm text-gray-100 text-left w-full flex items-center;
  &:hover,
  &.isHovered {
    @apply bg-purple-10;
  }

  img {
    @apply h-4 mr-2;
  }
}
</style>
