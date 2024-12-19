require("dotenv-flow").config();

const express = require("express");
const cors = require("cors");
const Database = require("./config/database");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", require("./routes"));

app.get("/", (req, res) => {
  res.send(
    'Successfully working...'
  );
});

const port = process.env.PORT || 5000;

app.listen(port, async () => {
  console.log(`Server listening on port ${port}`);
});

const db = new Database(process.env.MONGODB_URI, {});

db.connect().catch((err) =>
  console.error("Error connecting to database:", err)
);
