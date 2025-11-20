export function useTimer (time: Ref<number>) {
  let timerId: ReturnType<typeof setInterval> | null = null

  function startTimer () {
    if (timerId !== null) return
    timerId = setInterval(() => {
      time.value++
    }, 1000)
  }

  function stopTimer () {
    if (timerId !== null) {
      clearInterval(timerId)
      timerId = null
    }
  }

  function resetTimer () {
    stopTimer()
    time.value = 0
  }

  onBeforeUnmount(() => {
    console.log('here')
    stopTimer()
  })

  return {
    time,
    startTimer,
    stopTimer,
    resetTimer
  }
}
