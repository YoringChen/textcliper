const _w = window

export default class Element {
  public el!: Node
  /* eslint node/no-deprecated-api: 'off' */
  public root!: Element
  public children !: Element[]
  public sign!: string
  public type!: number
  public text !: string | null
  protected _root_width !: number
  protected _font_size !: number
  protected _word_count !: number
  protected _line_height !: number

  public constructor (el: Node, root: Element | null, sign: string) {
    this.el = el
    this.root = root || this
    this.sign = sign
    this.type = el.nodeType
    this.text = el.textContent
    this.children = this.initChildren(el.childNodes)
    this._root_width = this.getRootWidth(this.root)
    this._font_size = parseInt(this.getStyle('fontSize'), 10)
    this._word_count = Math.ceil(this._root_width / this._font_size)
    this._line_height = this.getLineHeight()
  }

  protected initChildren (childNodes: NodeListOf<ChildNode>): Element[] {
    const children: Element[] = []
    const { root, sign } = this

    if (!childNodes) return children

    while (children.length < childNodes.length) {
      children.push(new Element(childNodes[children.length], root, sign))
    }

    return children
  }

  protected getStyle (property: string): string {
    const { type, el, root } = this
    let styles

    if (type !== 1) {
      styles = _w.getComputedStyle((root.el as HTMLElement))
    } else {
      styles = _w.getComputedStyle((el as HTMLElement))
    }

    return (styles as any)[property] || ''
  }

  protected getRootWidth (root: Element | null): number {
    if (!root) return 0

    const el = root.el

    if (el && typeof (el as HTMLElement).getBoundingClientRect === 'function') {
      return (el as HTMLElement).getBoundingClientRect().width
    }

    return 0
  }

  protected getLineHeight (): number {
    const _line_height = parseInt(this.getStyle('lineHeight'), 10)

    if (isNaN(_line_height)) return this.getDefaultLineHeight()

    return _line_height
  }

  protected getDefaultLineHeight (): number {
    return this._font_size * 1.2
  }

  public getScrollHeight (): number {
    const scroll_height = (this.el as HTMLElement).scrollHeight
    const default_line_height = this.getDefaultLineHeight()
    const line_height = this.getLineHeight()

    return (default_line_height / line_height) * scroll_height
  }

  public getMaxHeight (lines: number): number {
    const p = document.createElement('p')
    let max_h = lines * this._line_height

    p.textContent = 'h'
    p.style.cssText += 'position:absolute;opacity:0'

    this.el.appendChild(p)

    max_h = (p.getBoundingClientRect().height * lines) || max_h

    this.el.removeChild(p)

    return max_h
  }

  public clipText (lines: number): boolean {
    const { el, root, text, sign, _word_count } = this
    const max_height = root.getMaxHeight(lines)
    let max_word_count = lines * _word_count + 1
    let content = ''

    max_word_count = Math.min((text || '').length, max_word_count)

    while (max_word_count >= 0) {
      content = (text || '').trim().substring(0, max_word_count + 1)
      if (!content) break;
      el.textContent = content + sign
      if (root.getScrollHeight() <= max_height) return true
      max_word_count -= 1
    }

    return false
  }

  public removeChild (child: Element): boolean {
    if (child.type === 1) this.el.removeChild(child.el)

    return false
  }
}
