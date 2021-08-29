require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom solution mansion creek stick mad give climb obscure swallow'; 
let testAccounts = [
"0x0c5a707030eb55de38e555c7c79be7081b89d3f31d3b9c0f7624aab8f6c99267",
"0x99a1d52d9cdd0ddfb79bf0ff767914b25856e77820ad3224526802a622bf4d90",
"0xc2becca9a21eb5db9cca7cf121dbf4e471ac8c1c2df48d51e3f29f71a0fd70db",
"0xd512b428ded017f1ce0e9eda565dea4bed7990f1f59eaa833427f7971d385f22",
"0xb79da080ecaacbf3b62a50e1e97cbb1d2b5593419802d16f6b12d586b0b8f762",
"0x564618ca1e7d8b9f6d234aaa7f70ef97f9c0b81770dd1ae110df8d21b83d3038",
"0x904196fd41db713e6ad95d2057e76e83291a45e0bf74c43af34c689a8ee69dd0",
"0x7239a610358127f600f1fddbbc94b3e9943cdc1e236830eb73c955f4033c460b",
"0x595de7da4f574b29262c3a8e3280871468fa3974dbc21b5c6f930fb7b2ec05e1",
"0x9f020eb15e9ea46eb27b99c3f5f341f9e35aad1001de6ccc74d4e0972ce17402"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

