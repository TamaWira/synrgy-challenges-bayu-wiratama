import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return await knex.schema.createTable("cars", (builder) => {
    builder.string("id").primary().notNullable();
    builder.string("plate").notNullable();
    builder.string("manufacture").notNullable();
    builder.string("model").notNullable();
    builder.string("image").notNullable();
    builder.integer("rentPerDay").notNullable();
    builder.integer("capacity").notNullable();
    builder.string("description").notNullable();
    builder.string("transmission").notNullable();
    builder.string("type").notNullable();
    builder.string("year").notNullable();
    builder.boolean("available").notNullable();
    builder.specificType("options", "text[]").notNullable();
    builder.specificType("specs", "text[]").notNullable();
    builder.string("availableAt").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTable("cars");
}
