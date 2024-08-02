const { db } = require('@vercel/postgres');

const bcrypt = require('bcrypt');
const {users} = require('../app/lib/placeholder-data.js')
async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        admin BOOLEAN DEFAULT FALSE
      );
    `;

    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );
    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedProducts(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "invoices" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS products (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    product_id UUID NOT NULL,
    description TEXT,
    amount INT NOT NULL,
    status VARCHAR(255) NOT NULL,
    image_url VARCHAR(255) NOT NULL
  );
`;

    console.log(`Created "invoices" table`);
    return {
      createTable
    };
  } catch (error) {
    console.error('Error seeding invoices:', error);
    throw error;
  }
}

async function seedTransaction(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "customers" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS transaction (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        product_id UUID references products (id) on delete cascade,
        user_id UUID references users (id) on delete cascade,
        type VARCHAR(255) NOT NULL,
        price INT NOT NULL,
        status VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "sales" table`);



    return {
      createTable
    };
  } catch (error) {
    console.error('Error seeding customers:', error);
    throw error;
  }
}



async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedProducts(client);
  await seedTransaction(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
