import { OnModuleInit } from "@nestjs/common";
import { WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from 'socket.io'
import { OrderDto } from "src/modules/orders/dto/order.dto";

@WebSocketGateway({ cors: true })
export class SocketGateway implements OnModuleInit {

    @WebSocketServer()
    server: Server

    onModuleInit() {
        this.server.on('connection', () => { })
    }

    sendOrderUpdate(order: OrderDto) {
        this.server.emit('orderUpdate', order);
    }
}