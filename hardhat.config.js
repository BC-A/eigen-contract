require("@nomicfoundation/hardhat-toolbox");
require('@nomiclabs/hardhat-ethers');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    localzkevm: {
      url: "http://localhost:8123",
      chainId: 1001,
      accounts:[`0x`],
      timeout: 80000
    },
    localzkevmL1: {
      url: "http://localhost:8545",
      chainId: 1337,
      accounts:[`0x`],
      timeout: 80000
    },
  },
  solidity: "0.8.17",
};
