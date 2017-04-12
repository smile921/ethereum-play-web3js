import Ember from 'ember';

import web3 from 'ember-web3/services/web3';
export default Ember.Route.extend({

    web3: Ember.inject.service(),
    clog:function(){
        console.log(web3);
    },
    model(){
        let web3Obj = this.get('web3');
        let web3 = web3Obj.web3Instance;
        let block = web3.eth.defaultBlock;
        let number = web3.eth.blockNumber;
        let listAccount = web3.eth.accounts;
        let  gasPrice = web3.eth.gasPrice;
        let hashrate = web3.eth.hashrate;
        let mining = web3.eth.mining;
        let sync = web3.eth.syncing;
        let defaultBlockInfo = web3.eth.getBlock(block);
        // debugger
        let data = {
            
            block:block,
            number:number,
            listAccount:listAccount,
            gasPrice:gasPrice,
            hashrate:hashrate,
            mining:mining,
            sync:sync,
            info:defaultBlockInfo
        };
        return JSON.stringify(data, null, 4);
    }
});
