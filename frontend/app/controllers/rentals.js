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
  	
	actions: {
    filterByCity(param) {
      if (param !== '') {
        return this.get('store').query('rental', { question: param });
      } else {
        return this.get('store').findAll('rental');
      }
    }
  }
});
