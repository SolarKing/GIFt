import Ember from 'ember';

export default Ember.Component.extend({

  is_unwrapped: false,

  profileStyle: function() {
    return "background-image: url(" + this.get("avatar_url") + ");";
  }.property(),

  // timestamp: function() {
  //   return Date.now();
  // }.property(),

  actions: {
    unwrap() {
      this.toggleProperty('is_unwrapped');
    }
  }

});
