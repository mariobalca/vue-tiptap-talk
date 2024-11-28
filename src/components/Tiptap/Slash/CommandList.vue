<template>
  <div class="suggestionList">
    <template v-if="items.length">
      <div v-for="(item, index) in items" :key="index">
        <p v-if="item.group" class="suggestionListTitle">{{ item.group }}</p>
        <button
          :id="`option-${index}`"
          :class="{ isHovered: index === selectedIndex }"
          class="suggestionListItem"
          @click="selectItem(index)"
        >
          <icon :name="item.icon" class="mr-1 h-4 w-4" color="gray-50" />
          <span>{{ item.title }}</span>
        </button>
      </div>
    </template>
    <div v-else class="text-xs text-gray-60">No result</div>
  </div>
</template>

<script>
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
      this.$el
        .querySelector('#option-' + this.selectedIndex)
        .scrollIntoView({ behaviour: 'smooth', block: 'end' })
    },

    downHandler() {
      this.selectedIndex = (this.selectedIndex + 1) % this.items.length
      this.$el
        .querySelector('#option-' + this.selectedIndex)
        .scrollIntoView({ behaviour: 'smooth', block: 'end' })
    },

    enterHandler() {
      this.selectItem(this.selectedIndex)
    },

    selectItem(index) {
      const item = this.items[index]

      if (item) {
        this.command(item)
      }
    }
  }
}
</script>

<style lang="scss">
.suggestionList {
  @apply grid border border-gray-15 rounded-lg p-2 gap-1 max-h-96 overflow-auto bg-white;
}

.suggestionListTitle {
  @apply rounded-lg p-2 text-xs text-gray-60;
}

.suggestionListItem {
  @apply rounded-md p-2 text-sm text-gray-100 text-left w-full flex items-center;
  &:hover,
  &.isHovered {
    @apply bg-purple-10;
  }
}
</style>
