import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
  async create(params: UserDto): Promise<void> {
    console.log("params", params);
  }
}
