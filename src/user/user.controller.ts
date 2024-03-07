import {
  Body,
  Controller,
  Get,
  Header,
  Param,
  Post,
  Req,
} from "@nestjs/common";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getList(): string[] {
    return ["1", "2"];
  }

  @Get("list")
  // @HttpCode(204)
  @Header("Cache-Control", "taibv")
  filter(@Req() req: Request): string[] {
    console.log("req", req.headers, req.body);
    return ["1", "2"];
  }

  @Get(":id/detail")
  async geDetail(@Param() params: any): Promise<void> {
    console.log(params);
  }

  @Post("create")
  createUser(@Body() params: any): void {
    console.log(params);
  }

  @Post("dto/create")
  async createDTO(@Body() params: UserDto): Promise<any> {
    return await this.userService.create(params);
  }
}
