// 1. Import express
const express = require("express");

// 2. Create an express app
const app = express();

// 3. Define PORT number
const PORT = 3000;

// 4. Home route
app.get("/home", (req, res) => {
  res.json({
    message: "This is home page"
  });
});

// 5. Contact Us route
app.get("/contactus", (req, res) => {
  res.json({
    message: "Contact us at contact@contact.com"
  });
});

// 6. About route (Bonus Task)
app.get("/about", (req, res) => {
  res.json({
    message: "Welcome to the About page!"
  });
});

// 7. Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
