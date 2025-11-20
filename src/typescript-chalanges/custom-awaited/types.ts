export type TYarekAwaited<T> = T extends Promise<infer U> ? U : never
