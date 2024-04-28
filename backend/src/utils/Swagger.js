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
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: [
    path.resolve(__dirname, "../routes/auth/*.js"),
    path.resolve(__dirname, "../routes/availability/*.js"),
    path.resolve(__dirname, "../models/schema/*.js"),
  ],
};

export default swaggerOptions;
