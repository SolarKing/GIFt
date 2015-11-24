import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    send_message() {
      console.log("sent message");
      var store = this.store;
      store.createRecord('message', {
        author: "Anon",
        avatar_url: "http://bigpicturesb.net/wp-content/uploads/2011/11/generic-profile-pic.png",
        date_created: function() {
          return Date.now()
        }.property(),
        message: this.get('message'),
        media_url: this.get('media_url'),
      });
      this.set('message', "");
      this.set('media_url', "");
    }
  }
});
