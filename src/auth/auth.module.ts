import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import {TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './User.repository';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';


@Module({

  imports:[ PassportModule.register({defaultStrategy:'jwt'}),
  JwtModule.register({
    secret: 'topsecret51',
    signOptions :{expiresIn: '360s'}
  }), 
    TypeOrmModule.forFeature([UserRepository])
  ],
  
  providers: [AuthService,
    JwtStrategy,
  ],
  controllers: [AuthController],
  exports: [
    JwtStrategy,
    PassportModule,
  ],
  
})
export class AuthModule {}
