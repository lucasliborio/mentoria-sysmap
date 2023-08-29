import { Matches } from "class-validator";

export class ArrayValidationDto {
  @Matches("^[a-zA-Z0-9]+$", 'g', {
    message: 'data must be an array with only letters and numbers'
  })
  data: string
}
