import Vue from 'vue'
import cliper from '../../src'
import TextCliper from '../../src/cliper'

test('The export default is TextCliper instance', (): void => {
  expect(cliper).toBeInstanceOf(TextCliper);
})

test('The instance of TextCliper has TextCliper Class', (): void => {
  const cliperNew = new (cliper as any).TextCliper()

  expect(cliperNew).toBeInstanceOf(TextCliper)
})

test('window has TextCliper property for TextCliper instance', (): void => {
  expect(window.TextCliper).toBeInstanceOf(TextCliper);
})

test('TextCliper instance has Vue plugin install hook', (): void => {
  Vue.use(cliper)
  const vueInstance = new Vue()
  const directives = vueInstance.$options.directives || {}

  expect(typeof cliper.install === 'function').toBe(true);
  expect(typeof vueInstance.$textclip === 'function').toBe(true);
  expect('textclip' in directives).toBe(true);
})
