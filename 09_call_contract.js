const Web3 = require('web3');
const web3 = new Web3('https://ropsten.infura.io/v3/9d5e558c96af46cd8faac612be4bad45');

const calculatorAbi = require('./abi/calculator');
const calculatorContractAddress = '0xf572f85d2b08263c78c34578333b9d5218e92ae6';
const Calculator = new web3.eth.Contract(calculatorAbi, calculatorContractAddress);
