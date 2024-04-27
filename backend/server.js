import app from "./app";

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`Bluble server running on port ${PORT}`);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
