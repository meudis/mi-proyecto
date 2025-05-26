const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  GraphQLID,
} = require("graphql");
const db = require("./db");

// Definir un tipo de dato llamado User
const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
  },
});

// Consulta raíz
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    users: {
      type: new GraphQLList(UserType),
      async resolve() {
        const result = await db.query("SELECT * FROM users");
        return result.rows;
      },
    },
  },
});

// Exportar el esquema GraphQL
module.exports = new GraphQLSchema({
  query: RootQuery,
});
