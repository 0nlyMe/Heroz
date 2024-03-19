// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CoinBlogContract {
    
    // address payable public author; 

    function donate(address payable author, uint256 amount) public payable {
        author.transfer(amount);
    }

    fallback() external payable {
        revert("Fallback is not payable");
    }

    receive() external payable {
        revert("Receive is not payable"); 
    }
}
