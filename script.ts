import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// A `main` function so that you can use async/await
async function main() {
  // ... you will write your Prisma Client queries here
  console.log("---------------------------------------")
  console.log("let  allUsers = await prisma.user.findMany()")
  let  allUsers = await prisma.user.findMany()
  console.log(allUsers)
  console.log("---------------------------------------")
  console.log("await prisma.user.findMany({")
  console.log("include: { posts: true },")
  console.log("})")
  allUsers = await prisma.user.findMany({
    include: { posts: true },
  })
  // use `console.dir` to print nested objects
console.dir(allUsers, { depth: null })

console.log('---------------------------------------------------');
console.log('  const post = await prisma.post.create({          ');
console.log('    data: {                                        ');
console.log('      title: "Prisma makes databases easy",        ');
console.log('      author: {                                    ');
console.log('        connect: { email: "sarah@prisma.io" },     ');
console.log('      },                                           ');
console.log('    },                                             ');
console.log('  })                                               ');

const post = await prisma.post.create({
  data: {
    title: "Prisma makes databases easy",
    author: {
      connect: { email: "sarah@prisma.io" },
    },
  },
})
console.log(post)

console.log('  const allUsers = await prisma.user.findMany({    ');
console.log('    include: { posts: true },                      ');
console.log('  })                                               ');

allUsers = await prisma.user.findMany({
  include: { posts: true },
})
console.dir(allUsers, { depth: null })

console.log('---------------------------------------------------');
console.log('async function main() {                            ');
console.log('  const post = await prisma.post.update({          ');
console.log('    where: { id: 2 },                              ');
console.log('    data: { published: true },                     ');
console.log('  })                                               ');

async function main() {
  const post = await prisma.post.update({
    where: { id: 2 },
    data: { published: true },
  })
  console.log(post)
}


}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
