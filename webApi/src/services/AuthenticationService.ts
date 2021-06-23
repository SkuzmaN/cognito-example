import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserPool,
  CognitoUserSession,
  ICognitoUserPoolData,
  ISignUpResult,
} from "amazon-cognito-identity-js";
import { LoginFormData, RegisterFormData } from "../components/types";

const poolData: ICognitoUserPoolData = {
  UserPoolId: process.env.REACT_APP_USER_POOL_ID as unknown as string,
  ClientId: process.env.REACT_APP_USER_CLIENT_ID as unknown as string,
};

const userPool = new CognitoUserPool(poolData);

export class AuthenticationService {
  static register(data: RegisterFormData) {
    return new Promise<ISignUpResult>((resolve, reject) => {
      userPool.signUp(data.email, data.password, [], [], (error, result) => {
        if (error || result === undefined) {
          return reject(error);
        }
        return resolve(result);
      });
    });
  }
  static confirmRegistration({ username, verificationCode }: { username: string; verificationCode: string }) {
    const cognitoUser = new CognitoUser({
      Username: username,
      Pool: userPool,
    });
    return new Promise((resolve, reject) => {
      cognitoUser.confirmRegistration(verificationCode, true, (error, result) => {
        if (error) {
          return reject(error);
        }
        return resolve(result);
      });
    });
  }

  static login({ email, password }: LoginFormData) {
    const cognitoUser = new CognitoUser({
      Username: email,
      Pool: userPool,
    });
    return new Promise((resolve, reject) => {
      cognitoUser.authenticateUser(
        new AuthenticationDetails({
          Username: email,
          Password: password,
        }),
        {
          onSuccess: (session: CognitoUserSession) => resolve(session),
          onFailure: (error: any) => reject(error),
        }
      );
    });
  }

  static logout() {
    return userPool.getCurrentUser()?.signOut();
  }

  static isLogged() {
    return userPool.getCurrentUser() !== null;
  }

  static getJWTToken(){
    
    return new Promise<string>((resolve,reject) => {
      userPool.getCurrentUser()?.getSession((error:Error | null ,session:CognitoUserSession) => {
        if(error){
          return reject(error);
        } else {
          return resolve(session.getAccessToken().getJwtToken());
        }
      })
    })
    
  }
}
