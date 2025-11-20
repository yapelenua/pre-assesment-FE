import type { TYarekTupleToObject } from './types'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type TResult = TYarekTupleToObject<typeof tuple>

const obj: TResult = {
  tesla: 'tesla',
  'model 3': 'model 3',
  'model X': 'model X',
  'model Y': 'model Y'
}

console.log(obj, tuple)
