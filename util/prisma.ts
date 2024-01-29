import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();


// @ts-ignore
// global["prisma"] = global["prisma"] || new PrismaClient(
//     // { log: ['query', 'info', 'warn', 'error'], }
// );
// // @ts-ignore
// prisma = global["prisma"];

export default prisma;