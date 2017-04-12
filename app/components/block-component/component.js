import Ember from 'ember';

import web3 from 'ember-web3/services/web3';
export default Ember.Component.extend({
    blockInfo:{},
    inumb:null,
    blockInfoJson:{},
    web3:Ember.inject.service(), 
    clog:function(){
        console.log(web3);
    },
    actions:{
        showBlockInfo:function() {
            let web3 =  this.get('web3.web3Instance');
            let inumb = this.get('inumb');
            if(!inumb){
                inumb = 'latest';
            }
            let bl = web3.eth.getBlock(inumb);
            this.set('blockInfo',bl);
            bl.logsBloom =' ... ';
            let json = JSON.stringify(bl, null, 4);
            console.log(json);
            this.set('blockInfoJson',json);
        }
    }
});
