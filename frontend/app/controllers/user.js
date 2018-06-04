import Controller from '@ember/controller';

export default Controller.extend({
	filterOptions: [
    { name: "Default filter" },
    { name: "High-Severity Filter" },
    { name: "Today-Only Filter" }
  ]
});
