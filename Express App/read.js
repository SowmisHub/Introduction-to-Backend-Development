const fs = require("fs");

// function to read Data.txt
function readFileData() {
  try {
    const data = fs.readFileSync("Data.txt", "utf-8");
    return data;
  } catch (error) {
    return "Error reading file!";
  }
}

// export the function
module.exports = readFileData;
