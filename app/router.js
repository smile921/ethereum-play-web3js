import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('namereg');
  this.route('balance');
  this.route('contract');
  this.route('block');
  this.route('ballot');
});

export default Router;
