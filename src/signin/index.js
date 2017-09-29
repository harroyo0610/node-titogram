var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

var main = document.getElementById('main-container');

page('/signin', function(ctx, next){  
	title('Signin')
    empty(main).appendChild(template);
})

