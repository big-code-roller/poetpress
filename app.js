var
  express  = require( 'express' ),
  app      = express(),
  poet     = require( './lib/poet' )( app );

// All default options, but shown for example

poet
  .createPostRoute()
  .createPageRoute()
  .createTagRoute()
  .createCategoryRoute()
  .init();

app.set( 'view engine', 'jade' );
app.set( 'views', __dirname + '/views' );
app.use( express.static( __dirname + '/public' ));
app.use( app.router );
app.locals.pretty = true;

app.get( '/', function ( req, res ) { res.render( 'index' ) });

app.get('/home', function(req, res){
  res.render('home', {title: 'Space-Rocket Home'});
});

app.get('/team', function(req, res){
  res.render('team', {title: 'Space-Rocket Team'});
});

app.get('/portfolio', function(req, res){
  res.render('portfolio', {title: 'Space-Rocket Portfolio'});
});

app.get('/services', function(req, res){
  res.render('services', {title: 'Space-Rocket Services'});
});

app.get('/blog', function(req, res){
  res.render('blog', {title: 'Space-Rocket Blog'});
});

app.listen( 3000 );
