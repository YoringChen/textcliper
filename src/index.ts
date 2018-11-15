import TextCliper, { CliperConfig } from './cliper'

// cliper instance
const cliper = new TextCliper()

// set Class prototype
if (!(cliper as any).TextCliper) (cliper as any).TextCliper = TextCliper

// vue plugins
cliper.install = function (Vue): void {
  Vue.directive('textclip', {
    inserted (el: HTMLElement, binding: any): void {
      cliper.clip(el, binding.value as CliperConfig)
    }
  })

  Vue.prototype.$textclip = (el: HTMLElement, options: CliperConfig): void => {
    cliper.clip(el, options)
  }
}

if (window.Vue) window.Vue.use(cliper)

export default cliper
