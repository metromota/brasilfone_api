import { IsString } from "class-validator";

export default class CreateAccountDto {
  @IsString()
  public name: string;

  @IsString()
  public email: string;

  @IsString()
  public password: string;

  @IsString()
  public ddi: string;

  @IsString()
  public tel: string;

  @IsString()
  public newsletter: string;

  @IsString()
  public privacy: string;
}
