var fs = require("fs");


// NOTE: Assume u running one level on top of this directory.
const FILE_PATH = `${__dirname}/main_original.js`;
const OUTPUT_PATH = `./main.js`; // Same level of the project, so we go back (..) and cd
const params = process.argv.slice(2);

// Reference obfuscator module
const jsObfuscator = require("javascript-obfuscator");

if (0 !== params.length) {
  console.log('params: ', params);
}

// Read your js file
fs.readFile(FILE_PATH, "UTF-8", function (error, code) {
  if (error) throw error;

  // Here obfuscator your js code
  var obfuscatedResult = jsObfuscator.obfuscate(code, {
    compact: true,
    controlFlowFlattening: true,
    controlFlowFlatteningThreshold: 1,
    numbersToExpressions: true,
    simplify: false,
    shuffleStringArray: true,
    splitStrings: true,
    stringArrayThreshold: 1,
    renameGlobals: true,
    // optionsPreset: "high-obfuscation", // this contains the debugger in js.

  });

  // Write code into separate js
  fs.writeFile(OUTPUT_PATH, obfuscatedResult.getObfuscatedCode(), function (fsError) {
    if (fsError) console.log(fsError);
    console.log(`
 ██████╗ ██████╗ ███████╗██╗   ██╗███████╗ ██████╗ █████╗ ████████╗███████╗██████╗ ██╗
██╔═══██╗██╔══██╗██╔════╝██║   ██║██╔════╝██╔════╝██╔══██╗╚══██╔══╝██╔════╝██╔══██╗██║
██║   ██║██████╔╝█████╗  ██║   ██║███████╗██║     ███████║   ██║   █████╗  ██║  ██║██║
██║   ██║██╔══██╗██╔══╝  ██║   ██║╚════██║██║     ██╔══██║   ██║   ██╔══╝  ██║  ██║╚═╝
╚██████╔╝██████╔╝██║     ╚██████╔╝███████║╚██████╗██║  ██║   ██║   ███████╗██████╔╝██╗
 ╚═════╝ ╚═════╝ ╚═╝      ╚═════╝ ╚══════╝ ╚═════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═════╝ ╚═╝
        `);
  });
});
/*

Run ->
node 000_unencrypted-js/obfuscator.js

*/
