import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  Req,
  Res,
  Header,
  ParseIntPipe,
} from "@nestjs/common";
import { ClassroomService } from "./classroom.service";
import { CreateClassroomDto } from "./dto/create-classroom.dto";
import { UpdateClassroomDto } from "./dto/update-classroom.dto";
import { Request, Response } from "express";

@Controller("classroom")
export class ClassroomController {
  constructor(private readonly classroomService: ClassroomService) {}

  @Post()
  create(@Body() createClassroomDto: CreateClassroomDto) {
    return this.classroomService.create(createClassroomDto);
  }

  @Get()
  findAll() {
    return this.classroomService.findAll();
  }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) {
    return this.classroomService.findOne(+id);
  }

  @Patch(":id")
  @HttpCode(200)
  @Header("access_token", "123")
  update(
    @Param("id") id: number,
    @Res() res: Response,
    @Req() req: Request,
    @Body() updateClassroomDto: UpdateClassroomDto,
  ): any {
    console.log(req.body);
    const data2 = this.classroomService.update(id, updateClassroomDto);
    res.json(data2);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.classroomService.remove(+id);
  }
}
