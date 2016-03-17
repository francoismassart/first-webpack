var $ = require('jquery');
var template = require('./Header.html');
var Mustache = require('mustache');
require('./Header.scss');

class Header {
    constructor(title = 'untitled') {
        this.title = title;
    }

    render(selector) {
        let $el = $(selector);
        // Render our header
        $el.html(
            Mustache.render(template, {text: this.title})
        );
    }
}

// Working
module.exports = Header; 
