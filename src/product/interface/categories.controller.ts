import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Put, UseGuards } from "@nestjs/common";
import { ApiBadRequestResponse, ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiResponse, ApiTags, ApiUnauthorizedResponse } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/shared/authentication/jwt.guard";
import { ResponseDescription } from "./response-description";
import { FindCategoriesResponseDto } from "./dto/category/find-categories-response.dto";
import { RestaurantId } from "src/utils/decorators";
import { FindCategoriesQuery } from "../application/query/category/find-categories.query";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { CreateCategoryRequestDto } from "./dto/category/create-category-request.dto";
import { CreateCategoryCommand } from "../application/command/category/create-category.command";
import { FindCategoryByIdResponseDTO } from "./dto/category/find-category-by-id-response.dto";
import { FindCategoryByIdRequestParam } from "./dto/category/find-category-by-id-request-param.dto";
import { FindCategoryByIdQuery } from "../application/query/category/find-category-by-id.query";
import { UpdateCategoryRequestParam } from "./dto/category/update-category-request-param.dto";
import { UpdateCategoryRequestDto } from "./dto/category/update-category-request.dto";
import { UpdateCategoryCommand } from "../application/command/category/update-category.command";
import { UpdateStatusCategoryRequestParam } from "./dto/category/update-status-category-request-param.dto";
import { UpdateStatusCategoryRequestDto } from "./dto/category/update-status-category-request.dto";
import { UpdateStatusCategoryCommand } from "../application/command/category/update-status-category.command";
import { DeleteCategoryRequestParam } from "./dto/category/delete-category-request-param.dto";
import { DeleteCategoryCommand } from "../application/command/category/delete-category.command";

@ApiTags('Categories')
@Controller('api/categories')
@UseGuards(JwtAuthGuard)
export class CategoriesController {
    constructor(readonly commandBus: CommandBus, readonly queryBus: QueryBus) { }

    @Get()
    @ApiResponse({ status: HttpStatus.OK, description: ResponseDescription.OK, type: FindCategoriesResponseDto })
    @ApiBadRequestResponse({ description: ResponseDescription.BAD_REQUEST })
    @ApiUnauthorizedResponse({ description: ResponseDescription.UNAUTHORIZED })
    @ApiInternalServerErrorResponse({ description: ResponseDescription.INTERNAL_SERVER_ERROR })
    async findCategories(@RestaurantId() restaurantId: number): Promise<FindCategoriesResponseDto> {
        const query = new FindCategoriesQuery(restaurantId)
        return await this.queryBus.execute(query)
    }

    @Post()
    @ApiResponse({ status: HttpStatus.CREATED, description: ResponseDescription.OK })
    @ApiBadRequestResponse({ description: ResponseDescription.BAD_REQUEST })
    @ApiNotFoundResponse({ description: ResponseDescription.NOT_FOUND })
    @ApiInternalServerErrorResponse({ description: ResponseDescription.INTERNAL_SERVER_ERROR })
    @ApiUnauthorizedResponse({ description: ResponseDescription.UNAUTHORIZED })
    async createCategory(@Body() body: CreateCategoryRequestDto, @RestaurantId() restaurantId: number): Promise<void> {
        const { name } = body
        const command = new CreateCategoryCommand(name, restaurantId)
        await this.commandBus.execute(command)
    }

    @Put(':id')
    @ApiResponse({ status: HttpStatus.OK, description: ResponseDescription.OK })
    @ApiBadRequestResponse({ description: ResponseDescription.BAD_REQUEST })
    @ApiNotFoundResponse({ description: ResponseDescription.NOT_FOUND })
    @ApiInternalServerErrorResponse({ description: ResponseDescription.INTERNAL_SERVER_ERROR })
    @ApiUnauthorizedResponse({ description: ResponseDescription.UNAUTHORIZED })
    async updateCategory(@Param() param: UpdateCategoryRequestParam, @Body() body: UpdateCategoryRequestDto, @RestaurantId() restaurantId: number): Promise<void> {
        const id = parseInt(param.id, 10)
        const { name } = body
        const command = new UpdateCategoryCommand(id, name, restaurantId)
        return await this.commandBus.execute(command)
    }

    @Get(':id')
    @ApiResponse({ status: HttpStatus.OK, description: ResponseDescription.OK, type: FindCategoryByIdResponseDTO })
    @ApiBadRequestResponse({ description: ResponseDescription.BAD_REQUEST })
    @ApiUnauthorizedResponse({ description: ResponseDescription.UNAUTHORIZED })
    @ApiNotFoundResponse({ description: ResponseDescription.NOT_FOUND })
    @ApiInternalServerErrorResponse({ description: ResponseDescription.INTERNAL_SERVER_ERROR })
    async findCategoryById(@Param() param: FindCategoryByIdRequestParam, @RestaurantId() restaurantId: number): Promise<FindCategoryByIdResponseDTO> {
        const id = parseInt(param.id, 10)
        const query = new FindCategoryByIdQuery(id, restaurantId)
        return await this.queryBus.execute(query)
    }

    @Patch(':id')
    @ApiResponse({ status: HttpStatus.OK, description: ResponseDescription.OK })
    @ApiBadRequestResponse({ description: ResponseDescription.BAD_REQUEST })
    @ApiNotFoundResponse({ description: ResponseDescription.NOT_FOUND })
    @ApiInternalServerErrorResponse({ description: ResponseDescription.INTERNAL_SERVER_ERROR })
    @ApiUnauthorizedResponse({ description: ResponseDescription.UNAUTHORIZED })
    async updateStatusCategory(@Param() param: UpdateStatusCategoryRequestParam, @Body() body: UpdateStatusCategoryRequestDto, @RestaurantId() restaurantId: number): Promise<void> {
        const id = parseInt(param.id, 10)
        const { status } = body
        const command = new UpdateStatusCategoryCommand(id, status, restaurantId)
        return await this.commandBus.execute(command)
    }

    @Delete(':id')
    @ApiResponse({ status: HttpStatus.OK, description: ResponseDescription.OK })
    @ApiBadRequestResponse({ description: ResponseDescription.BAD_REQUEST })
    @ApiNotFoundResponse({ description: ResponseDescription.NOT_FOUND })
    @ApiInternalServerErrorResponse({ description: ResponseDescription.INTERNAL_SERVER_ERROR })
    @ApiUnauthorizedResponse({ description: ResponseDescription.UNAUTHORIZED })
    async deleteCategory(@Param() param: DeleteCategoryRequestParam, @RestaurantId() restaurantId: number): Promise<void> {
        const id = parseInt(param.id, 10)
        const command = new DeleteCategoryCommand(id, restaurantId)
        return await this.commandBus.execute(command)
    }
}