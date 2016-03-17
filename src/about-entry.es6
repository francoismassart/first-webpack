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

setTimeout( () => {
  require.ensure([], () => {
    const Header = require('./components/header/header');
    //const head = new Header();
    const head = new Header('About');
    head.render('.js-head');
  }, 'header-chunk');
}, 500);
