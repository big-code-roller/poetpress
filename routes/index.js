
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Home' });
};

exports.home = function(req, res){
  res.render('home', { title: 'Home' });
};

exports.team = function(req, res){
  res.render('team', { title: 'Team', });
};

exports.portfolio = function(req, res){
  res.render('portfolio', { title: 'Portfolio' });
};

exports.services = function(req, res){
  res.render('services', { title: 'Services' });
};

exports.blog = function(req, res){
  res.render('blog', { title: 'Blog' });
};

