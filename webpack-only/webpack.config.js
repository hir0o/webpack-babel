module.exports = {
  mode: "production",
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: `./src/index.js`,
  // ファイルの出力設定
  output: {
    // 出力ファイル名
    filename: "main.js",
    path: `${__dirname}/dist/`
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, // babelを通さないディレクトリ
        loader: "babel-loader",
      }
    ]
  }
};
