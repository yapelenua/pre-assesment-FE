import type { TYarekPush } from './types'

type TTest = TYarekPush<[1, 2], '5'>

const test1: TTest = [1, 2, '5']

console.log(test1)
