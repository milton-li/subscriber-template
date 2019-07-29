const subscriber = artifacts.require("Subscriber");
var contract = require("truffle-contract");
var web3 = require("web3");

const COORDINATOR = "0x0014f9acd4f4ad4ac65fec3dcee75736fd0a0230";
const OracleAddress = "0x170a5BE3F296123552802081e41810071b2D7133";
const OracleEndpoint = "clarifai_image";

var CoordinatorContract = contract({
  address: COORDINATOR
});

var OracleContract = contract({
  address: OracleAddress
});

module.exports = (deployer, network) => {
  console.log("Running");

  deployer.deploy(subscriber, CoordinatorContract.address, OracleContract.address, web3.toAscii(OracleEndpoint));
};
