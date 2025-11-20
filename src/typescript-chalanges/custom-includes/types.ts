export type TYarekIncludes<T extends any[], U> = U extends T[number] ? true : false
