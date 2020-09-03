/*const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, 'contracts', 'final.sol');
const source = fs.readFileSync(campaignPath,'utf-8');
const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildPath);

for(let contract in output){
    fs.outputJSONSync(
        path.resolve(buildPath, contract + '.json'),
        output[contract]
    );
}*/
const path = require("path"); //nodejs ’path’ module
const solc = require("solc"); //solidity compiler module
const fs = require("fs-extra"); //file system module

const buildPath = path.resolve(__dirname, "build");
const contractspath = path.resolve(__dirname, "contracts");

fs.removeSync(buildPath);
const fileNames = fs.readdirSync(contractspath);

    // Gets ABI of all contracts into variable input
    const input = fileNames.reduce(
      (input, fileName) => {
        const filePath = path.resolve(__dirname, "contracts", 'final.sol');
        const source = fs.readFileSync(filePath, "utf8");
        return { sources: { ...input.sources, ['final']: source } };
      },
      { sources: {} }
    );

    // Compile all contracts
    const output = solc.compile(input, 1).contracts;

    // Re-Create build folder for output files from each contract
    fs.ensureDirSync(buildPath);

    console.log(output);
    

    // Output contains all objects from all contracts
    // Write the contents of each to different files
    for (let contract in output) {
      fs.outputJsonSync(
        path.resolve(buildPath, contract.split(":")[1] + ".json"),
        output[contract]
      );
    }