import { IsNotEmpty, IsString } from "class-validator";

export class UpdateClassroomDto {
  @IsString()
  @IsNotEmpty({
    message: "Tên không được để trốn",
  })
  name: string;
}
