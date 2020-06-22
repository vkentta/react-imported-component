module.exports = [
  {
    path: ['dist/es2015/index.js', 'dist/es2015/boot.js'],
    ignore: ['tslib'],
    limit: '3.5 KB',
  },
  {
    path: 'dist/es2015/index.js',
    ignore: ['tslib'],
    limit: '3.2 KB',
  },
  {
    path: 'dist/es2015/boot.js',
    ignore: ['tslib'],
    limit: '1.9 KB',
  },
];
