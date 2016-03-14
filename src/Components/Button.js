var $ = require('jquery');
var template = require('./Button.html');
var Mustache = require('mustache');
require('./Button.scss');

class Button {
    constructor(link) {
        this.link = link;
        this.secret = 'secret ??? ;-)';
    }

    onClick(evt) {
        evt.preventDefault();
        alert(this.secret);
    }

    render(selector) {
        let $el = $(selector);
        const state = 'ready';
        const txt = `We are ${state}!`;

        // Render our button
        $el.html(
            Mustache.render(template, {link: this.link, text: txt})
        );

        // Attach our listeners
        $el.find('a.button').on('click', (evt) => { this.onClick(evt); });
    }
}

// Working
module.exports = Button; 
