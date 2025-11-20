import type { TYarekIf } from './types'

type TA = TYarekIf<true, 'a', 'b'>
type TB = TYarekIf<false, 'a', 'b'>

const test1: TA = 'a'
const test2: TB = 'b'

console.log(test1, test2)
