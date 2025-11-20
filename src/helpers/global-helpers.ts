export function swap (index1: number, index2: number, tiles: number[]) {
  const t1 = tiles[index1]
  const t2 = tiles[index2]

  if (t1 == null || t2 == null) return

  tiles[index1] = t2
  tiles[index2] = t1
}

export function formatTime (seconds: number): string {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60

  const mm = m.toString().padStart(2, '0')
  const ss = s.toString().padStart(2, '0')

  return `${mm}:${ss}`
}
