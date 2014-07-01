[![browser support](https://ci.testling.com/mattdesl/kami-white-texture.png)](https://ci.testling.com/mattdesl/kami-white-texture)

# kami-white-texture

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Creates a 1x1 white WebGL texture. Often used with [kami-batch](http://github.com/mattdesl/kami-batch) to render filled rectangles and lines efficiently alongside game sprites. 

## Usage

[![NPM](https://nodei.co/npm/kami-white-texture.png)](https://nodei.co/npm/kami-white-texture/)

```js
var gl = require('webgl-context')();
var tex = require('kami-white-texture')(gl);

//bind it...
tex.bind();

//use it...
```

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/kami-white-texture/blob/master/LICENSE.md) for details.
