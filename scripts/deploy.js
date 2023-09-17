// scripts/deploy.js
async function main () {

  const Eigen = await ethers.getContractFactory('Eigen');
  console.log('Deploying Eigen...');
  const eigen = await Eigen.deploy();
  await eigen.deployed();
  console.log('Eigen deployed to:', eigen.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });