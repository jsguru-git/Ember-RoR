import DS from 'ember-data';

export default DS.Model.extend({
	question: DS.attr(),
  	answer: DS.attr(),
  	// city: DS.attr(),
  	// category: DS.attr(),
  	image: DS.attr()
  	// bedrooms: DS.attr(),
  	// description: DS.attr()
});
