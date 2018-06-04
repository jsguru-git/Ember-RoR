import Controller from '@ember/controller';

export default Controller.extend({
	userOptions: [
    { name: "Ase" },
    { name: "Meggevo" },
    { name: "Mukasa" },
    { name: "Yoshida" },
    { name: "Ase" },
    { name: "Meggevo" },
    { name: "Maxim" }
  	],
  	inviteOptions: [
    { name: "Ase" },
    { name: "Meggevo" },
    { name: "Mukasa" },
    { name: "Yoshida" },
    { name: "Ase" },
    { name: "Meggevo" },
    { name: "Maxim" }
  	],
 //  	actions: {
	// 	filterByOwner(param) {
	// 		if(param !== '') {
	// 			return this.get('store')
 //          			.query('pack', { owner: param }).then((results) => {
 //            		return { query: param, results: results };
 //          	});
	// 		} else {
	// 			// return this.get('store').findAll('pack');
	// 			return this.get('store')
 //          			.findAll('pack').then((results) => {
 //            		return { query: param, results: results };
 //          		});
	// 		}
	// 	}
	// }
});
