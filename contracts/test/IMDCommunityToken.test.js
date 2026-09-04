const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("IMDCommunityToken", function () {
  let token;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();
    
    const IMDCommunityToken = await ethers.getContractFactory("IMDCommunityToken");
    token = await IMDCommunityToken.deploy(
      "Test Token",
      "TST",
      "https://test.com",
      "@test"
    );
    await token.waitForDeployment();
  });

  describe("Deployment", function () {
    it("Should set the correct name and symbol", async function () {
      expect(await token.name()).to.equal("Test Token");
      expect(await token.symbol()).to.equal("TST");
    });

    it("Should mint total supply to owner", async function () {
      const totalSupply = await token.totalSupply();
      expect(await token.balanceOf(owner.address)).to.equal(totalSupply);
    });

    it("Should set the correct owner", async function () {
      expect(await token.owner()).to.equal(owner.address);
    });

    it("Should set website and social", async function () {
      expect(await token.website()).to.equal("https://test.com");
      expect(await token.social()).to.equal("@test");
    });
  });

  describe("Transfers", function () {
    it("Should transfer tokens between accounts", async function () {
      const amount = ethers.parseEther("1000");
      await token.transfer(addr1.address, amount);
      expect(await token.balanceOf(addr1.address)).to.equal(amount);
    });

    it("Should fail if sender doesn't have enough tokens", async function () {
      const amount = ethers.parseEther("1");
      await expect(
        token.connect(addr1).transfer(owner.address, amount)
      ).to.be.revertedWithCustomError(token, "ERC20InsufficientBalance");
    });
  });

  describe("Burning", function () {
    it("Should burn tokens", async function () {
      const amount = ethers.parseEther("1000");
      const initialBalance = await token.balanceOf(owner.address);
      await token.burn(amount);
      expect(await token.balanceOf(owner.address)).to.equal(initialBalance - amount);
    });
  });

  describe("Admin functions", function () {
    it("Should update website", async function () {
      await token.setWebsite("https://newsite.com");
      expect(await token.website()).to.equal("https://newsite.com");
    });

    it("Should update social", async function () {
      await token.setSocial("@newsocial");
      expect(await token.social()).to.equal("@newsocial");
    });

    it("Should fail if non-owner tries to update website", async function () {
      await expect(
        token.connect(addr1).setWebsite("https://hacker.com")
      ).to.be.revertedWithCustomError(token, "OwnableUnauthorizedAccount");
    });
  });
});
