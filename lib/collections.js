Images = new Mongo.Collection("images");

//set up security on Images colleciton
Images.allow({
  insert: function(userId, doc) {
    if(Meteor.user()) {
      //force the image to be owned by the user
      doc.createdBy = userId;
      if(userId != doc.createdBy) { //user logged in, image has correct author
        return false
      }
      else {  //image has incorrect author
        return true;
      }
    }
    else { //user not logged in
      return false;
    }
  },
  remove: function(userId, doc) {
    return true;
  }
})
