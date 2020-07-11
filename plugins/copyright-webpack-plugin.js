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