import { Module, Provider } from "@nestjs/common"
import { CqrsModule } from "@nestjs/cqrs"
import { IdentityServerPrismaService } from "src/shared/database/identity-server.prisma.service"

const infrastructure: Provider[] = [
    IdentityServerPrismaService,
]

const application = []

const domain = []

@Module({
    imports: [CqrsModule],
    controllers: [],
    providers: [...infrastructure],
})
export class OrdersModule { }