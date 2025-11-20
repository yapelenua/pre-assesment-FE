import type { TYarekLength } from './types'

type TTesla = ['tesla', 'model 3', 'model X', 'model Y']
type TSpaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type TTeslaLength = TYarekLength<TTesla>
type TSpaceXLength = TYarekLength<TSpaceX>

const test1: TTeslaLength = 4
const test2: TSpaceXLength = 5

console.log(test1, test2)
