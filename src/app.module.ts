import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserController } from "./user/user.controller";
import { ClassroomModule } from "./classroom/classroom.module";
import { UserService } from "./user/user.service";
import { CustomerModule } from "./customer/customer.module";

@Module({
  imports: [ClassroomModule, CustomerModule],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
