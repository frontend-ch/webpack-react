const path = require("path");

module.exports = {
  entry: {
    app: "./app/index.js" //在源文件目录下去找index.js 文件作为打包的入口文件
  },
  output: {
    path: path.resolve(__dirname, "dist"), //生成的文件存放目录
    filename: "[name].bundle.js" //生成的文件 name 表示entry下面的app
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader",
          options: { presets: ["@babel/preset-react","@babel/preset-env"] }
        }],
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"), //网站的根目录为 根目录/dist，如果配置不对，会报Cannot GET /错误
    port: 9000, //端口改为9000
    open:true // 自动打开浏览器，适合懒人
  }
}
