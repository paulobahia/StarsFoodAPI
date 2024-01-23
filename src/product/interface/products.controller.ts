import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Put, UseGuards } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { ApiBadRequestResponse, ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiResponse, ApiTags, ApiUnauthorizedResponse } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/shared/authentication/jwt.guard";
import { RestaurantId } from "src/utils/decorators";
import { ResponseDescription } from "src/utils/response-description";
import { FindProductsResponseDto } from "./dto/product/find-products-response.dto";
import { FindProductsQuery } from "../application/query/product/find-products.query";
import { CreateProductRequestDto } from "./dto/product/create-product-request.dto";
import { CreateProductCommand } from "../application/command/product/create-product.command";
import { UpdateProductRequestParam } from "./dto/product/update-product-request-param.dto";
import { UpdateProductRequestDto } from "./dto/product/update-product-request.dto";
import { UpdateProductCommand } from "../application/command/product/update-product.command";
import { FindProductByIdResponseDTO } from "./dto/product/find-product-by-id-response.dto";
import { FindProductByIdRequestParam } from "./dto/product/find-product-by-id-request-param.dto";
import { FindProductByIdQuery } from "../application/query/product/find-product-by-id.query";
import { UpdateStatusProductRequestParam } from "./dto/product/update-status-product-request-param.dto";
import { UpdateStatusProductRequestDto } from "./dto/product/update-status-product-request.dto";
import { UpdateStatusproductCommand } from "../application/command/product/update-status-product.command";
import { DeleteProductRequestParam } from "./dto/product/delete-product-request-param.dto";
import { DeleteProductCommand } from "../application/command/product/delete-product.command";

@ApiTags('Products')
@Controller('api/products')
@UseGuards(JwtAuthGuard)
export class ProductsController {
    constructor(readonly commandBus: CommandBus, readonly queryBus: QueryBus) { }

    @Get()
    @ApiResponse({ status: HttpStatus.OK, description: ResponseDescription.OK, type: FindProductsResponseDto })
    @ApiBadRequestResponse({ description: ResponseDescription.BAD_REQUEST })
    @ApiUnauthorizedResponse({ description: ResponseDescription.UNAUTHORIZED })
    @ApiInternalServerErrorResponse({ description: ResponseDescription.INTERNAL_SERVER_ERROR })
    async findProducts(@RestaurantId() restaurantId: number): Promise<FindProductsResponseDto> {
        const query = new FindProductsQuery(restaurantId)
        return await this.queryBus.execute(query)
    }

    @Post()
    @ApiResponse({ status: HttpStatus.CREATED, description: ResponseDescription.CREATED })
    @ApiBadRequestResponse({ description: ResponseDescription.BAD_REQUEST })
    @ApiUnauthorizedResponse({ description: ResponseDescription.UNAUTHORIZED })
    @ApiNotFoundResponse({ description: ResponseDescription.NOT_FOUND })
    @ApiInternalServerErrorResponse({ description: ResponseDescription.INTERNAL_SERVER_ERROR })
    async createProduct(@Body() body: CreateProductRequestDto, @RestaurantId() restaurantId: number): Promise<void> {
        const { name, description, imgUrl, categoryId, variations } = body
        const command = new CreateProductCommand(name, description, imgUrl, categoryId, variations, restaurantId)
        await this.commandBus.execute(command)
    }

    @Put(':id')
    @ApiResponse({ status: HttpStatus.OK, description: ResponseDescription.OK })
    @ApiBadRequestResponse({ description: ResponseDescription.BAD_REQUEST })
    @ApiUnauthorizedResponse({ description: ResponseDescription.UNAUTHORIZED })
    @ApiNotFoundResponse({ description: ResponseDescription.NOT_FOUND })
    @ApiInternalServerErrorResponse({ description: ResponseDescription.INTERNAL_SERVER_ERROR })
    async updateProduct(@Param() param: UpdateProductRequestParam, @Body() body: UpdateProductRequestDto, @RestaurantId() restaurantId: number): Promise<void> {
        const id = parseInt(param.id, 10)
        const { name, description, imgUrl, categoryId, variations } = body
        const command = new UpdateProductCommand(id, name, description, imgUrl, categoryId, variations, restaurantId)
        return await this.commandBus.execute(command)
    }

    @Get(':id')
    @ApiResponse({ status: HttpStatus.OK, description: ResponseDescription.OK, type: FindProductByIdResponseDTO })
    @ApiBadRequestResponse({ description: ResponseDescription.BAD_REQUEST })
    @ApiUnauthorizedResponse({ description: ResponseDescription.UNAUTHORIZED })
    @ApiNotFoundResponse({ description: ResponseDescription.NOT_FOUND })
    @ApiInternalServerErrorResponse({ description: ResponseDescription.INTERNAL_SERVER_ERROR })
    async findProductById(@Param() param: FindProductByIdRequestParam, @RestaurantId() restaurantId: number): Promise<FindProductByIdResponseDTO> {
        const id = parseInt(param.id, 10)
        const query = new FindProductByIdQuery(id, restaurantId)
        return await this.queryBus.execute(query)
    }

    @Patch(':id')
    @ApiResponse({ status: HttpStatus.OK, description: ResponseDescription.OK })
    @ApiBadRequestResponse({ description: ResponseDescription.BAD_REQUEST })
    @ApiUnauthorizedResponse({ description: ResponseDescription.UNAUTHORIZED })
    @ApiNotFoundResponse({ description: ResponseDescription.NOT_FOUND })
    @ApiInternalServerErrorResponse({ description: ResponseDescription.INTERNAL_SERVER_ERROR })
    async updateStatusProduct(@Param() param: UpdateStatusProductRequestParam, @Body() body: UpdateStatusProductRequestDto, @RestaurantId() restaurantId: number): Promise<void> {
        const id = parseInt(param.id, 10)
        const { status } = body
        const command = new UpdateStatusproductCommand(id, status, restaurantId)
        return await this.commandBus.execute(command)
    }

    @Delete(':id')
    @ApiResponse({ status: HttpStatus.OK, description: ResponseDescription.OK })
    @ApiBadRequestResponse({ description: ResponseDescription.BAD_REQUEST })
    @ApiNotFoundResponse({ description: ResponseDescription.NOT_FOUND })
    @ApiInternalServerErrorResponse({ description: ResponseDescription.INTERNAL_SERVER_ERROR })
    @ApiUnauthorizedResponse({ description: ResponseDescription.UNAUTHORIZED })
    async deleteProduct(@Param() param: DeleteProductRequestParam, @RestaurantId() restaurantId: number): Promise<void> {
        const id = parseInt(param.id, 10)
        const command = new DeleteProductCommand(id, restaurantId)
        return await this.commandBus.execute(command)
    }

}