const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("PrivateBank", function () {
    let privateBank;
    let owner;
    let addr1;

    beforeEach(async function () {
        [owner, addr1] = await ethers.getSigners();
        const PrivateBank = await ethers.getContractFactory("PrivateBank");
        privateBank = await PrivateBank.deploy();
        await privateBank.deployed();
    });

    it("Should deposit ether", async function () {
        await privateBank.deposit({ value: ethers.utils.parseEther("1") });
        expect(await privateBank.getUserBalance(owner.address)).to.equal(ethers.utils.parseEther("1"));
    });

    it("Should withdraw ether", async function () {
        await privateBank.deposit({ value: ethers.utils.parseEther("1") });
        await privateBank.withdraw();
        expect(await privateBank.getUserBalance(owner.address)).to.equal(0);
    });

    it("Should get contract balance", async function () {
        await privateBank.deposit({ value: ethers.utils.parseEther("1") });
        expect(await privateBank.getBalance()).to.equal(ethers.utils.parseEther("1"));
    });

    it("Should fail to withdraw if balance is zero", async function () {
        await expect(privateBank.withdraw()).to.be.revertedWith("Insufficient balance");
    });

    it("Should handle multiple users correctly", async function () {
        await privateBank.connect(addr1).deposit({ value: ethers.utils.parseEther("1") });
        expect(await privateBank.getUserBalance(addr1.address)).to.equal(ethers.utils.parseEther("1"));
        await privateBank.connect(addr1).withdraw();
        expect(await privateBank.getUserBalance(addr1.address)).to.equal(0);
    });
});
