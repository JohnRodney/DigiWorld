Template.login.onRendered(function() {
  Accounts._loginButtonsSession.set('dropdownVisible', true);
  var audio = new Audio('music/intro.mp3');
  audio.volume = 0.2;
  audio.play();
});
