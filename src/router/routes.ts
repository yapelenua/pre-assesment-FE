import type { RouteRecordRaw } from 'vue-router'
import { routeNames } from './route-names'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },
  {
    path: '/',
    name: routeNames.home,
    component: () => import('@/views/puzzle/PuzzleGame.vue')
  },
  {
    path: '/separator-example',
    name: routeNames.separatorExample,
    component: () => import('@/views/separator-examle/RootSeparatorExamle.vue')
  }
]

export {
  routes
}
