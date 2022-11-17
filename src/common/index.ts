import { isNumber } from './utils'
// this will normal in building
// import { isString } from '@vueuse/core'
// this will error in building
import { isString } from 'unocss'

export function test() {
  console.log('test', isNumber(0), isString('isString'))
}