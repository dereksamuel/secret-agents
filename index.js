const express = require("express");
const app = express();

app.get("");

app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
