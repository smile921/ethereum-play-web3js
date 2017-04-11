import Ember from 'ember';
import RSVP from 'rsvp';
import  {later}  from 'ember-runloop';
import web3 from 'ember-web3/services/web3';
export default Ember.Route.extend({
    web3: Ember.inject.service(),
    model(){
        let web3 = this.get('web3.web3Instance');
        let promise = new RSVP.Promise( (resolve) => later( () => resolve(web3.version),2000),
            (reject) => later(()=> resolve(web3.version),1500) );
         // return web3.version;
         return promise;
        // return RSVP.Promise((resolve) => later( () => resolve(),3000));
    }
});
