export type TYarekTupleToObject<T extends readonly any[]> = {
  [key in T[number]]: key
}
