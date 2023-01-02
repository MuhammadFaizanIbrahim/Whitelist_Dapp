require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

module.exports = {
  defaultNetwork: "goerli",
  networks: {
    hardhat: {
    },
    goerli: {
      url: "https://boldest-wider-layer.ethereum-goerli.discover.quiknode.pro/0447a5232535ba5077476c817766ab32a2cbdde8",
      accounts: ["e58e109574aaa828944c45a236d5666572a7ba7f9bb69ae36f355619154d9e6c"],
}
  },
  solidity: {
    version: "0.8.15",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
 
}