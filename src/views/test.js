const { PrimeSdk } = require('@etherspot/prime-sdk');
const primeSdk = new PrimeSdk(
    { privateKey: '0x0101010101010101010101010101010101010101010101010101010101010101' }, 
    { 
      chainId: 137, 
      projectKey: '' 
    },
);
console.log(primeSdk.state);
