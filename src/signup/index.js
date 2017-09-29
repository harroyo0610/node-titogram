var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

var main = document.getElementById('main-container')

page('/signup', function(ctx, next){ 
  title('Signup') 
  empty(main).appendChild(template);
})
