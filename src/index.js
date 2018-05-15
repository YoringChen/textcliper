import TextCliper from './cliper'

// cliper instance
const cliper = new TextCliper()

// install in window
cliper.TextCliper = TextCliper
window.TextCliper = cliper

// vue plugins
cliper.install = function (Vue) {
  Vue.directive('textclip', {
    inserted(el, binding) {
      cliper.clip(el, binding.value)
    }
  })

  Vue.prototype.$textclip = (el, options) => {
    cliper.clip(el, options)
  }
}

// auto install, if vue in global
if (window.Vue) window.Vue.use(cliper)

export default cliper