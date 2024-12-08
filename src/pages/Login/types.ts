export interface IUserLogin {
  id:number;
  username: string;
  password: string;
  token: string;
}

export interface ICachLogin {  
  username: string;
  password: string;
  token: string;
}

export interface IRegister {
  username: string,
  password: string,
  balance: number
}

export interface IRegisterError {
  message?: string;
}