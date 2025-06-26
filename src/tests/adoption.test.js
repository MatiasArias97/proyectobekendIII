import request from "supertest";
import mongoose from "mongoose";
import app from "../app.js";
import { AdoptionModel } from "../dao/models/adoption.model.js";
import PetModel from "../dao/models/pet.model.js";
import { UserModel } from "../dao/models/user.model.js";

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URL);
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Test funcionales del router /api/adoptions", () => {
  let testUser;
  let testPet;

  beforeAll(async () => {
    const randomSuffix = Math.floor(Math.random() * 100000);

    testUser = await UserModel.create({
      first_name: "Test",
      last_name: "User",
      username: `testuser${randomSuffix}`,
      email: `testuser${randomSuffix}@example.com`,
      password: "test1234",
      role: "user",
      pets: []
    });

    testPet = await PetModel.create({
      name: "Firulais",
      species: "Perro",
      age: 3
    });
  });

  afterAll(async () => {
    await AdoptionModel.deleteMany({});
    if (testUser && testUser._id) await UserModel.deleteOne({ _id: testUser._id });
    if (testPet && testPet._id) await PetModel.deleteOne({ _id: testPet._id });
  });

  test("POST /api/adoptions - debería crear una adopción", async () => {
    const response = await request(app)
      .post("/api/adoptions")
      .send({ user: testUser._id, pet: testPet._id });

    expect(response.statusCode).toBe(201);
    expect(response.body.status).toBe("success");
    expect(response.body.payload).toHaveProperty("_id");
  });

  test("GET /api/adoptions - debería traer todas las adopciones", async () => {
    const response = await request(app).get("/api/adoptions");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("success");
    expect(Array.isArray(response.body.payload)).toBe(true);
  });
});
