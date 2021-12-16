require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture stove razor spider column install clog metal gift'; 
let testAccounts = [
"0xf54df428a583bb395504a6e3cdde31b256cbd4838eb4b557f37ca9e97924a29d",
"0x0dd3e2b66e7a08f3ce2888523aecdf8a1bd76d3509d212c029df289a7dd1954c",
"0x569bc64207bbb7c3a401b6c2b9ec31d5966e3d2b9b0cb1d4f31bc472b8089671",
"0x8a9206bc7dea898592f26da68a57e5e3487a477f0ab2a07ce39bb73e5e88d5c6",
"0xfea2a651a1259d1791a569fa771e58db03a07b435456e669cb3a110854c0ff82",
"0x4b38388fb0af4925ed311eee20d62a2a559c0aac5b15a7dc62f2e27aa242452a",
"0x9189e0a417337703337c66c991aa48ddecbc2d648d31d5e19127dda3f88c10a5",
"0xdf4fd557b984918eec303fc12d0a4000509d8955df65f89942c62df34f88823c",
"0xe455024129a5211bfd14e57138ca6ef320f2e3644a97207b961a6e5600d1f73c",
"0x4960ba09807e3086a1ab60e0df1d27f543aca37fcece932b2e0e38a1fe942e38"
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

