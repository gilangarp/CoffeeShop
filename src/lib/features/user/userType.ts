import { IResponse } from "../../responseType";

export interface ISignupDto {
  name: string;
  email: string;
  password: string;
  street: string;
  city: string;
  state?: string;
  postalCode: string;
  country: string;
}

export interface IRegisterDataResponse {
  token: string;
  uuid: string;
  role: string;
}

export interface ISignupResponse extends IResponse {
  data: IRegisterDataResponse;
}
