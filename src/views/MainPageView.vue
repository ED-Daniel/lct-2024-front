<template>
  <div class="search-box-container w-full h-40 flex justify-center">
    <div class="search-box w-[500px] h-full flex flex-col justify-center">
      <SearchBar v-model:searchQuery="searchQuery" :suggestionsList="videoTitles" />
    </div>
  </div>
  <div class="w-full">
    <transition-group
      name="fade"
      tag="div"
      class="video-grid-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center p-4"
    >
      <VideoItem
        v-for="(video, index) in filteredVideos"
        :key="index"
        :videoTitle="video.title"
        :avatarSrc="video.avatarSrc"
        :videoDescription="video.description"
        :lastComment="video.lastComment"
      />
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import SearchBar from '@/components/SearchBar.vue'
import VideoItem from '@/components/videos/VideoItem.vue'
import { computed, ref } from 'vue'

const searchQuery = ref<string>('')

const videos = ref([
  {
    title: 'Amazing Vue 3 Tutorial',
    avatarSrc: '/images/image-mock.jpeg',
    description: 'Learn Vue 3 step by step in this amazing tutorial.',
    lastComment: 'This tutorial is really helpful, thanks!'
  },
  {
    title: 'Understanding Reactivity in Vue',
    avatarSrc: '/images/image-mock.jpeg',
    description: 'Deep dive into reactivity system in Vue.',
    lastComment: 'The explanation is very clear, great job!'
  },
  {
    title: 'Building a To-Do App with Vue',
    avatarSrc: '/images/image-mock.jpeg',
    description: 'Follow along to build a complete to-do app with Vue.',
    lastComment: 'I manage state in Vue!'
  },
  {
    title: 'Vue Router Basics',
    avatarSrc: '/images/image-mock.jpeg',
    description: 'Learn the basics of Vue Router for building single-page applications.',
    lastComment: 'This is exactly what I needed, thanks!'
  },
  {
    title: 'State Management with Vuex',
    avatarSrc: '/images/image-mock.jpeg',
    description: 'Master state management in Vue applications using Vuex.',
    lastComment: 'Vuex is now much clearer to me!'
  },
  {
    title: 'Deploying Vue Apps',
    avatarSrc: '/images/image-mock.jpeg',
    description: 'Learn how to deploy your Vue applications.',
    lastComment: 'The deployment was very easy.'
  },
  {
    title: 'Vuetify for Better UI',
    avatarSrc: '/images/image-mock.jpeg',
    description: 'Enhance your Vue apps with Vuetify components.',
    lastComment: 'Vuetify looks amazing, thanks for the intro!'
  },
  {
    title: 'Nuxt.js for Server-Side Rendering',
    avatarSrc: '/images/image-mock.jpeg',
    description: 'Learn how to use Nuxt.js for server-side rendering in Vue.',
    lastComment: 'Nuxt.js makes SSR so much easier!'
  }
])

const videoTitles = computed(() => videos.value.map((video) => video.title))

const filteredVideos = computed(() => {
  return videos.value.filter((video) =>
    video.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})
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
