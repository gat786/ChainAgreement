//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ChainAgreement {
    constructor() {}

    struct Agreement {
        address initiator;
        address acceptor;
        string title;
        string content_id;
        bool isCreated;
    }
    mapping(string => Agreement) agreements;

    function createAgreement(
        address _initiator,
        address _acceptor,
        string memory _title,
        string memory _content_id
    ) public returns (Agreement memory) {
        require(
            agreements[_content_id].isCreated != true,
            "agreement with the same content id already exists"
        );
        Agreement memory agreement = Agreement({
            initiator: _initiator,
            acceptor: _acceptor,
            title: _title,
            content_id: _content_id,
            isCreated: true
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
