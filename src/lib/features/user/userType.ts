import { IResponse } from "../../responseType";

export interface ISignupDto {
  name: string;
  email: string;
  password: string;
}

export interface ISignupResponse extends IResponse {
  message: string;
}
