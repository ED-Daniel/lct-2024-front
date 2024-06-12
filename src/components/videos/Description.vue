<template>
  <div class="flex items-center mb-4 h-[95px]">
    <div class="w-16 h-16 mr-4 rounded-full overflow-hidden flex-shrink-0">
      <img :src="avatarSrc" alt="Avatar" class="w-16 h-16 object-cover" />
    </div>
    <div class="overflow-hidden">
      <h2 class="text-lg font-bold truncate">{{ videoTitle }}</h2>
      <p class="text-sm font-light truncate">{{ videoDescription }}</p>
    </div>
  </div>
  <div class="last-comment mt-auto h-[45px]">
    <h3 class="text-md font-semibold">Last comment</h3>
    <p class="text-sm font-light truncate">{{ lastComment }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  videoTitle: string
  avatarSrc: string
  videoDescription: string
  lastComment: string
}>()
</script>
