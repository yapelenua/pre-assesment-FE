import type { TYarekParameters } from './types'

const foo = (arg1: string, arg2: number): void => {
  console.log(arg1, arg2)
}

type TFunctionParamsType = TYarekParameters<typeof foo>

const test1: TFunctionParamsType = ['a', 1]

foo('lala', 1)

console.log(test1)
