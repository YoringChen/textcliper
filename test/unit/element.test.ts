import _Element from '../../src/element'

beforeEach((): void => {
  Element.prototype.getBoundingClientRect = jest.fn((): any => {
    return {
      width: 200,
      height: 120,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    }
  })

  window.getComputedStyle = jest.fn((): any => {
    return {
      fontSize: '14px',
      lineHeight: '16.8px'
    }
  })
})

test('The export default is Element class', (): void => {
  const div = document.createElement('div')
  const element = new _Element(div, null, '...')

  expect(element).toBeInstanceOf(_Element);
})

test('check property', (): void => {
  const div = document.createElement('div')

  div.textContent = 'test test'

  const element = new _Element(div, null, '...')

  expect(element['el']).toBeInstanceOf(Node);
  expect(element['root']).toBeInstanceOf(_Element);
  expect(element['children']).toBeInstanceOf(Array);
  expect(element['sign']).toBe('...')
  expect(element['type']).toBe(1)
  expect(element['text']).toBe('test test');
  expect(element['_root_width']).toBe(200);
  expect(element['_font_size']).toBe(14);
  expect(element['_word_count']).toBe(15);
  expect(element['_line_height']).toBe(16);
})

test('checkout initChildren function', (): void => {
  const div = document.createElement('div')
  const p = document.createElement('p')

  p.textContent = 'test test'
  div.appendChild(p)

  const element = new _Element(div, null, '...')
  const children = element['initChildren'](div.childNodes)

  expect(element['initChildren']).toBeInstanceOf(Function)
  expect(children.length).toBe(1)
  expect(children[0]).toBeInstanceOf(_Element)
})

test('checkout getStyle function', (): void => {
  const div = document.createElement('div')
  const p = document.createElement('p')

  p.textContent = 'test test'
  div.appendChild(p)

  const element1 = new _Element(div, null, '...')

  expect(element1['getStyle']).toBeInstanceOf(Function)
  expect(element1['getStyle']('fontSize')).toBe('14px')
  expect(element1.children[0]['getStyle']('fontSize')).toBe('14px')
})

test('checkout getRootWidth function', (): void => {
})

test('checkout getLineHeight function', (): void => {})
test('checkout getDefaultLineHeight function', (): void => {})
test('checkout getScrollHeight function', (): void => {})
test('checkout getMaxHeight function', (): void => {})
test('checkout clipText function', (): void => {})
test('checkout removeChild function', (): void => {})