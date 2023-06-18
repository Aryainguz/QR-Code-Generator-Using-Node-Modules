import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs"

// import fs from "fs";
// var qr = require("qr-image")

inquirer
  .prompt([
    {message:"Hey, welcome to qr-generator please enter url you want to make QR for !",
    name : "URL"
}
  ])
  .then((answers) => {
    const URL = answers.URL
    var qr_svg = qr.image(URL);

    // qr_svg.pipe(require('fs').createWriteStream('QR_ByAryan.png'));  //we can't use require if using import 
    
    qr_svg.pipe(fs.createWriteStream('QR_ByAryan.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
    } else {
    }
  });