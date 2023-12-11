import { Knex } from "knex";
import { ICars } from "../models/Cars";

import dummyCars from "../dummyCars.json";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("cars").del();

  // Inserts seed entries
  // await knex('books').insert([
  await knex("cars").insert(dummyCars);
  //   await knex("books").insert([
  //     {
  //       title: "Frontend Development dengan ReactJS",
  //       author: "Wendi",
  //       copies_available: 10,
  //       genre: "Programming",
  //       isbn: "1234:1234",
  //       published_year: "2022",
  //       total_copies: 20,
  //       published: true,
  //       created_at: knex.fn.now(),
  //       updated_at: knex.fn.now(),
  //     },
  //     {
  //       title: "Backend Development dengan NodeJS dan Express",
  //       author: "Azis Doa Ibu",
  //       copies_available: 15,
  //       genre: "Programming",
  //       isbn: "1234:1234",
  //       published_year: "2019",
  //       total_copies: 20,
  //       published: true,
  //       created_at: knex.fn.now(),
  //       updated_at: knex.fn.now(),
  //     },
  //     // ...dummyBooks,
  //   ]);
}
