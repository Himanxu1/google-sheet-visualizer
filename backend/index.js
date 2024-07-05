require("dotenv").config();
const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const { google } = require("googleapis");
const keys = require("./service-account-key.json");
const app = express();
const PORT = 3001;

app.use(cors());
app.use(fileUpload());

const client = new google.auth.JWT(keys.client_email, null, keys.private_key, [
  "https://www.googleapis.com/auth/spreadsheets",
]);

app.post("/upload", async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  const file = req.files.file;
  const sheets = google.sheets({ version: "v4", auth: client });

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEETID,
      range: "Sheet1!A2:C",
    });

    const rows = response.data.values;

    if (rows.length) {
      const data = rows.map((row) => ({
        id: row[0],
        avatarName: row[1],
        performanceScore: parseFloat(row[2]),
      }));

      res.status(200).json(data);
    } else {
      res.status(404).send("No data found.");
    }
  } catch (error) {
    console.error("Error fetching data from Google Sheets:", error);
    res.status(500).send("Error fetching data from Google Sheets.");
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
