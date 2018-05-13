import Element from './element'

function _clip(element, lines) {
  return element.children.reverse().some(child => {
    if (child.type === 1) {
      if (_clip(child, lines)) return true
    }

    if (child.type === 3) {
      if (child.clipText(lines)) return true
    }

    element.removeChild(child)

    return false
  })
}

export default function (el, options = {}) {
  const { sign = '...' } = options
  const lines = options.lines || options || 1

  el.style.cssText += 'word-wrap:break-word'

  const element = new Element(el, null, sign)
  const need_ellipsis = element.root.getScrollHeight() > element.root.getMaxHeight(lines)

  if (need_ellipsis) _clip(element, lines)
}