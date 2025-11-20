
import { swap } from '@/helpers/global-helpers'

export function usePuzzle () {
  const { tiles, shakeIndex, isSolved, movesCount, slidingIndex, slideDirection } = usePuzzles()

  const size = 4

  function slideTile (
    { tileX, tileY, emptyX, emptyY }: { tileX: number; tileY: number; emptyX: number; emptyY: number },
    index: number
  ) {
    if (tileX < emptyX) slideDirection.value = 'right'
    else if (tileX > emptyX) slideDirection.value = 'left'
    else if (tileY < emptyY) slideDirection.value = 'down'
    else if (tileY > emptyY) slideDirection.value = 'up'

    slidingIndex.value = index

    setTimeout(() => {
      slidingIndex.value = null
      slideDirection.value = null
    }, 150)
  }

  function moveTile (index: number) {
    if (isSolved.value) return

    const emptyIndex = tiles.value.indexOf(0)

    const { x: tileX, y: tileY } = getTilePosition(index)
    const { x: emptyX, y: emptyY } = getTilePosition(emptyIndex)

    const canMove = Math.abs(tileX - emptyX) + Math.abs(tileY - emptyY) === 1

    if (!canMove) {
      shakeIndex.value = index
      setTimeout(() => (shakeIndex.value = null), 300)
      return
    }

    slideTile({ tileX, tileY, emptyX, emptyY }, index)

    swap(emptyIndex, index, tiles.value)

    isSolved.value = tiles.value.slice(0, 15).every((val, i) => val === i + 1)

    movesCount.value++
  }

  function shuffleTiles () {
    for (let i = tiles.value.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))

      swap(i, j, tiles.value)
    }
  }

  const getTilePosition = (index: number) => {
    const x = index % size
    const y = Math.floor(index / size)
    return { x, y }
  }

  function isCorrectPosition (index: number, tile: number) {
    if (tile === 0) return false
    return tile === index + 1
  }

  function isSolvable () {
    const emptyIndex = tiles.value.indexOf(0)

    const inversions = tiles.value.reduce((total, current, i) => {
      if (current === 0) return total
      const smallerToRight = tiles.value
        .slice(i + 1)
        .filter(n => n !== 0 && n < current).length
      return total + smallerToRight
    }, 0)

    const { y: emptyY } = getTilePosition(emptyIndex)
    const emptyFromBottom = size - emptyY

    return (inversions + emptyFromBottom) % 2 === 1
  }

  return {
    moveTile,
    shuffleTiles,
    getTilePosition,
    isCorrectPosition,
    isSolvable
  }
}
