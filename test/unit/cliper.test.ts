import Cliper from '../../src/cliper'
import Element from '../../src/element'

test('The export default is Cliper class', (): void => {
  const cliper = new Cliper()

  expect(cliper).toBeInstanceOf(Cliper);
})

test('check instance property', (): void => {
  const div = document.createElement('div')
  const cliper = new Cliper(div)

  expect(cliper['_el']).toBeDefined()
  expect(cliper['_element']).toBeDefined()
  expect(cliper['_lines']).toBeDefined()
  expect(cliper['_sign']).toBeDefined()
  expect(cliper['_need_ellipsis']).toBeDefined()
})

test('check _init function', (): void => {
  const div = document.createElement('div')
  const cliper = new Cliper()
  const res = cliper['_init'](div)

  expect(typeof cliper['_init']).toBe('function')
  expect(res.el).toBeDefined()
  expect(res.element).toBeInstanceOf(Element)
  expect(res.lines).toBe(1)
  expect(res.sign).toBe('...')
  expect(res.need_ellipsis).toBe(false)
  expect(div.style.cssText).toBe('word-wrap: break-word;')
})

test('check _mergeConfig function', (): void => {
  const p = document.createElement('p')
  const cliper = new Cliper()
  const res = cliper['_mergeConfig']({
    el: p,
    element: new Element(p, null, '..'),
    lines: 2,
    sign: '..',
    need_ellipsis: true
  })

  expect(typeof cliper['_mergeConfig']).toBe('function')
  expect((res.el as any).nodeName).toBe('P')
  expect(res.element).toBeInstanceOf(Element)
  expect(res.lines).toBe(1)
  expect(res.sign).toBe('...')
  expect(res.need_ellipsis).toBe(true)
})

test('check clip function', (): void => {
  const p = document.createElement('p')
  p.textContent = 'test test'

  const cliper = new Cliper(p)

  expect(typeof cliper['clip']).toBe('function')
  expect(cliper.clip()).toBe(false)
  expect(p.textContent).toBe('test test')
  // how to test DOM Manipulation
  // ...
})
