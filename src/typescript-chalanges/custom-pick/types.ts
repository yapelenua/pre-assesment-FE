export type TYarekPick <T, K extends keyof T> = {
  [key in K]: T[key]
}
