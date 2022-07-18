const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const router = require("./routes/index");

dotenv.config();
const app = express();

const corsOption = {
  optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOption));
app.use(morgan("tiny"));

app.use("/api", router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});