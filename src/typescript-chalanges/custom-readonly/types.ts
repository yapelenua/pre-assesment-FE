export type TYarekReadonly<T> = {
  readonly [key in keyof T]: T[key]
}
