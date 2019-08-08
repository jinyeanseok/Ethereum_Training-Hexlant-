const HDWalletProvider = require('truffle-hdwallet-provider-privkey'); //npm 모
const privateKeys = ['f36da44ce00260133a8cf3d7b0f9f7312470044bd5fc9d6532ad1f1ccb795b22']; // private keys

module.exports = {
  //Network : 배포 할 네트워크에 대한 Config
  networks: {
    development: {
      provider: () => {
        return new HDWalletProvider(privateKeys, 'https://ropsten.infura.io/v3/66d81ce985eb460ea88945888703f254');
      },
      gasPrice: 20000000000,
      network_id: 3
    },
  },
  compilers: {
    solc: {
      version: '0.4.25',
      docker: false,
    }
  }
};
