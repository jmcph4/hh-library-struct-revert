import { ethers } from "hardhat"
import { BigNumber, BigNumberish } from "ethers"
import chai from "chai"
import chaiAsPromised from "chai-as-promised"
import { SomeLibrary, SomeLibrary__factory } from "../typechain"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"

chai.use(chaiAsPromised)
const { expect } = chai

describe("SomeLibrary", async () => {
    let signers: SignerWithAddress[]
    let library: SomeLibrary

    beforeEach(async () => {
        signers = await ethers.getSigners()

        const libraryFactory = (await ethers.getContractFactory(
            "SomeLibrary",
            signers[0]
        )) as SomeLibrary__factory

        library = await libraryFactory.deploy()
        await library.deployed()
    })

    describe("foo", async () => {
        context("When called", async () => {
            it("Succeeds", async () => {
                const initStruct = {
                    arr: [1, 2, 3],
                    n: 3,
                };

                const actualStruct = await library.foo(initStruct);

                const expectedStruct = {
                    arr: [],
                    n: 0,
                };

                expect(actualStruct).to.equal(expectedStruct);
            })
        })
    })
})

