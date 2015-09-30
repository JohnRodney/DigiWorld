Template.home.onRendered(function(){
  $('button').click(function(){
    Meteor.users.update({_id:Meteor.user()._id}, {$set:{"name":$('input').val()}});
  });
});

Template.home.helpers({

  hasName: function(){
    var user = Meteor.user();
    if(user && typeof(user.name) === 'undefined'){
      return false;
    }
    return true;
  },

  name: function(){
    var user = Meteor.user();
    return user && user.name;
  }
});
