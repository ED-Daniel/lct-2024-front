<template>
  <div class="video-item w-full h-[650px] mb-4 flex flex-col rounded-lg overflow-hidden shadow-lg">
    <div class="video-content bg-emerald-100 w-full h-[500px]">
      <!-- Здесь будет ваше видео -->
    </div>
    <div class="video-description bg-emerald-500 text-white w-full h-[200px] flex flex-col p-4">
      <Description
        :avatar-src="avatarSrc"
        :last-comment="lastComment"
        :video-description="videoDescription"
        :video-title="videoTitle"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Description from './Description.vue'

import { defineProps } from 'vue'

const props = defineProps<{
  videoTitle: string
  avatarSrc: string
  videoDescription: string
  lastComment: string
}>()
</script>

<style scoped>
/* Дополнительные стили, если нужны */
</style>
