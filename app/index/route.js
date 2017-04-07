import Ember from 'ember';

import web3 from 'ember-web3/services/web3';
export default Ember.Route.extend({
    web3: Ember.inject.service(),
    model(){
        let web3 = this.get('web3.web3Instance');
        return web3.version;
    }
});
