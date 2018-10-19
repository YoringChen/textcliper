import Vue from 'vue'
import { expect } from 'chai'
import cliper from '../../src'
import TextCliper from '../../src/cliper'

describe('[index.ts] 测试入口', (): void => {
  it('The export default is TextCliper instance', (): void => {
    expect(cliper).to.instanceOf(TextCliper)
  })

  it('The instance of TextCliper has TextCliper Class', (): void => {
    const cliperNew = new (cliper as any).TextCliper()

    expect(cliperNew).to.instanceOf(TextCliper)
  })

  it('window has TextCliper property for TextCliper instance', (): void => {
    expect(window.TextCliper).to.instanceOf(TextCliper);
  })

  it('TextCliper instance has Vue plugin install hook', (): void => {
    Vue.use(cliper)
    const vueInstance = new Vue()
    const directives = vueInstance.$options.directives || {}

    expect(typeof cliper.install === 'function').to.be.equal(true)
    expect(typeof vueInstance.$textclip === 'function').to.be.equal(true)
    expect('textclip' in directives).to.be.equal(true)
  })
})
