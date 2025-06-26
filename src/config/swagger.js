import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "Documentación API Usuarios",
      description: "Documentación para el módulo de usuarios",
    },
  },
  apis: ["./src/docs/**/*.yaml"],
};

export const swaggerSpecs = swaggerJSDoc(swaggerOptions);