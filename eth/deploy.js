const HDWalletProvider = require ('@truffle/hdwallet-provider');
const Web3 = require('web3');
//const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
    'pyramid daughter destroy happy joke topic virtual long cart swamp merit enter',
    'https://rinkeby.infura.io/v3/2f9de067eb1b4931b658827b6649c006'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account ', accounts[0]);
    const result = await new web3.eth.Contract([{"constant":false,"inputs":[{"internalType":"uint256","name":"minimum","type":"uint256"}],"name":"createCampaign","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"deployedCampaigns","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getDeployedCamapigns","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"}])
        .deploy({data : '60806040523480156100115760006000fd5b50610017565b6110c7806100266000396000f3fe60806040523480156100115760006000fd5b50600436106100465760003560e01c8063339d50a51461004c578063a3303a75146100bb578063d4933ea2146100ea57610046565b60006000fd5b610079600480360360208110156100635760006000fd5b810190808035906020019092919050505061014a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6100e8600480360360208110156100d25760006000fd5b810190808035906020019092919050505061018f565b005b6100f261026c565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156101365780820151818401525b60208101905061011a565b505050509050019250505060405180910390f35b60006000508181548110151561015c57fe5b906000526020600020900160005b9150909054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000813360405161019f90610302565b808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050604051809103906000f0801580156101f9573d600060003e3d6000fd5b50905060006000508190806001815401808255809150509060018203906000526020600020900160005b909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505b50565b606060006000508054806020026020016040519081016040528092919081815260200182805480156102f357602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116102a9575b505050505090506102ff565b90565b610d83806103108339019056fe60806040523480156100115760006000fd5b50604051610d83380380610d83833981810160405260408110156100355760006000fd5b8101908080519060200190929190805190602001909291905050505b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508160026000508190909055505b50506100a6565b610cce806100b56000396000f3fe6080604052600436106100a05760003560e01c806381d12c581161006457806381d12c581461024657806382fde093146103495780638a9cfd5514610375578063937e09b114610470578063d7bb99ba1461049c578063d7d1bbdb146104a6576100a0565b806303441006146100a65780630a144391146100e35780633fad18341461014e5780634051ddac1461017a578063481c6a75146101ee576100a0565b60006000fd5b3480156100b35760006000fd5b506100e1600480360360208110156100cb5760006000fd5b81019080803590602001909291905050506104e3565b005b3480156100f05760006000fd5b50610134600480360360208110156101085760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061064a565b604051808215151515815260200191505060405180910390f35b34801561015b5760006000fd5b5061016461066f565b6040518082815260200191505060405180910390f35b3480156101875760006000fd5b50610190610684565b604051808681526020018581526020018481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019550505050505060405180910390f35b3480156101fb5760006000fd5b506102046106dd565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102535760006000fd5b506102816004803603602081101561026b5760006000fd5b8101908080359060200190929190505050610703565b60405180806020018681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200184151515158152602001838152602001828103825287818151815260200191508051906020019080838360005b8381101561030a5780820151818401525b6020810190506102ee565b50505050905090810190601f1680156103375780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b3480156103565760006000fd5b5061035f61081a565b6040518082815260200191505060405180910390f35b3480156103825760006000fd5b5061046e6004803603606081101561039a5760006000fd5b81019080803590602001906401000000008111156103b85760006000fd5b8201836020820111156103cb5760006000fd5b803590602001918460018302840111640100000000831117156103ee5760006000fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505090909192909091929080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610823565b005b34801561047d5760006000fd5b506104866109b0565b6040518082815260200191505060405180910390f35b6104a46109b9565b005b3480156104b35760006000fd5b506104e1600480360360208110156104cb5760006000fd5b8101908080359060200190929190505050610a42565b005b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156105405760006000fd5b600060006000508281548110151561055457fe5b906000526020600020906005020160005b509050600260046000505481151561057957fe5b04816003016000505411151561058f5760006000fd5b8060020160149054906101000a900460ff161515156105ae5760006000fd5b60008160020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff166108fc83600101600050549081150290604051600060405180830381858888f19350505050158015610625573d600060003e3d6000fd5b5060018260020160146101000a81548160ff02191690831515021790555050505b5b50565b600360005060205280600052604060002060009150909054906101000a900460ff1681565b60006000600050805490509050610681565b90565b6000600060006000600060026000505447600060005080549050600460005054600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16945094509450945094506106d6565b9091929394565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006000508181548110151561071557fe5b906000526020600020906005020160005b91509050806000016000508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107c55780601f1061079a576101008083540402835291602001916107c5565b820191906000526020600020905b8154815290600101906020018083116107a857829003601f168201915b5050505050908060010160005054908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160149054906101000a900460ff16908060030160005054905085565b60046000505481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156108805760006000fd5b610888610b9f565b6040518060a001604052808581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1681526020016000151581526020016000815260200150905060006000508190806001815401808255809150509060018203906000526020600020906005020160005b9091929091909150600082015181600001600050908051906020019061091f929190610be9565b5060208201518160010160005090905560408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060608201518160020160146101000a81548160ff021916908315150217905550608082015181600301600050909055505050505b5b505050565b60026000505481565b60026000505434101515156109ce5760006000fd5b6001600360005060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600460008181505480929190600101919050909055505b565b6000600060005082815481101515610a5657fe5b906000526020600020906005020160005b509050600360005060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515610ac65760006000fd5b8060040160005060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151515610b255760006000fd5b60018160040160005060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550806003016000818150548092919060010191905090905550505b50565b6040518060a001604052806060815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600015158152602001600081526020015090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610c2a57805160ff1916838001178555610c5d565b82800160010185558215610c5d579182015b82811115610c5c5782518260005090905591602001919060010190610c3c565b5b509050610c6a9190610c6e565b5090565b610c969190610c78565b80821115610c925760008181506000905550600101610c78565b5090565b9056fea265627a7a7231582080d39d612d0693225c95394a6bf85b390d56ca7967bcaacd104f624d2a3f32c664736f6c63430005110032a265627a7a72315820a998f6689102df6440e4a4c190302d6a36adfee8ab547a77392aa306420a71bc64736f6c63430005110032'})
        .send({gas : '1000000', from : accounts[0]});
    //console.log('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"enter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getList","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pickWin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"players","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]');
    console.log('Contract deployed to ', result.options.address);
};
deploy();