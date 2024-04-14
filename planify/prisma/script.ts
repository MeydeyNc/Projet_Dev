const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  try {
    const newUser = await prisma.user.create({
      data: {
        username: 'alice',
        email: 'alice@gmail.com',
        password: 'password',
        isAdmin: false
      },
    });
  
    console.log(newUser);
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
