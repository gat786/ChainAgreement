//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract ChainAgreement {
    constructor(){}

    struct Agreement {
        address initiator;
        address acceptor;
        string title;
        string content_id;
    }
    mapping(string => Agreement) agreements;

    function createAgreement(
        address _initiator,
        address _acceptor,
        string memory _title,
        string memory _content_id
    ) public returns (Agreement memory) {
        Agreement memory agreement = Agreement({
            initiator: _initiator,
            acceptor: _acceptor,
            title: _title,
            content_id: _content_id
        });
        agreements[_content_id] = agreement;
        return agreement;
    }

    function getAgreement(string memory _content_id)
        public
        view
        returns (Agreement memory)
    {
        return agreements[_content_id];
    }
}
