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

  TextCliper.clip(app, 1)
```
Result:
```html
  <div id="app" style="word-wrap: break-word;">
      Test Something ! <span>l...</span>
  </div>
```

## Installing

Using NPM:
```javascript
  npm install textcliper --save
```

Using CDN:
```html
<script type="text/javascript" src="//unpkg.com/textcliper"></script>
```

## API
```javascript
  // using cdn
  var app = document.getElementById('app')

  TextCliper.clip(app, 1)

  // or using npm
  import TextCliper from 'textcliper'

  TextCliper.clip(app, 1)

  // or vue plugin, if you use Vue
  import TextCliper from 'textcliper'
  Vue.use(TextCliper)

  // vue instance method
  this.$textclip(1)

  // vue directive
  <div v-textclip="1"> Test Something ! <span>label</span><span>label2</span> </div>
```

### TextCliper

a `TextCliper` instance

### TextCliper.clip(ele, options [, lines])

``ele`` :  target dom element.

``options``:  when it is a number, it indicates the number of rows ellipsis.

``options.lines``: specifies the number of rows to ellipsis.
``options.sign``: ellipsis symbol, the default is ``...``.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
