import Ember from 'ember';
// import web3 from 'ember-web3/services/web3';
// import set from 'ember-metal/set';
// import get from 'ember-metal/get';

export default Ember.Route.extend({
    contractVar:{ source:"" +
        "contract test {\n" +
        "   function multiply(uint a) constant returns(uint d) {\n" +
        "       return a * 7;\n" +
        "   }\n" +
        "}\n",
        contractName:'test',
        id:1 
    },

    model(){
        let contract = this.get('contractVar');
        return contract;
    }

   
});
