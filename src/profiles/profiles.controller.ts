import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { CreateProfileDto } from './DTO/CreateProfileDto';

@Controller('profiles')
export class ProfilesController {
  constructor(private profilesService: ProfilesService) {}

  @Get()
  getAllUsers() {
    return this.profilesService.getAllUsers();
  }

  @Get(':id')
  getSpecificProfile(
    @Param('id') id: number,
    @Query('location') location: string,
  ) {
    return this.profilesService.getSpecificProfile(id, location);
  }

  @Post()
  createProfile(@Body() body: CreateProfileDto) {
    return this.profilesService.createProfile(body);
  }
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteProfile(@Param('id') id: number) {
    return this.profilesService.deleteProfile(id);
  }
}
