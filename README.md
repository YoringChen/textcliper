# textcliper

Multiple lines of text ellipsis

## Getting Started

HTML:
```html
  <div id="app">
    Test Something ! <span>label</span><span>label2</span>
  </div>
```
CSS:
```css
  #app {
    width: 100px
  }
```
JavaScript:
```javascript
  var app = document.getElementById('app')

  textclip(app, 1)
```
Result:
```html
  <div id="app" style="word-wrap: break-word;">
      Test Something ! <span>l...</span>
  </div>
```

## Installing

```javascript
  npm install textcliper --save
```

## API
```javascript
  var app = document.getElementById('app')

  window.textclip(app, 1)

  // or

  import TextCliper from 'textcliper'
  new TextCliper(app, 1).clip()

  // or vue plugin, if you use Vue
  import TextCliper from 'textcliper'
  Vue.use(TextCliper)

  // vue instance method
  this.$textclip(1)

  // vue directive
  <div v-textclip="1"> Test Something ! <span>label</span><span>label2</span> </div>
```

### textclip(ele, options [, lines]) / constructor(ele, options [, lines])

``ele`` :  target dom element.

``options``:  when it is a number, it indicates the number of rows ellipsis.

``options.lines``: specifies the number of rows to ellipsis.
``options.sign``: ellipsis symbol, the default is ``...``.

### textcliper.clip()

``textcliper``:  `TextCliper` instance

``clip``:  `TextCliper` instance need to manual trigger clipping

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
