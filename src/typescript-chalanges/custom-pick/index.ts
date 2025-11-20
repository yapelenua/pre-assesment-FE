import type { TYarekPick } from './types'

interface ITodo {
  title: string
  description: string
  completed: boolean
}

type TTodopreview = TYarekPick<ITodo, 'title' | 'completed'>

const todo: TTodopreview = {
  title: 'Clean room',
  completed: false
}

console.log(todo)
