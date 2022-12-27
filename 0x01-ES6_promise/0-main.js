import  {getResponseFromAPI} from "./0-promise.js";
const parse = require('node-html-parser');
const response = getResponseFromAPI();
console.log(response instanceof Promise);
