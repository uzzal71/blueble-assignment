import path from "path";

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "Blueble API",
      description: "Blueble API Information",
      contact: {
        name: "Blueble Developer",
      },
      servers: [`http://localhost:${process.env.PORT}`],
    },
  },
  apis: [
    path.resolve(__dirname, "../routes/auth/index.js"),
    path.resolve(__dirname, "../routes/availability/index.js"),
  ],
};

export default swaggerOptions;
