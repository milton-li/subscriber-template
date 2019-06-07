const subscriber = artifacts.require("Subscriber")
const COORDINATOR = "0x0014f9acd4f4ad4ac65fec3dcee75736fd0a0230";
const OracleAddress = "0x170a5BE3F296123552802081e41810071b2D7133";
const OracleEndpoint = "clarifai_image";

module.exports = function(deployer) {
  deployer.deploy(subscriber, COORDINATOR, OracleAddress, OracleEndpoint);
};
