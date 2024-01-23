import { Prisma } from "prisma/generated/StarFood"

export type PrismaProductOrder = Prisma.OrderGetPayload<{
    include: {
        OrderProducts: {
            include: {
                Variation: {
                    include: { Products: true }
                }
            }
        }
    }
}>