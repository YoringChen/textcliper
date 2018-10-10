import TextCliper, { CliperProperty } from './cliper'

// cliper instance
const cliper = new TextCliper()

// install in window
window.TextCliper = cliper

// set Class prototype
if (!(cliper as any).TextCliper) (cliper as any).TextCliper = TextCliper

// vue plugins
cliper.install = function (Vue): void {
  Vue.directive('textclip', {
    inserted (el: HTMLElement, binding: any): void {
      cliper.clip(el, binding.value as CliperProperty)
    }
  })

  Vue.prototype.$textclip = (el: HTMLElement, options: CliperProperty): void => {
    cliper.clip(el, options)
  }
}

if (window.Vue) window.Vue.use(cliper)

export default cliper
