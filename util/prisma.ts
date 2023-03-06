import { PrismaClient } from '@prisma/client'

let prisma: PrismaClient;

// @ts-ignore
global["prisma"] = global["prisma"] || new PrismaClient();
// @ts-ignore
prisma = global["prisma"];

export default prisma;