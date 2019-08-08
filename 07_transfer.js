const Web3 = require('web3');
const web3 = new Web3('https://ropsten.infura.io/v3/66d81ce985eb460ea88945888703f254');

const privateKey = '0xf36da44ce00260133a8cf3d7b0f9f7312470044bd5fc9d6532ad1f1ccb795b22';
async function transfer(to, value) {
    let tx = {
        to,
        value,
        gas: 2000000
    };
    try {
        let account = await web3.eth.accounts.privateKeyToAccount(privateKey);
        console.log(account);
        const result = await account.signTransaction(tx);
        console.log(result);

        const txid = await web3.eth.sendSignedTransaction(result.rawTransaction);
    } catch (e) {
        console.error(e);
    }
}

const amount = '0.1'
const etherToWei = web3.utils.toWei(amount);
console.log(etherToWei);
transfer('0xa94840CB73e7CA3A3086D762f19796B255cb7bCd', etherToWei);