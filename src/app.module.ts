import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { PetsModule } from './pets/pets.module';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { AppService } from './app.service';
import { CacheModule } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    UsersModule,
    PostsModule,
    PrismaModule,
    AuthModule,
    PetsModule,
    CacheModule.register({
      isGlobal: true, // ✅ THIS is the key
      store: redisStore as any,
      host: process.env.REDIS_HOST,
      // port: process.env.REDIS_PORT || 6379,
      // password: process.env.REDIS_PASSWORD,
      ttl: 60*1000, // seconds
    }),
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
