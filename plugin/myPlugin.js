/**
 * created by chunbao.cai
 * 自定义插件
 *
*/


const myPluginName = 'myPluginName'

class MyPluginNameWebpack {
    apply(compiler){

        compiler.hooks.run.tap(myPluginName, (compliation) => {
            console.log('webpack run');
        })
        compiler.hooks.beforeRun.tap(myPluginName, (compliation) => {
            console.log('webpack beforeRun');
        })
        compiler.hooks.beforeCompile.tap(myPluginName, (compliation) => {
            console.log('webpack beforeCompile');
        })
        compiler.hooks.compile.tap(myPluginName, (compliation) => {
            console.log('webpack compile');
        })
        compiler.hooks.make.tap(myPluginName, (compliation) => {
            console.log('webpack make');
        })
        // compiler.hooks.seal.tap(myPluginName, (compliation) => {
        //     console.log('webpack seal');
        // })
    }
}

module.exports = MyPluginNameWebpack