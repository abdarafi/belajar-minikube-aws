const express = require("express");
const cors = require('cors')

const app = express();

app.options('*', cors()) // include before other routes
app.use(cors())

app.get("/", (req, res) => {
	return res.json({data: "ok" });
});

app.get("/ping", (req, res) => {
  return res.json({data: "pong" })
});

app.listen(3000);
console.log(`App listening on http://localhost:3000`);
