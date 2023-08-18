import { Injectable } from "@angular/core";
import { AuthUser } from "../shared/models/user.model";
import { Observable, of } from "rxjs";

import * as appSettingsModule from "@nativescript/core/application-settings";

const AUTHENTICATED_KEY = "AUTHENTICATED_KEY";

@Injectable()
export class AuthService {
  private users: AuthUser[] = [
    { email: "marvin.abisrror@gmail.com", password: "123456" },
  ];

  public get isAuthenticated(): boolean {
    return appSettingsModule.getBoolean(AUTHENTICATED_KEY);
  }

  public set isAuthenticated(value: boolean) {
    appSettingsModule.setBoolean(AUTHENTICATED_KEY, value);
  }

  constructor() {}

  public login(user: AuthUser): Observable<any> {
    const foundUser = this.users.find(
      (u) => u.email === user.email && u.password === user.password
    );

    if (foundUser) {
      this.isAuthenticated = true;
      return of(foundUser);
    }

    return of(null);
  }

  public signUp(user: AuthUser): Observable<any> {
    return of(null);
  }

  public logout(): Observable<any> {
    this.isAuthenticated = false;
    return of(null);
  }
}
