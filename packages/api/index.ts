import express from "express";
import contracts from "./contract";

const app = express();
const port = process.env.PORT || 9545;

app.get("/", (req, res) => {
  res.send("You have reached the api endpoint");
});

app.use("/contracts", contracts);

app.listen(port, () => {
  console.log(`Express started on ${port}`);
});
