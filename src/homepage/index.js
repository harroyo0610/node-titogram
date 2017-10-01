var page = require('page');
var empty = require('empty-element');
var title = require('title');
var template = require('./template');

var main = document.getElementById('main-container')

page('/', function(ctx, next){
	title('Titogram');
  main.innerHTML = '<a href="/signup">Signup</a>'

  var pictures = [
  	{
  		user: {
  			username: 'tito',
  			avatar: 'https://previews.123rf.com/images/gmast3r/gmast3r1511/gmast3r151100776/48187912-Icono-del-perfil-masculino-Avatar-Man-Hipster-manera-del-estilo-historieta-hombre-de-la-barba-de-los-Foto-de-archivo.jpg'
  		},
  		url: 'office.jpg',
  		likes: 10,
  		liked: false,
      createdAt: new Date()
  	},
  	{
  		user: {
  			username: 'tito',
  			avatar: 'https://previews.123rf.com/images/gmast3r/gmast3r1511/gmast3r151100776/48187912-Icono-del-perfil-masculino-Avatar-Man-Hipster-manera-del-estilo-historieta-hombre-de-la-barba-de-los-Foto-de-archivo.jpg'
  		},
  		url: 'office.jpg',
  		likes: 1,
  		liked: true,
      createdAt: new Date().setDate(new Date().getDate() - 10 )
  	}
  ];

  empty(main).appendChild(template(pictures));
}) 