import { IResponse } from "../../responseType";

export interface IAuth {
  user_pass: string;
  id: string;
  iss: string;
  role: string;
  isdelete: boolean;
}

export interface IAuthDto {
  email: string;
  password: string;
}

export interface IAuthBody {
  user_email: string;
  user_pass: string;
  uuid: string;
}

export interface IAuthResponse {
  token: string;
  uuid: string;
  role: string;
}

export interface IUserAuthfulfilled {
  data: IAuthResponse;
}

export interface IUserAuthResponse extends IResponse {
  data: IAuthResponse;
}
