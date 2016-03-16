'use strict';

var $ = require('jquery');
var Mustache = require('mustache');

let tool = 'babel';
$('body').append(`<p>Hello $ and ${tool}</p>`);


if (__DEV__) {
  console.warn('__DEV__');
}
// ...
if (__PRERELEASE__) {
  console.warn('__PRERELEASE__');
}

const Calculator = require('./Components/Calculator');
const calc = new Calculator('calc');
console.log(calc.add(1, 1));

/*/
// OK but KO via require.ensure
import Button from './Components/Button';
const button = new Button('#yes');
button.render('.js-btn');
//*/


/*/
setTimeout( () => {
  require.ensure(['./Components/Button'], () => {
    const Button = require('./Components/Button');
    const button = new Button('#finally');
    button.render('.js-btn');
  }, 'button-chunk');
}, 1000);
//*/

//*/
setTimeout( () => {
  require.ensure([], () => {
    const Button = require('./Components/Button');
    const button = new Button('#finally');
    button.render('.js-btn');
  }, 'button-chunk');
}, 1000);

setTimeout( () => {
  require.ensure([], () => {
    const Header = require('./Components/Header');
    //const head = new Header();
    const head = new Header('Header');
    head.render('.js-head');
  }, 'header-chunk');
}, 500);
//*/

// CommonJS
/*/
setTimeout( () => {
  //require.ensure(['./module-cjs-a','./module-cjs-b'], (require) => { // Loaded but not launch (param `require` not important...)
  //require.ensure(['./module-cjs-a','./module-cjs-b'], () => { // Loaded but not launch
  require.ensure([], () => { // Nothing in the dependencies array
    var a = require('./module-cjs-a');
    console.warn(a);
    setTimeout( () => {
      var b = require('./module-cjs-b'); // Already loaded so just runned
      console.warn(`After 5s b is ${b}`);
    }, 5000);
  }, 'module-cjs-chunk');
}, 200);
//*/

// AMD
/*/
setTimeout( () => {
  require(['./module-amd-a','./module-amd-b'], function(a, b) {
    console.info(`LOADED via AMD ${a} + ${b}`);
  }); // Can't use `require.ensure` and/or provide a name!
}, 4000);
//*/

//const Button = require.include('./Components/Button');
//const Header = require.include('./Components/Header');

