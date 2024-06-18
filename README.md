# PrivateBank.sol-COVERAGETEST-2
Test Coverage for Vottun World Activity using HardHat

# Private Bank Test

This repository contains tests for the PrivateBank smart contract.

## Prerequisites

- Node.js
- npm
- Hardhat

## Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/private-bank-test.git
    cd private-bank-test
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Compile the contracts:
    ```bash
    npx hardhat compile
--------------------------------------------------------
Compile the Contracts:
npx hardhat compile
Nota: he tendido que modificar la linea del PrivateBank.sol a lo siguiente:“ pragma solidity ^0.8.0; // o la versión que tengas configurada en tu proyecto”
--------------------------------------------------------

4. Run the tests:
    ```bash
    npx hardhat test
    ```

## Contract Description

`PrivateBank.sol` is a smart contract that allows users to deposit and withdraw Ether. It maintains a balance mapping for each user.

## Test Coverage

The tests cover the following scenarios:
- Depositing Ether
- Withdrawing Ether
- Checking contract balance
- Handling zero balance withdrawals
- Handling multiple users
