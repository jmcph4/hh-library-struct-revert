//SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

library SomeLibrary {
    struct MyNaughtyStruct {
        uint256[] arr;
        uint256 n;
    }

    function foo(
        MyNaughtyStruct calldata st
    ) public pure returns (MyNaughtyStruct memory) {
        uint256[] memory xs;
        return MyNaughtyStruct(xs, 0);
    }
}
