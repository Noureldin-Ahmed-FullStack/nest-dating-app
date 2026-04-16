import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersService {

  async registerUser(body: CreateUserDto) {
// return "This action adds a new user";
    const encryptedPassword = this.encryptPassword(body.password);
    return encryptedPassword;
    // return await this.prisma.user.create({
    //   data: {
    //     ...body,
    //     password: await encryptedPassword,
    // },
    // select: {
    //   id: true,
    //   name: true,
    //   description: true,
    //   email: true,
    //   password: true,
    // }
    // });
    
  }
  async encryptPassword(painPassword: string) {
    return await bcrypt.hash(painPassword, 10);
  }
  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
