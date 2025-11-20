import type { TYarekFirst } from './types'

type TArr1 = ['a', 'b', 'c']
type TArr2 = [3, 2, 1]

// type TTest = 'a' | 'b' | 'c'

type THead1 = TYarekFirst<TArr1>
type THead2 = TYarekFirst<TArr2>

const head1: THead1 = 'a'
const head2: THead2 = 3
// const head3: THead1 = 'b'

console.log(head1, head2)
