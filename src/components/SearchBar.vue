<template>
  <div class="flex justify-center items-center">
    <div class="relative w-full max-w-lg">
      <input
        v-model="localSearchQuery"
        @input="updateSearchQuery"
        type="text"
        placeholder="Search..."
        class="bg-emerald-100 w-full py-3 px-6 text-emerald-500 text-xl font-semibold placeholder-emerald-500 rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-emerald-500"
      />
      <transition name="fade">
        <ul
          v-if="suggestions.length"
          class="absolute left-0 right-0 mt-2 text-emerald-500 text-xl bg-emerald-100 border border-emerald-500 rounded-lg shadow-lg z-10 overflow-hidden"
        >
          <li
            v-for="suggestion in suggestions"
            :key="suggestion"
            @click="selectSuggestion(suggestion)"
            class="py-2 px-4 cursor-pointer hover:bg-emerald-500 hover:text-white"
          >
            {{ suggestion }}
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineEmits, defineProps } from 'vue'

const emit = defineEmits(['update:searchQuery'])
const props = defineProps<{ searchQuery: string; suggestionsList: string[] }>()

const localSearchQuery = ref(props.searchQuery)
const suggestions = ref<string[]>([])

const updateSuggestions = () => {
  if (localSearchQuery.value) {
    suggestions.value = props.suggestionsList.filter(
      (suggestion) =>
        suggestion.toLowerCase().includes(localSearchQuery.value.toLowerCase()) &&
        suggestion.toLowerCase() !== localSearchQuery.value.toLowerCase()
    )
  } else {
    suggestions.value = []
  }
}

const updateSearchQuery = () => {
  emit('update:searchQuery', localSearchQuery.value)
  updateSuggestions()
}

const selectSuggestion = (suggestion: string) => {
  localSearchQuery.value = suggestion
  emit('update:searchQuery', suggestion)
  suggestions.value = []
}

watch(
  () => props.searchQuery,
  (newQuery) => {
    localSearchQuery.value = newQuery
    updateSuggestions()
  }
)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
