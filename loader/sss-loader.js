/**
 * created by chunbao.cai
 * 自定义loader，处理sss的文件
 *
*/

const { interpolateName, getOptions } = require('loader-utils')

module.exports = function(source){
    console.log(typeof source)
    console.log(source)

    source = source.replace(/is/g, 'issssss')

    const { name='[name].[hash].[ext]' } = getOptions(this) || {}

    const outFilename = interpolateName(this, name, {source})

    this.emitFile(outFilename, source)

    return `module.exports=${JSON.stringify(outFilename)}`
}

// 内容二进制形式
// module.exports.raw = true;