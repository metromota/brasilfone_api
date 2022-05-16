export default class CreateAccountDto {
  constructor(
    public name: string,
    public email: string,
    public password: string,
    public ddi: string,
    public tel: string,
    public newsletter: string,
    public privacy: string,
  ) {}
}
