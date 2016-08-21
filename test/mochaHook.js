var babelConfig = require('react-scripts/config/babel.dev');
delete babelConfig.cacheDirectory;
require("babel-register")(babelConfig);