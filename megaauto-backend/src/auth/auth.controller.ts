import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto'
@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @Post('login/user')
    @ApiOperation({ summary: 'Login User' })
    @ApiResponse({ status: 200, description: 'The user loged in successfully.' })
    @ApiResponse({ status: 401, description: 'Unauthorized' })
    async userLogin(@Body() loginDto: LoginDto) {
      const user = await this.authService.validateUser(loginDto.username, loginDto.password);
    //   if (!user || user.role_type !== 1) throw new UnauthorizedException();
      if (!user) throw new UnauthorizedException();
      return this.authService.login(user);
    }
  
    @Post('login/admin')
    @ApiOperation({ summary: 'Login Admin' })
    @ApiResponse({ status: 200, description: 'The admin loged in successfully.' })
    @ApiResponse({ status: 401, description: 'Unauthorized' })
    async adminLogin(@Body() loginDto: LoginDto) {
      const admin = await this.authService.validateAdmin(loginDto.username, loginDto.password);
    //   if (!admin || admin.role !== 'admin') throw new UnauthorizedException();
    if (!admin) throw new UnauthorizedException();
      return this.authService.login(admin);
    }

}
