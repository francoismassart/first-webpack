'use strict';

import $ from 'jquery';

let tool = 'babel';
$('body').append(`<p>Hello $ and ${tool}</p>`);

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