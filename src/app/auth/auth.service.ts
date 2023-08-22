import { Injectable } from "@angular/core";
import { AuthUser } from "../shared/models/user.model";
import { Observable, of } from "rxjs";

import * as appSettingsModule from "@nativescript/core/application-settings";
import { HttpClient } from "@angular/common/http";
import { Config } from "~/config";

const AUTHENTICATED_KEY = "AUTHENTICATED_KEY";

@Injectable()
export class AuthService {
  public get isAuthenticated(): boolean {
    return appSettingsModule.getBoolean(AUTHENTICATED_KEY);
  }

  public set isAuthenticated(value: boolean) {
    appSettingsModule.setBoolean(AUTHENTICATED_KEY, value);
  }

  constructor(private http: HttpClient) {}

  public login(user: AuthUser): Observable<any> {
    return this.http.post(`${Config.apiUrl}/login`, {
      ...user,
    });
  }

  public signUp(user: AuthUser): Observable<any> {
    return this.http.post(`${Config.apiUrl}/register`, {
      ...user,
    });
  }

  public logout(): Observable<any> {
    this.isAuthenticated = false;
    return of(null);
  }
}
