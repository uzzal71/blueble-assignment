// import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import app from "./app";
import connectMongo from "./dbConnect/connectMongo";
import ErrorHandleMiddleware from "./src/middlewares/ErrorHandleMiddleware";
import RouteNotFoundMiddleware from "./src/middlewares/RouteNotFoundMiddleware";
import routeConfiguration from "./src/routes";
// import swaggerOptions from "./src/utils/Swagger";
import swaggerDocument from "./api-document.json";

// const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

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
app.use(ErrorHandleMiddleware);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
