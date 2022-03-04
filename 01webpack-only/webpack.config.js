module.exports = {
  mode: "production", // developmentだと、ソースマップが出力される
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: `./src/index.js`,
  // ファイルの出力設定
  output: {
    // 出力ファイル名
    filename: "main.js",
    path: `${__dirname}/dist/`,
  },
};
