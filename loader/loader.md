## loader
loader本质是导出函数的JavaScript模块，

默认情况下，资源文件会被转化为UTF-8字符串，然后传给loader。通过设置raw为true，loader可以接收原始的Buffer。每一个loader都可以用String和Buffer的形式传递它的处理结果。compiler将会把它们在loader之间相互转换。

```javascript
module.exports = function (content){
    assert(content instanceof Buffer)
    return someSyncOperation(content)
}

module.exports.raw = true
```
