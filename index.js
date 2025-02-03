const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
app.use(cors());

app.get("/quiz", async (req, res) => {
  try {
    const response = await fetch("https://api.jsonserve.com/Uw5CrX");
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch quiz data" });
  }
});

app.listen(5500, () => console.log("Server running on port 5500"));
