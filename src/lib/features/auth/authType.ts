import { IResponse } from "../../responseType";

export interface IAuthDto {
  email: string;
  password: string;
}

export interface IAuthDataResponse {
  token: string;
  role: string;
  uuid: string;
  is_new_user: boolean;
}

export interface IAuthResponse extends IResponse {
  data: IAuthDataResponse;
}
