import type { TYarekConcat } from './types'

type TResult = TYarekConcat<[1], [2]>

const test1: TResult = [1, 2]

console.log(test1)
