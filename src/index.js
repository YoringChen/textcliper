import Cliper from './cliper'

window.TextCliper = Cliper

Cliper.install = function (Vue) {
  Vue.directive('textcliper', {
    inserted(el, binding) {
      Cliper(el, binding.value)
    }
  })

  Vue.prototype.$textcliper = function (el, options) {
    Cliper(el, options)
  }
}

if (window.Vue) window.Vue.use(Cliper)

export default Cliper