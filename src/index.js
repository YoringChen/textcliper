import Cliper from './cliper'

window.textclip = (el, options) => {
  new Cliper(el, options).clip()
}

Cliper.install = function (Vue) {
  Vue.directive('textclip', {
    inserted(el, binding) {
      new Cliper(el, binding.value).clip()
    }
  })

  Vue.prototype.$textclip = function (el, options) {
    new Cliper(el, options).clip()
  }
}

if (window.Vue) window.Vue.use(Cliper)

export default Cliper