export const usePuzzlesStore = defineStore('puzzlesStore', () => {
  const tiles = ref<number[]>([])
  const shakeIndex = ref<number | null>(null)
  const isSolved = ref(false)
  const movesCount = ref(0)
  const time = ref(0)
  const slidingIndex = ref<number | null>(null)
  const slideDirection = ref<'left' | 'right' | 'up' | 'down' | null>(null)
  const scores = ref([])

  return {
    tiles,
    shakeIndex,
    isSolved,
    movesCount,
    time,
    slidingIndex,
    slideDirection,
    scores
  }
})

export function usePuzzles () {
  const store = usePuzzlesStore()

  return {
    ...store,
    ...storeToRefs(store)
  }
}
