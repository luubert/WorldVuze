// Attach events to keydown, keyup, and blur on "New list" input box.
Template.login.events = {
  'submit form[name=login]': function(event) {
    event.preventDefault();
    //invoke the signup user method
    //sign_up_user: function(username, name, password, type){
    var form = $('form[name=login]')[0];
    Meteor.call('sign_up_user', form.username.value, form.password.value, form.type.value);
  }
};

Template.nav.events = {
  'click .logout': function(event) {
    event.preventDefault();
    Session.set('WorldVuze', null);
  }
}

Template.location.locations = function(){
  var list_of_locs = [];

  var get_location = function(location){
   // #add api to get latitude and longitude and return a hash with lat: and lng:
  };

  for(i=0; i< Teacher.count; i++){
    list_of_locs.push(get_location(Teacher[i].location));
  }
  return list_of_locs;
};


Template.location.build_map = function(lat,lng){
  //gmap.js library
  map.addMarker({
  lat: lat,
  lng: lng});
};
//////
////// Initialization
//////

Meteor.startup(function () {
  
});

