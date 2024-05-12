// lib/profile.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getUserProfile() {
    return await prisma.user.findUnique({
        where: {
            id: 1, 
        },
        select: {
            id: true,
            name: true, 
            email: true,
            
        },
    });
  }

