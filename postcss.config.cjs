// "browserslist": [
//   "defaults",
//   "not ie < 11",
//   "last 3 versions",
//   "> 0.2%",
//   "iOS 7",
//   "last 3 iOS versions"
// ]

// "browserslist": [
//   ">1%",
//   "last 10 versions",
//   "not dead"
// ]

module.exports = {
  plugins: [
    // require('autoprefixer'),
    require('postcss-preset-env') // css 已经加载了autoprefixer
  ]
};
