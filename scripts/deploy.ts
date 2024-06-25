async function main() {
  const L1BitcoinDepositor = await ethers.getContractFactory("L1BitcoinDepositor");
  const l1BitcoinDepositor = await L1BitcoinDepositor.deploy();
  await l1BitcoinDepositor.deployed();
  console.log("L1BitcoinDepositor deployed to:", l1BitcoinDepositor.address);

  const L2BitcoinDepositor = await ethers.getContractFactory("L2BitcoinDepositor");
  const l2BitcoinDepositor = await L2BitcoinDepositor.deploy();
  await l2BitcoinDepositor.deployed();
  console.log("L2BitcoinDepositor deployed to:", l2BitcoinDepositor.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
