const address ='0x46f5091f0dc9511d0fe61ffdd5a1a8acba3330ac';
const ABI =[
  {
    "constant": false,
    "inputs": [
      {
        "name": "to",
        "type": "address"
      }
    ],
    "name": "delegate",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "toVoter",
        "type": "address"
      }
    ],
    "name": "giveRightToVote",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "_numProposals",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "toProposal",
        "type": "uint8"
      }
    ],
    "name": "vote",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "winningProposal",
    "outputs": [
      {
        "name": "_winningProposal",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];

export {address,ABI};
