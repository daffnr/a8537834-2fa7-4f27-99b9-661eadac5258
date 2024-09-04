// src/utils/swagger.ts
import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Employee API',
      version: '1.0.0',
    },
  },
  apis: ['./src/app/api/**/*.ts'],
};

export const swaggerSpec = swaggerJsdoc(options);
