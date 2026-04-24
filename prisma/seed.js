const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // 1. Create Booths
  const booths = [
    { id: "party", name: "Party Booth", description: "Perfect for birthdays and small events", basePrice: 35000 },
    { id: "classic", name: "Classic Studio", description: "High-end studio experience", basePrice: 45000 },
    { id: "360", name: "360 Video Booth", description: "Immersive video experience", basePrice: 40000 },
    { id: "registration", name: "Registration Station", description: "Event check-in and data capture", basePrice: 45000 },
  ];

  for (const booth of booths) {
    await prisma.booth.upsert({
      where: { id: booth.id },
      update: {},
      create: booth,
    });
  }

  console.log("Seed finished!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
