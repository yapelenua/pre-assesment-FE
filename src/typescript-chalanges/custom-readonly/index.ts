import type { TYarekReadonly } from './types'

interface ITodo {
  title: string
  description: string
}

const todo: TYarekReadonly<ITodo> = {
  title: 'Hey',
  description: 'foobar'
}

// todo.title = 'Hello'
// todo.description = 'barFoo'

console.log(todo)
