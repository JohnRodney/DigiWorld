Meteor.publish("userData", function () {
    return Meteor.users.find({_id: this.userId},
        {fields: {'name': 1, 'things': 1}});
});
