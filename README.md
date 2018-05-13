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

  TextCliper(app, 1)
```
Result:
```html
  <div id="app" style="word-wrap: break-word;">
      Test Something ! <span>l...</span>
  </div>
```

## Installing

To be determined

## API

### textcliper(ele, options [, lines])

``ele`` :  target dom element.

``options``:  when it is a number, it indicates the number of rows ellipsis.

``options.lines``: specifies the number of rows to ellipsis.
``options.sign``: ellipsis symbol, the default is ``...``.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
