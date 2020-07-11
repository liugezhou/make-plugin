#### 如何编写一个Plugin

> + npm init -y
> + npm i webpack webpack-cli -D    
> + 新建webpack.config.js:    

```
// webpack.config.js
const path = require('path');
const CopyrightWebpackPlugin = require('./plugins/copyright-webpack-plugin');
module.exports = {
  mode:'development',
  entry:{
    main: './src/index.js'
  },
  output:{
    path: path.resolve(__dirname,'dist'),
    filename:'[name].js'
  },
  plugins:[
    new CopyrightWebpackPlugin({
      name:'test'
    })
  ]
}
```
> + 编写CopyrightWebpackPlugin，要实现的功能是在项目打包完成后，在dist目录下生成一个copyright声明的文件： 

```
class CopyrightWebpackPlugin {
  constructor(options) {
    console.log(options)
  }
  apply(compiler) {
    compiler.hooks.compile.tap('CopyrightWebpackPlugin',(compilation)=>{
      console.log('ma name is compile')
    })
    compiler.hooks.emit.tapAsync( 'CopyrightWebpackPlugin',(compilation,cb)=>{
      debugger;
        compilation.assets['copyright.text'] = {
          source: function(){
            return 'copyrighjt by liugezhou'
          },
          size:function() {
            return 30;
          }
        }
        cb();
    })
  }
}

module.exports = CopyrightWebpackPlugin;
```