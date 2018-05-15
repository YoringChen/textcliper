import Element from './element'

const DEFAULT_CONFIG = {
  lines: 1,
  sign: '...'
}

function _init(el, options = {}) {
  const { sign = DEFAULT_CONFIG.sign } = options
  const lines = options.lines || options || DEFAULT_CONFIG.lines
  let element = null
  let need_ellipsis = false

  if (el) {
    el.style.cssText += 'word-wrap:break-word'
    element = new Element(el, null, sign)
    need_ellipsis = element.root.getScrollHeight() > element.root.getMaxHeight(lines)
  }

  return {
    sign,
    lines,
    element,
    need_ellipsis
  }
}

function mergeConfig(internal, current) {
  const config = {}

  for (const key in current) {
    config[key] = internal[`_${key}`] || current[key]
  }

  return config
}

export default class Cliper {
  constructor(el, option) {
    const { element, lines, sign, need_ellipsis } = _init(el, option)

    if (!need_ellipsis) return false

    this._el = el
    this._element = element
    this._lines = lines
    this._sign = sign
    this._need_ellipsis = need_ellipsis
  }

  clip(el = this.el, options, _init_data) {
    const init_data = _init_data || _init(el, options)
    const { need_ellipsis, lines, sign, element } = mergeConfig(this, init_data)
    const ele = new Element(el, element, sign)

    if (!need_ellipsis) return false

    return ele.children.reverse().some(child => {
      if (child.type === 1) {
        if (this.clip(child, options, init_data)) return true
      }

      if (child.type === 3) {
        if (child.clipText(lines)) return true
      }

      ele.removeChild(child)

      return false
    })
  }
}