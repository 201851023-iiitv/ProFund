import Web3 from 'web3';

//const web3 = new Web3(window.web3.currentProvider);
let web3;

if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined'){
    web3 = new Web3(window.web3.currentProvider);
}else {
    //on the server or metamask not running metamask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/2f9de067eb1b4931b658827b6649c006'
    );
    web3 = new Web3(provider);
}

export default web3;