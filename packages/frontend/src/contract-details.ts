const ContractDetails = {
  address: "0x374589043D4470d94d092f257aE9E12e8D86d400",
  abi: [
    { type: "constructor", payable: false, inputs: [] },
    {
      type: "function",
      name: "createAgreement",
      constant: false,
      payable: false,
      inputs: [
        { type: "address", name: "_initiator" },
        { type: "address", name: "_acceptor" },
        { type: "string", name: "_title" },
        { type: "string", name: "_content_id" },
      ],
      outputs: [
        {
          type: "tuple",
          components: [
            { type: "address", name: "initiator" },
            { type: "address", name: "acceptor" },
            { type: "string", name: "title" },
            { type: "string", name: "content_id" },
            { type: "bool", name: "isCreated" },
          ],
        },
      ],
    },
    {
      type: "function",
      name: "getAgreement",
      constant: true,
      stateMutability: "view",
      payable: false,
      inputs: [{ type: "string", name: "_content_id" }],
      outputs: [
        {
          type: "tuple",
          components: [
            { type: "address", name: "initiator" },
            { type: "address", name: "acceptor" },
            { type: "string", name: "title" },
            { type: "string", name: "content_id" },
            { type: "bool", name: "isCreated" },
          ],
        },
      ],
    },
  ],
};

export default ContractDetails;
