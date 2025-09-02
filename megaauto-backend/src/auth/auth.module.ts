import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from 'src/admin/users/users.module';

@Module({
  imports:[
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    UsersModule,
    JwtModule.register({
    secret: process.env.JWT_SECRET || 'yourSecretKey', // Replace with a secure key
    signOptions: { expiresIn: '1h' }, // Set token expiration as desired
  }),],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
