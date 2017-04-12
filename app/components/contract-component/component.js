import Ember from 'ember';
import ENV from 'ethereum-play-web3js/config/environment';
import web3 from 'ember-web3/services/web3';
import set from 'ember-metal/set';
import get from 'ember-metal/get';

export default Ember.Component.extend({
    // ENV:{web3UserPassword:'smile921'},
    web3: Ember.inject.service(),
    
    actions:{
        // initContract: 
        estimateGas:function(){
            let webInstance = this.get('web3.web3Instance');              
            let code =  get(this,'code');  
            var gasEstimate = webInstance.eth.estimateGas({data: code}); 
            console.log('gas Estimate '+gasEstimate);
            var gasPrice = webInstance.eth.gasPrice;
            var total = gasEstimate*gasPrice; 
            console.log('total: ' + webInstance.fromWei(total,'ether'));
            Ember.$('#estimateGasId').val(webInstance.fromWei(total,'ether')); 
        },
        compileContract:function(){            
            let source = Ember.$('#contractSource').val();
            set(this,'source',source);
            let webInstance = this.get('web3.web3Instance');            
            let compiled = webInstance.eth.compile.solidity(source);            
            let contractName = Ember.$('#contractName').val();
            let code = compiled["<stdin>:"+contractName].code;            
            let abi = compiled["<stdin>:"+contractName].info.abiDefinition; 
            set(this,'abi',abi);
            set(this,'code',code);
            Ember.$('#iabi').val(JSON.stringify(abi));
            Ember.$('#ibin').val(code); 
        },
        createExampleContract:function(){             
            let webInstance = this.get('web3.web3Instance');              
            let code =  get(this,'code');
            let abi = get(this,'abi');
            let myContract = get(this,'myContract');
            let _component_this = this ;
             
            // let's assume that coinbase is our account
            webInstance.eth.defaultAccount = webInstance.eth.coinbase;
            let flag = webInstance.personal.unlockAccount(webInstance.eth.coinbase,
                 ENV.web3UserPassword,999);
            console.log(flag);
            // create contract 
            Ember.$('#dmsg').val('合约部署已发送，等待确认中... ');
            let gas = Ember.$('#gas').val();
            let addr = Ember.$('#addr').val(); 
            console.log(gas);
            var gasEstimate = webInstance.eth.estimateGas({data: code}); 
            console.log('gas Estimate '+gasEstimate);
            var gasPrice = webInstance.eth.gasPrice;
            var total = gasEstimate*gasPrice;
            if(total > gas*gasPrice){
                console.log(' 输入的gas ('+ gas +') 比预估计('+total+')的小，不会部署成功的')
                return ;
            }
            webInstance.eth.contract(abi).new(['smile921','frere921','zhu yb','xu jn'],{data: code,from:addr,gas:gas*gasPrice,gasPrice:1},
             function(err,contract) {
                if(err) {
                    console.error(err);
                    // debugger
                    return;
                // callback fires twice, we only want the second call when the contract is deployed
                } else if(contract.address){
                    // debugger
                    myContract = contract;
                    set(_component_this,'myContract',myContract);
                    console.log('address: ' + myContract.address);
                    Ember.$('#dmsg').val('合约部署成功！ ');
                     
                }
            });
        },
        callExampleContract: function(){
            // this should be generated by ethereum
            let param = parseInt(Ember.$('#contractParam').val());
            let myContract = get(this,'myContract');
            // debugger
            // call the contract
            let res = myContract.multiply(param);
            Ember.$('#result').val(res.toString(10));
        }
    }
});
