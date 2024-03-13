// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CoinBlogContract {
    function donate(address payable author, uint256 amount) external payable {
        require(msg.value >= amount, "Insufficient funds");
        author.transfer(msg.value);
    }
}

