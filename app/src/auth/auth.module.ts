import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports : [
    // TypeOrmModule.forRoot(),
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
