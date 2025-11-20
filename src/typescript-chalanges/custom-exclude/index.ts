import type { TYarekExclude } from './types'

type TA = TYarekExclude<'a' | 'b' | 'c', 'a' | 'c'>

const test1: TA = 'b'
// const test2: TA = 'a'

console.log(test1)

