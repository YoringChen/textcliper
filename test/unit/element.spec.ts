import { expect } from 'chai'
import _Element from '../../src/element'

describe('[element.ts] 测试 Element 模块', (): void => {
  it('The export default is Element class', (): void => {
    const div = document.createElement('div')
    const element = new _Element(div, null, '...')

    expect(element).to.be.instanceOf(_Element);
  })

  it('check property', (): void => {
    const div = document.createElement('div')
    div.textContent = 'test test'
    document.body.appendChild(div)

    const element = new _Element(div, null, '...')

    expect(element['el']).to.be.instanceOf(Node);
    expect(element['root']).to.be.instanceOf(_Element);
    expect(element['children']).to.be.instanceOf(Array);
    expect(element['sign']).to.be.equal('...')
    expect(element['type']).to.be.equal(1)
    expect(element['text']).to.be.equal('test test');
    expect(element['_root_width']).to.be.equal(1184);
    expect(element['_font_size']).to.be.equal(16);
    expect(element['_word_count']).to.be.equal(74);
    expect(element['_line_height']).to.be.equal(19.2);
  })

  it('checkout initChildren function', (): void => {
    const div = document.createElement('div')
    const p = document.createElement('p')
    p.textContent = 'test test'
    div.appendChild(p)

    const element = new _Element(div, null, '...')
    const children = element['initChildren'](div.childNodes)

    expect(element['initChildren']).to.be.instanceOf(Function)
    expect(children.length).to.be.equal(1)
    expect(children[0]).to.be.instanceOf(_Element)
  })

  it('checkout getStyle function', (): void => {
    const div = document.createElement('div')
    const p = document.createElement('p')

    p.textContent = 'test test'
    div.style.cssText = 'font-size:14px'
    div.appendChild(p)
    document.body.appendChild(div)

    const element1 = new _Element(div, null, '...')

    expect(element1['getStyle']).to.be.instanceOf(Function)
    expect(element1['getStyle']('fontSize')).to.be.equal('14px')
    expect(element1.children[0]['getStyle']('fontSize')).to.be.equal('14px')
  })

  it('checkout getRootWidth function', (): void => {
    const div = document.createElement('div')
    document.body.appendChild(div)

    const element = new _Element(div, null, '...')

    expect(element['getRootWidth']()).to.be.equal(1184)
  })

  it('checkout getLineHeight function', (): void => {
    const div = document.createElement('div')
    div.textContent = 'test test'
    document.body.appendChild(div)

    const element = new _Element(div, null, '...')

    expect(element['getLineHeight']()).to.be.equal(19.2)
  })

  it('checkout getDefaultLineHeight function', (): void => {
    const div = document.createElement('div')
    div.textContent = 'test test'
    document.body.appendChild(div)

    const element = new _Element(div, null, '...')

    expect(element['getDefaultLineHeight']()).to.be.equal(19.2)
  })

  it('checkout getScrollHeight function', (): void => {
    const div = document.createElement('div')
    div.textContent = 'test test'
    document.body.appendChild(div)

    const element = new _Element(div, null, '...')

    expect(element['getScrollHeight']()).to.be.equal(22)
  })

  it('checkout getMaxHeight function', (): void => {
    const div = document.createElement('div')
    document.body.appendChild(div)

    const element = new _Element(div, null, '...')

    expect(element['getMaxHeight'](2)).to.be.equal(44)
  })

  it('checkout clipText function', (): void => {
    const div = document.createElement('div')
    div.textContent = 'test test'
    document.body.appendChild(div)

    const element = new _Element(div, null, '...')

    expect(element['clipText'](1)).to.be.equal(true)
    expect(element.el.textContent).to.be.equal('test test...')
  })

  it('checkout removeChild function', (): void => {
    const div = document.createElement('div')
    const p = document.createElement('p')
    p.textContent = 'test test'
    div.appendChild(p)
    document.body.appendChild(div)

    const element = new _Element(div, null, '...')

    expect(element['removeChild'](element.children[0])).to.be.equal(true)
  })
})
