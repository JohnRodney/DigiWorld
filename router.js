Router.onBeforeAction(function(pause) {
  if (! Meteor.userId()) {
    this.render('login');
  }
  else {
    this.next();
  }
});

Router.route('/', function () {
  this.render('home', {
  });
});
