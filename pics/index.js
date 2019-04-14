const fs = require("fs");
const path = require("path");
const args = process.argv.slice(2);
const match = RegExp(args[1], "g");
const replace = args[2];
const files = fs.readdirSync("./");
let counter = 1;

function rename() {
  files.forEach(file => {
    if (file.includes("index")) {
      return;
    }
    console.log(`"pics/${counter}.jpg",`);
    // let oldFileName = `./${file}`;
    // fs.rename(oldFileName, `./${counter}.jpg`, function(err) {
    //   if (err) console.log("ERROR: " + err);
    // });
    // console.log(`${oldFileName} -> ./${counter}.jpg`);
    counter++;
  });
}

rename();
