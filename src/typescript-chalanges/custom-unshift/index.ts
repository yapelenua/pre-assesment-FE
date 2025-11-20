import type { TYarekUnshift } from './types'

type TTest = TYarekUnshift<[1, 2], 0>

const test1: TTest = [0, 1, 2]

console.log(test1)
