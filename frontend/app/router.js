import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('create');
  this.route('start');
  this.route('packs');
  this.route('rentals');
  this.route('flashcard');
});

export default Router;
