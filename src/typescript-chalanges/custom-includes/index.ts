import type { TYarekIncludes } from './types'

type TIsPillarMen = TYarekIncludes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>

const test1: TIsPillarMen = false

console.log(test1)
