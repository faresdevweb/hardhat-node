import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    hardhat: {
      forking: {
        url: "https://blast-mainnet.infura.io/v3/a2db5be731de42cabea3e81a57657648",
        // blockNumber: 2844398
      },
      chainId: 81457,
      chains: {
        81457: {
          hardforkHistory: {
            berlin: 2844398,
            london: 2844398,
          }
        }
      }
    },
  }
};

export default config;
