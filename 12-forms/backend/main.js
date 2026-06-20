import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  console.log("GET / hit");
  res.send("Hello Neha");
});

app.post("/submitn", (req, res) => {
  console.log("POST /submitn hit");
  console.log(req.body);

  res.json({
    received: req.body,
  }); 
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 