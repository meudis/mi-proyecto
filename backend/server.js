const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Habilitar CORS para permitir que el frontend se conecte
app.use(cors());

// Ruta de la API GraphQL
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true, // interfaz gráfica para probar consultas
  })
);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}/graphql`);
});
