const { User } = require("../models");
const seedData = require("./seeds.json");

async function seedDatabase() {
  try {
    await User.bulkCreate(seedData);
    console.log("Database seeded successfully");
  } catch (err) {
    console.error("Error seeding database:", err);
  }
}

// Call the seedDatabase function to start the seeding process
seedDatabase();
