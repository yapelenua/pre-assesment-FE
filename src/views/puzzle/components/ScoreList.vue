<template>
  <div class="flex flex-col gap-2">
    <h2 class="text-white text-xl font-bold">Best Scores</h2>

    <div
      v-for="(score, i) in scores.slice(0, 2)"
      :key="i"
      class="bg-blue-400 text-white px-4 py-2 rounded-lg flex justify-between"
    >
      <span>{{ i + 1 }}.</span>
      <span>{{ formatTime(score.time) }} ({{ score.moves }} moves)</span>
      <span>{{ new Date(score.date).toLocaleString() }}</span>
    </div>
  </div>
</template>

<script setup>
import { formatTime } from '@/helpers/global-helpers'

const { scores } = useStorage()
</script>
