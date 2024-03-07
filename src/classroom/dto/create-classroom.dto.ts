import { IsString } from "class-validator";

export class CreateClassroomDto {
  @IsString({
    message: "Teen khoog duowjc der tonwg",
  })
  name: string;

  code: string;
}
