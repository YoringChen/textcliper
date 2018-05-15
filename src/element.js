const _w = window

export default class Element {
  constructor(el, root, sign) {
    this.el = el
    this.root = root || this
    this.sign = sign
    this.type = el.nodeType
    this.text = el.textContent
    this.children = this._initChildren(el.childNodes)
    this._root_width = this.root.el.getBoundingClientRect().width
    this._font_size = parseInt(this._getStyle('fontSize'), 10)
    this._word_count = this._root_width / this._font_size
    this._line_height = this.getLineHeight()
  }

  _initChildren(childNodes) {
    const children = []
    const { root, sign } = this

    if (!childNodes) return children

    while (children.length < childNodes.length) {
      children.push(new Element(childNodes[children.length], root, sign))
    }

    return children
  }

  _getStyle(property) {
    const { type, el, root } = this

    if (type !== 1) return _w.getComputedStyle(root.el)[property]

    return _w.getComputedStyle(el)[property]
  }

  getLineHeight() {
    const _line_height = parseInt(this._getStyle('lineHeight'), 10)

    if (_w.isNaN(_line_height)) return this.getDefaultLineHeight()

    return _line_height
  }

  getDefaultLineHeight() {
    return this._font_size * 1.2
  }

  getScrollHeight() {
    const scroll_height = this.el.scrollHeight
    const default_line_height = this.getDefaultLineHeight()
    const line_height = this.getLineHeight()

    return parseInt((default_line_height / line_height) * scroll_height, 10)
  }

  getMaxHeight(lines) {
    const p = document.createElement('p')
    let max_h = lines * this._line_height

    p.textContent = 'h'
    p.cssText += 'position:absolute;opacity:0'

    this.el.appendChild(p)

    max_h = (p.getBoundingClientRect().height * lines) || max_h

    this.el.removeChild(p)

    return max_h
  }

  clipText(lines) {
    const { el, root, text, sign, _word_count } = this
    const max_height = root.getMaxHeight(lines)
    let max_word_count = parseInt(lines * _word_count, 10) + 1
    let content = ''

    max_word_count = Math.min(text.length, max_word_count)

    while (max_word_count >= 0) {
      content = text.trim().substring(0, max_word_count + 1)
      if (!content) break;
      el.textContent = content + sign
      if (root.getScrollHeight() <= max_height) return true
      max_word_count -= 1
    }

    return false
  }

  removeChild(child) {
    if (child.type === 1) this.el.removeChild(child.el)

    return false
  }
}