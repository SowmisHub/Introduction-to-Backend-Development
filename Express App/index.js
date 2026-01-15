// Import express
const express = require("express");

// Import built-in modules
const os = require("os");
const dns = require("dns");

// Import custom module
const readFileData = require("./read");

// Create express app
const app = express();

// Define port
const PORT = 3000;

/* ------------------ ROUTES ------------------ */

// Test Route
app.get("/test", (req, res) => {
  res.send("Test route is working!");
});

// Read File Route
app.get("/readfile", (req, res) => {
  const fileData = readFileData();
  res.send(fileData);
});

// System Details Route
app.get("/systemdetails", (req, res) => {
  const platform = os.platform();
  const totalMemory = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
  const freeMemory = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);
  const cpuModel = os.cpus()[0].model;
  const cpuCores = os.cpus().length;

  res.json({
    platform,
    totalMemory: `${totalMemory} GB`,
    freeMemory: `${freeMemory} GB`,
    cpuModel,
    cpuCores
  });
});

// Get IP Route
app.get("/getip", (req, res) => {
  dns.lookup("masaischool.com", { all: true }, (err, addresses) => {
    if (err) {
      res.json({ error: "DNS lookup failed" });
    } else {
      res.json({
        hostname: "masaischool.com",
        addresses
      });
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
