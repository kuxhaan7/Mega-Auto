import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/admin/users/users.service';
// import { UsersController } from 'src/admin/users/users.controller';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService,private readonly userService:UsersService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findByUsername(username); // Fetch user from User repository
    console.log(password,user.password,await bcrypt.compare(password, user.password));
    if (user && (await bcrypt.compare(password, user.password))) {
      return { id: user.id, username: user.username, role: user.user_type,firstname:user.first_name,lastname:user.last_name,company:user.company_name };
    }
    return null;
  }
    

  async validateAdmin(username: string, password: string): Promise<any> {
    const admin = await this.userService.findByUsername(username);  // Fetch admin from user repository
    if (admin && (await bcrypt.compare(password, admin.password))) {
      return { id: admin.id, username: admin.username, role: admin.user_type };
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, role: user.user_type, _id: user.id,firstname:user.firstname,lastname:user.lastname,company:user.company };
    return { access_token: this.jwtService.sign(payload) };
  }
  
}
