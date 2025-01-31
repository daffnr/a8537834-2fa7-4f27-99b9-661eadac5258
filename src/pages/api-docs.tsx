import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import swaggerDocument from '@/swagger.json';

export default function ApiDocs() {
  return <SwaggerUI spec={swaggerDocument} />;
}

