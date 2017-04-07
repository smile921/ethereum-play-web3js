import Ember from 'ember';

import web3 from 'ember-web3/services/web3';
import set from 'ember-metal/set';
import get from 'ember-metal/get';

export default Ember.Component.extend({

 web3 : Ember.inject.service(),
    // var Web3 = require('web3');
    // var web3 = new Web3();
    // web3.setProvider(new web3.providers.HttpProvider());
 didInsertElement:function () {
    this._super(...arguments);
    this.errors = []; 
    // debugger
    let web3 = this.get('web3.web3Instance');
    let coinbase = web3.eth.coinbase;
    Ember.$('#walletAddr').val(coinbase);
 },
 actions:{
    watchBalance: function() {
        // debugger;
        let tmp =  get(this,'web3.web3Instance');
        set(this,'tmp',tmp);

        let web3 = this.get('web3.web3Instance');
        let coinbase = Ember.$('#walletAddr').val();
        console.log(coinbase);
         
        let originalBalance = web3.eth.getBalance(coinbase).toNumber();
        Ember.$('#coinbase').val(coinbase);
        Ember.$('#original').val(' : ' + originalBalance +'watching'); 

        web3.eth.filter('latest').watch(function() {
            var currentBalance = web3.eth.getBalance(coinbase).toNumber();
            Ember.$('#current').val(' : ' + currentBalance);
            Ember.$('#diff').val(' : ' + (currentBalance - originalBalance));              
        });
    }
 }
    
});
