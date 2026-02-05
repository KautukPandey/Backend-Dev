const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;


app.use(express.json());


const DATA_FILE = path.join(__dirname, "data.json");


const readData = () => {
  const fileData = fs.readFileSync(DATA_FILE, "utf-8");
  return JSON.parse(fileData);
};


const writeData = (data) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
};


app.post("/add", (req, res) => {
  const newData = req.body;

  if (!newData || Object.keys(newData).length === 0) {
    return res.status(400).json({ message: "No data provided" });
  }

  const existingData = readData();
  existingData.push(newData);
  writeData(existingData);

  res.status(201).json({
    message: "Data saved successfully",
    data: newData,
  });
});


app.get("/data", (req, res) => {
  const data = readData();
  res.json(data);
});




app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
