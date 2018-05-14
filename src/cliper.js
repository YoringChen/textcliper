import Element from './element'

export default class Cliper {
  constructor(el, options = {}) {
    el.style.cssText += 'word-wrap:break-word'

    const { sign = '...' } = options
    const lines = options.lines || options || 1
    const element = new Element(el, null, sign)

    this._element = element
    this._lines = lines
    this._need_ellipsis = element.root.getScrollHeight() > element.root.getMaxHeight(lines)
  }

  clip(element = this._element) {
    const { _need_ellipsis, _lines } = this

    if (!_need_ellipsis) return false

    return element.children.reverse().some(child => {
      if (child.type === 1) {
        if (this.clip(child)) return true
      }

      if (child.type === 3) {
        if (child.clipText(_lines)) return true
      }

      element.removeChild(child)

      return false
    })
  }
}