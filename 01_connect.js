const Web3 = require('web3');
const web3 = new Web3('https://ropsten.infura.io/v3/66d81ce985eb460ea88945888703f254');

async function getInfo () {
    const result = await web3.eth.net.getNetworkType();
    console.log(result);
}

getInfo();
