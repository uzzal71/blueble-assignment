import app from "./app";
import ErrorHandleMiddleware from "./src/middlewares/ErrorHandleMiddleware";
import RouteNotFoundMiddleware from "./src/middlewares/RouteNotFoundMiddleware";
import routeConfiguration from "./src/routes";

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`Bluble server running on port ${PORT}`);
});

routeConfiguration(app);
app.use(RouteNotFoundMiddleware);
app.use(ErrorHandleMiddleware);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
