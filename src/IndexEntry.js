'use strict';

var $ = require('jquery');

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
import Button from './Components/Button';
const button = new Button('#yes');
button.render('.js-btn');
//*/


/*/
setTimeout( () => {
  require.ensure(['./Components/Button.js'], () => {
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
//*/

setTimeout( () => {
  require.ensure([], () => {
    const Header = require('./Components/Header');
    //const head = new Header();
    const head = new Header('Header');
    head.render('.js-head');
  }, 'header-chunk');
}, 500);