# webpack

---

## Installation and Setup

#### webpack webpack-cli

```sh
npm install webpack webpack-cli --save-dev
```

```JS
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist")
  }
};
```

> npm scripts

```JS
  "scripts": {
    "build": "webpack"
  },
```

---

## Webpack Dev Server & Hot Module Reloading

#### webpack-dev-server

```sh
npm install --save-dev webpack-dev-server
```

The webpack-dev-server provides you with a simple web server and the ability to use live reloading.

> Change your configuration file to tell the dev server where to look for files:

```JS
const path = require("path");

module.exports = {
  mode: "development",
  devServer: {
    contentBase: "./dist"
  },
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist")
  }
};
```

webpack-dev-server doesn't write any output files after compiling. Instead, it keeps bundle files in memory and serves them as if they were real files mounted at the server's root path.

> npm scripts

```JS
  "scripts": {
    "dev": "webpack serve"
  },
```

`webpack serve` -> Is going to run the server
Open the browser and visit `localhost:8080`

#### html-webpack-plugin

```sh
npm install --save-dev html-webpack-plugin
```

The plugin will generate an HTML5 file for you that includes all your webpack bundles in the body using script tags

> Just add the plugin to your webpack configuration as follows:

```JS
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [new HtmlWebpackPlugin()]
};
```

---

## Babel

Head on to the babel website.
Click the Setup Link
Under Build Systems Click Webpack.
Follow their Instructions.

---

## CSS Loader and Style Loader

`css-loader` The css-loader interprets @import and url() like import/require() and will resolve them.

`style-loader` Inject CSS into the DOM.

By now i believe you know how webpack works.

Look for the object in the docs, for both css-loader and style-loader and add the object in the rules array which is in the module object.

---
