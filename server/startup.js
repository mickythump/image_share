if (Meteor.isServer) {
  Meteor.startup(function() {
    if (Images.find().count() === 0) {
      for (var i = 1; i < 19; i++) {
        Images.insert({
          img_src: "img_" + i + ".jpg",
          img_alt: "image number " + i
        });
      }
      console.log("startup.js says" + Images.find().count());
    }
  });
}
