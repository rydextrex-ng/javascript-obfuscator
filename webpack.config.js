const path = require('path');

   module.exports = {
       entry: './src/index.js', // Entry point
       output: {
           filename: 'javascript-obfuscator.min.js', // Output filename
           path: path.resolve(__dirname, 'dist'),
       },
       mode: 'production',
       optimization: {
           minimize: true, // Minify the output file
       },
   };