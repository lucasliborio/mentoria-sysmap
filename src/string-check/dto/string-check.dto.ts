import { Matches } from "class-validator";

export class StringCheckDto {
  @Matches("^[a-zA-Z0-9]+$", 'g', {
    message: 'data must be a string with only letters and numbers'
  })
  data: string
}
