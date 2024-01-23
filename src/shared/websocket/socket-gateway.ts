import { OnModuleInit } from "@nestjs/common";
import { WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from 'socket.io'
import { CreateOrderWebsocketOptions } from "src/order/domain/order/order.factory";
import { Order as PrismaOrder, Table as PrismaTable } from "prisma/generated/StarFood";
import { User as PrismaUser } from "prisma/generated/IdentityServer";
import { PrismaProductOrder } from "../types/prismaTypes";

@WebSocketGateway({ cors: true })
export class SocketGateway implements OnModuleInit {

    @WebSocketServer()
    server: Server

    onModuleInit() {
        this.server.on('connection', () => { })
    }

    sendOrderUpdate(order: PrismaOrder, user: PrismaUser, table: PrismaTable, products: PrismaProductOrder) {

        const orderWebsocket: CreateOrderWebsocketOptions = {
            id: order.Id,
            createAt: order.CreatedAt,
            status: order.Status,
            user: {
                id: user.Id,
                name: user.Name,
                imgPath: user.ImgPath
            },
            table: {
                id: table.Id,
                number: table.Number
            },
            productsOrder: products.OrderProducts.map((product) => ({
                id: product.Variation.ProductId,
                name: product.Variation.Products.Name,
                imgPath: product.Variation.Products.ImgUrl,
                quantity: product.Quantity,
                value: product.Variation.Value
            }))
        }

        this.server.emit('orderUpdate', orderWebsocket);
    }
}