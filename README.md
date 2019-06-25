# Express Hello World

## Steps to create a new Node project

```sh
$ mkdir folder
$ cd folder
$ npm init # Press Enter everytime
```

## To use a package named "carrot" (example)

Install it with the terminal:
```sh
$ npm install carrot
# Save "carrot" as a dependency of package.json
# and install the package carrot in the node_modules folder
```

In your JS file:
```js
const carrot = require("carrot");
```

## To execute the website

```sh
nodemon app.js
```