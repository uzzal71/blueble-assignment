import app from "./app";
import connectMongo from "./dbConnect/connectMongo";
import RouteNotFoundMiddleware from "./src/middlewares/RouteNotFoundMiddleware";
import routeConfiguration from "./src/routes";

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`Bluble server running on port ${port}`);
});

// database connection
(async () => {
  try {
    await connectMongo();
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
})();

// router configuration
routeConfiguration(app);
app.use(RouteNotFoundMiddleware);

// Error handling middleware
app.use((err, req, res, next) => {
  let message = "Internal Server Error";
  let statusCode = 500;
  if (err.message === "401") {
    message = "Authentication failed";
    statusCode = 401;
  }

  res.status(statusCode).json({
    status: false,
    message: message,
    data: {},
    statusCode: statusCode,
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
