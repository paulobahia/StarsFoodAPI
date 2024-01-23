import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { ApiBadRequestResponse, ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiResponse, ApiTags, ApiUnauthorizedResponse } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/shared/authentication/jwt.guard";
import { RestaurantId } from "src/utils/decorators";
import { FindTablesQuery } from "../application/query/tables/find-tables.query";
import { FindTablesResponseDto } from "./dto/tables/find-tables-response.dto";
import { ResponseDescription } from "src/utils/response-description";
import { CreateTableRequestDto } from "./dto/tables/create-table-request.dto";
import { FindTableByIdRequestParam } from "./dto/tables/find-table-by-id-request-param.dto";
import { FindTableByIdResponseDTO } from "./dto/tables/find-table-by-id-response.dto";
import { FindTableByIdQuery } from "../application/query/tables/find-table-by-query";
import { UpdateStatusTableRequestParam } from "./dto/tables/update-status-table-request-param.dto";
import { UpdateStatusTableRequestDto } from "./dto/tables/update-status-table-request.dto";
import { DeleteTableRequestParam } from "./dto/tables/delete-table-request-param.dto";
import { UpdateStatusTableCommand } from "../application/command/table/update-status-table.command";
import { DeleteTableCommand } from "../application/command/table/delete-table.command";
import { CreateTableCommand } from "../application/command/table/create-table.command";

@ApiTags('Tables')
@Controller('api/tables')
@UseGuards(JwtAuthGuard)
export class TablesController {
    constructor(readonly commandBus: CommandBus, readonly queryBus: QueryBus) { }

    @Get()
    @ApiResponse({ status: HttpStatus.OK, description: ResponseDescription.OK, type: FindTablesResponseDto })
    @ApiBadRequestResponse({ description: ResponseDescription.BAD_REQUEST })
    @ApiUnauthorizedResponse({ description: ResponseDescription.UNAUTHORIZED })
    @ApiInternalServerErrorResponse({ description: ResponseDescription.INTERNAL_SERVER_ERROR })
    async findTables(@RestaurantId() restaurantId: number): Promise<FindTablesResponseDto> {
        const query = new FindTablesQuery(restaurantId)
        return await this.queryBus.execute(query)
    }

    @Post()
    @ApiResponse({ status: HttpStatus.CREATED, description: ResponseDescription.OK })
    @ApiBadRequestResponse({ description: ResponseDescription.BAD_REQUEST })
    @ApiUnauthorizedResponse({ description: ResponseDescription.UNAUTHORIZED })
    @ApiInternalServerErrorResponse({ description: ResponseDescription.INTERNAL_SERVER_ERROR })
    async createTable(@Body() body: CreateTableRequestDto, @RestaurantId() restaurantId: number): Promise<void> {
        const { number } = body
        const command = new CreateTableCommand(number, restaurantId)
        await this.commandBus.execute(command)
    }

    @Get(':id')
    @ApiResponse({ status: HttpStatus.OK, description: ResponseDescription.OK, type: FindTableByIdResponseDTO })
    @ApiBadRequestResponse({ description: ResponseDescription.BAD_REQUEST })
    @ApiUnauthorizedResponse({ description: ResponseDescription.UNAUTHORIZED })
    @ApiNotFoundResponse({ description: ResponseDescription.NOT_FOUND })
    @ApiInternalServerErrorResponse({ description: ResponseDescription.INTERNAL_SERVER_ERROR })
    async findTableById(@Param() param: FindTableByIdRequestParam, @RestaurantId() restaurantId: number): Promise<FindTableByIdResponseDTO> {
        const id = parseInt(param.id, 10)
        const query = new FindTableByIdQuery(id, restaurantId)
        return await this.queryBus.execute(query)
    }

    @Patch(':id')
    @ApiResponse({ status: HttpStatus.OK, description: ResponseDescription.OK })
    @ApiBadRequestResponse({ description: ResponseDescription.BAD_REQUEST })
    @ApiNotFoundResponse({ description: ResponseDescription.NOT_FOUND })
    @ApiInternalServerErrorResponse({ description: ResponseDescription.INTERNAL_SERVER_ERROR })
    @ApiUnauthorizedResponse({ description: ResponseDescription.UNAUTHORIZED })
    async updateStatusTable(@Param() param: UpdateStatusTableRequestParam, @Body() body: UpdateStatusTableRequestDto, @RestaurantId() restaurantId: number): Promise<void> {
        const id = parseInt(param.id, 10)
        const { status } = body
        const command = new UpdateStatusTableCommand(id, status, restaurantId)
        return await this.commandBus.execute(command)
    }

    @Delete(':id')
    @ApiResponse({ status: HttpStatus.OK, description: ResponseDescription.OK })
    @ApiBadRequestResponse({ description: ResponseDescription.BAD_REQUEST })
    @ApiNotFoundResponse({ description: ResponseDescription.NOT_FOUND })
    @ApiInternalServerErrorResponse({ description: ResponseDescription.INTERNAL_SERVER_ERROR })
    @ApiUnauthorizedResponse({ description: ResponseDescription.UNAUTHORIZED })
    async deleteTable(@Param() param: DeleteTableRequestParam, @RestaurantId() restaurantId: number): Promise<void> {
        const id = parseInt(param.id, 10)
        const command = new DeleteTableCommand(id, restaurantId)
        return await this.commandBus.execute(command)
    }
}