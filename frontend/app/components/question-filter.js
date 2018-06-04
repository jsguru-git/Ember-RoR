import Component from '@ember/component';

export default Component.extend({
	className: ['question-filter'],
	value: '',

	init() {
		this._super(...arguments);
		this.get('filter')('').then((allResults) => {
      		this.set('results', allResults.results);
    	});
		// this.get('filter')('').then((results) => this.set('results', results));
	},

	actions: {
		handleFilterEntry() {
			let filterInputValue = this.get('value');
			let filterAction = this.get('filter');
			filterAction(filterInputValue).then((filterResults) => {
        		if (filterResults.query === this.get('value')) {
          			this.set('results', filterResults.results);
        		}
      		});
			// filterAction(filterInputValue).then((filterResults) => this.set('results', filterResults));
		}
	}
});
