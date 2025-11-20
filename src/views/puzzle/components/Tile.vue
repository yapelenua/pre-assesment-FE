<template>
  <div
    v-for="(tile, index) in tiles"
    :key="index"
    class="flex items-center justify-center text-white text-3xl
          font-bold rounded-lg cursor-pointer transition p-8"
    :class="[
      tile === 0
        ? 'bg-gray-200 cursor-default'
        : isCorrectPosition(index, tile)
          ? 'bg-orange-500 hover:bg-orange-600'
          : 'bg-cyan-600 hover:bg-cyan-700',

      (shakeIndex === index && tile !== 0) ? 'animate-shake' : '',
      slidingIndex === index ? `slide-${slideDirection}` : ''
    ]"
    @click="moveTile(index)"
  >
    <span v-if="tile !== 0">{{ tile }}</span>
  </div>
</template>
<script setup lang="ts">

const {
  tiles,
  shakeIndex,
  slidingIndex,
  slideDirection
} = usePuzzles()

const { moveTile, isCorrectPosition } = usePuzzle()
</script>
