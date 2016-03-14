'use strict';

import $ from 'jquery';

let tool = 'babel';
$('body').append(`<p>Hello $ and ${tool}</p>`);


if (__DEV__) {
  console.warn('__DEV__');
}
// ...
if (__PRERELEASE__) {
  console.warn('__PRERELEASE__');
}

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

