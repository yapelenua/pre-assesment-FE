import type { TYarekAwaited } from './types'

type TExampleType = Promise<string>

type TResult = TYarekAwaited<TExampleType>

const test1: TResult = 'test'

console.log(test1)
