const Web3 = require('web3');
const web3 = new Web3('https://ropsten.infura.io/v3/66d81ce985eb460ea88945888703f254');

async function getBalance(address) {
    const result = await web3.eth.getBalance(address);
    console.log(result)

    const weiToEther = web3.utils.fromWei(result,'ether');
    console.log(weiToEther);
}

getBalance('0xA07634A1ce0Fa33D3f9147108fcdAf02E591e21E');
// result : 2957209069100000000
