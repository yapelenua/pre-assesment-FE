export function useStorage () {
  const { movesCount, time, scores } = usePuzzles()

  function saveScore () {
    const list = JSON.parse(localStorage.getItem('score') || '[]')

    list.push({
      time: time.value,
      moves: movesCount.value,
      date: Date.now()
    })

    list.sort((a: { time: number }, b: { time: number }) => a.time - b.time)

    localStorage.setItem('score', JSON.stringify(list))

    scores.value = list
  }

  function getScores () {
    scores.value = JSON.parse(localStorage.getItem('score') || '[]')
    return scores
  }

  return {
    saveScore,
    getScores,
    scores
  }
}
