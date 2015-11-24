import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  avatar_url: DS.attr(),
  date_created: DS.attr(),
  message: DS.attr(),
  media_url: DS.attr(),
});
