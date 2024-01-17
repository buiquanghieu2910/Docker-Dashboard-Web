const path = require("path");
const knex = require("knex");

const dbPath = path.resolve(__dirname, "../data.db");

const knexInstance = knex({
  client: "sqlite3",
  connection: {
    filename: dbPath,
  },
  useNullAsDefault: true,
});

async function initializeDatabase() {
  await knexInstance.schema.createTableIfNotExists("groups", (table) => {
    table.increments("id").primary();
    table.string("name");
    table.text("containers_id");
    table.timestamps();
  });
}

exports.knex = knexInstance;
exports.initializeDatabase = initializeDatabase;

// Group functions

exports.newGroup = ({ name, containers }) => {
  return this.knex("groups").insert({
    name,
    containers_id: JSON.stringify(containers),
    created_at: this.knex.fn.now(),
    updated_at: this.knex.fn.now(),
  });
};

exports.deleteGroup = (id) => {
  return this.knex("groups").where("id", id).del();
};

exports.getGroups = () => {
  return this.knex("groups").select().orderBy("id", "desc");
};

exports.getGroupById = (id) => this.knex("groups").select().where("id", id);

initializeDatabase();
