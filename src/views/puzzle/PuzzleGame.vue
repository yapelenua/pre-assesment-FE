<template>
  <div class="flex flex-col items-center gap-4 font-sans h-full justify-center bg-blue-300">
    <h2 class="text-5xl font-bold italic text-white">Puzzle Game</h2>

    <div class="flex gap-[60px]">
      <div class="flex flex-col items-center gap-4 bg-sky-950 p-10 rounded-2xl">
        <div class="flex w-full justify-between">
          <div class="bg-blue-300 h-10 flex items-center justify-center text-white rounded-lg px-10">
            {{ formatTime(time) }}
          </div>
          <div
            class="bg-blue-300 h-10 flex items-center
        justify-center text-white rounded-lg px-10 slide"
          >
            Moves: {{ movesCount }}
          </div>
        </div>

        <div class="grid grid-cols-4 grid-rows-4 gap-[6px]">
          <Tile />
        </div>

        <button
          class="bg-blue-300 hover:bg-blue-400 text-white font-bold py-2 px-4
        rounded-lg w-full cursor-pointer transition-all duration-300"
          @click="init"
        >
          New game
        </button>

        <p v-if="isSolved" class="text-green-600 font-bold text-lg">
          🎉 You win!
        </p>
      </div>

      <ScoreList />
    </div>

    <button
      class="bg-blue-900 hover:bg-blue-400 text-white font-bold py-2 px-4
      rounded-lg w-[200px] cursor-pointer transition-all duration-300"
      @click="$router.push('/separator-example')"
    >
      Go to Separator page
    </button>
  </div>
</template>

<script setup lang="ts">
import JSConfetti from 'js-confetti'
import { formatTime } from '@/helpers/global-helpers'

const {
  movesCount,
  isSolved,
  tiles,
  time
} = usePuzzles()

const { resetTimer, startTimer, stopTimer } = useTimer(time)
const { saveScore } = useStorage()
const { shuffleTiles, isSolvable } = usePuzzle()
const size = 4
const jsConfetti = new JSConfetti()

async function init () {
  resetTimer()
  movesCount.value = 0
  isSolved.value = false

  tiles.value = []

  await nextTick()

  tiles.value = Array.from({ length: size * size - 1 }, (_, i) => i + 1)
  tiles.value.push(0)

  // const oneMoveTiles =
  //   [
  //     1, 2, 3, 4,
  //     5, 6, 7, 8,
  //     9, 10, 11, 12,
  //     13, 14, 0, 15
  //   ]

  // tiles.value = oneMoveTiles

  do {
    shuffleTiles()
  } while (!isSolvable())

  startTimer()
}

watch(isSolved, (value) => {
  if (value) {
    stopTimer()
    saveScore()
    jsConfetti.addConfetti()
  }
})

init()
</script>
