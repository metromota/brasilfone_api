import { IsString } from "class-validator";

export default class LoginAccountDto {
  
  @IsString()
  public username: string;
   
  @IsString()
  public password: string;
  
}
