import Element from './element'

export interface CliperConfig {
  lines?: number
  sign?: string
}

const DEFAULT_CONFIG = {
  lines: 1,
  sign: '...'
}

export interface CliperProperty {
  lines: number
  sign: string
  el?: HTMLElement
  element: Element | null
  need_ellipsis: boolean
}

export default class Cliper {
  protected _el?: HTMLElement
  protected _element!: Element | null
  protected _lines!: number
  protected _sign!: string
  protected _need_ellipsis!: boolean
  public TextCliper!: Cliper

  public constructor (el?: HTMLElement, option?: CliperConfig) {
    const { element, lines, sign, need_ellipsis } = this._init(el, option)

    if (!need_ellipsis) return

    this._el = el
    this._element = element
    this._lines = lines
    this._sign = sign
    this._need_ellipsis = need_ellipsis
  }

  protected _init (el?: HTMLElement, options?: CliperConfig): CliperProperty {
    let sign: string = DEFAULT_CONFIG.sign
    let lines: number = DEFAULT_CONFIG.lines
    let element = null
    let need_ellipsis = false

    if (typeof options === 'object') {
      sign = options.sign || sign
      lines = (isNaN(+options) ? options.lines : +options) || lines
    }

    if (el) {
      el.style.cssText += 'word-wrap:break-word'
      element = new Element(el, null, sign)
      need_ellipsis = element.root.getScrollHeight() > element.root.getMaxHeight(lines)
    }

    return {
      el,
      sign,
      lines,
      element,
      need_ellipsis
    }
  }

  protected _mergeConfig (current: CliperProperty): CliperProperty {
    const config: CliperProperty = {
      el: this._el || current.el,
      element: this._element || current.element,
      lines: this._lines || current.lines,
      sign: this._sign || current.sign,
      need_ellipsis: this._need_ellipsis || current.need_ellipsis
    }

    return config
  }

  public clip (target: HTMLElement | Element | null = this._element, options?: CliperConfig, _init_data?: CliperProperty): boolean {
    const _el = target instanceof Element ? target.el : target
    const init_data = _init_data || this._init(_el as HTMLElement, options)
    const { need_ellipsis, lines, sign, element } = this._mergeConfig(init_data)
    const ele = target instanceof Element ? target : new Element(target as HTMLElement, element, sign)

    if (!need_ellipsis) return false

    return ele.children.reverse().some((child: Element): boolean => {
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

  public install (Vue: any): void {}
}
