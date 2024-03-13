// 0x5FbDB2315678afecb367f032d93F642f64180aa3

const hre = require("hardhat");

async function main() {
  const CoinBlogContract = await hre.ethers.getContractFactory(
    "CoinBlogContract"
  );
  const coinBlogContract = await CoinBlogContract.deploy();

  await coinBlogContract.deployed();
  console.log(`Deployed address: ${coinBlogContract.address}`);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(0);
  });
