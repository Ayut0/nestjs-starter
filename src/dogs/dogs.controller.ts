import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { DogsService } from './dogs.service';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';
// import type { Request } from 'express';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  // @Post()
  // create(@Body() createDogDto: CreateDogDto) {
  //   return this.dogsService.create(createDogDto);
  // }

  // @Post()
  // create() {
  //   return 'This action adds a new dog';
  // }

  @Post()
  async create(@Body() createDogDto: CreateDogDto) {
    this.dogsService.create(createDogDto);
  }

  // @Get()
  // @Redirect('https://nestjs.com', 301)
  // findAll() {
  //   return this.dogsService.findAll();
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dogsService.findOne(+id);
  }

  @Get()
  async findAll(): Promise<CreateDogDto[]> {
    return this.dogsService.findAll();
  }

  // Route parameters
  // @Get(':id')
  // findOne(@Param('id') id: string): string {
  //   return `This action returns a #${id} dog`;
  // }

  // Route wildcards
  // @Get('ab*cd')
  // findAll() {
  //   return 'This route uses a wildcard';
  // }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDogDto: UpdateDogDto) {
    return this.dogsService.update(+id, updateDogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dogsService.remove(+id);
  }
}
