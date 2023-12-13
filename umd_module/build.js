const webpack = require('webpack')
const config = require('./webpack.config')

webpack(config, (err, stat) => {
  if (err) console.log(err)
  console.log('编译成功')
})
