const express = require("express");
const app = express();

app.use((req, res) => {
  res.send("Hello From Node");
});

const port = 3000;
app.listen(3000, () => {
  console.log(`Server running on port ${port}`);
});
