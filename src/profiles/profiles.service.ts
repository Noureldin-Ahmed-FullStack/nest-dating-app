import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './DTO/CreateProfileDto';

@Injectable()
export class ProfilesService {
  getAllUsers() {
    return [];
  }
  getSpecificProfile(id: number, location: string) {
    return [{ location, id }];
  }
  createProfile(body: CreateProfileDto) {
    return {
      name: body.name,
      describtion: body.description,
    };
  }
  deleteProfile(id: number) {
    return { id, message: 'was deleted' };
  }
}
