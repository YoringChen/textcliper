import { expect } from 'chai'
import Cliper from '../../src/cliper'
import Element from '../../src/element'

describe('[cliper.ts] 测试 Cliper 模块', (): void => {
  it('The export default is Cliper class', (): void => {
    const cliper = new Cliper()

    expect(cliper).to.be.instanceOf(Cliper);
  })

  it('check instance property', (): void => {
    const div = document.createElement('div')
    const cliper = new Cliper(div)

    expect(cliper).to.have.property('_el')
    expect(cliper).to.have.property('_element')
    expect(cliper).to.have.property('_lines')
    expect(cliper).to.have.property('_sign')
    expect(cliper).to.have.property('_need_ellipsis')
  })

  it('check _init function', (): void => {
    const div = document.createElement('div')
    const cliper = new Cliper()
    const res = cliper['_init'](div)

    expect(typeof cliper['_init']).to.be.equal('function')
    expect(res).to.have.property('el')
    expect(res).to.have.property('lines')
    expect(res).to.have.property('sign')
    expect(res).to.have.property('need_ellipsis')
    expect(res.element).to.be.instanceOf(Element)
    expect(res.need_ellipsis).to.be.equal(false)
    expect(div.style.cssText).to.be.equal('overflow-wrap: break-word;')
  })

  it('check _mergeConfig function', (): void => {
    const p = document.createElement('p')
    const cliper = new Cliper()
    const res = cliper['_mergeConfig']({
      el: p,
      element: new Element(p, null, '..'),
      lines: 2,
      sign: '..',
      need_ellipsis: true
    })

    expect(typeof cliper['_mergeConfig']).to.be.equal('function')
    expect((res.el as any).nodeName).to.be.equal('P')
    expect(res.element).to.be.instanceOf(Element)
    expect(res.lines).to.be.equal(1)
    expect(res.sign).to.be.equal('...')
    expect(res.need_ellipsis).to.be.equal(true)
  })

  it('check clip function', (): void => {
    const p = document.createElement('p')
    p.textContent = 'test test'

    const cliper = new Cliper(p)

    expect(typeof cliper['clip']).to.be.equal('function')
    expect(cliper.clip()).to.be.equal(false)
    expect(p.textContent).to.be.equal('test test')
    // how to test DOM Manipulation
    // ...
  })
})
