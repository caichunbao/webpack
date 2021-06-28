const autoprefixer = require('autoprefixer')

module.exports = {
    plugins: [
        // 全球占额比
        autoprefixer({
            overrideBrowserslist:["last 2 versions", ">1%"]
        })
    ]
}