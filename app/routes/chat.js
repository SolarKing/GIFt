import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    this.store.push({
      data: [
        {
          id: 1,
          type: 'message',
          attributes: {
            author: "Handsome Squidward",
            avatar_url: "http://40.media.tumblr.com/9f9e8f3e6bee26f0db555417bcb86e69/tumblr_npfqbjgJui1uvyyjko2_1280.jpg",
            date_created: function() {
              return Date.now();
            }.property(),
            message: "Sometimes I feel very handsome!",
            media_url: "https://media.giphy.com/media/JEwkJBsI9SqQw/giphy.gif",
          }
        }
      ]
    });

    return this.store.findAll('message');
  }
});
