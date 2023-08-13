import { Component, OnInit } from "@angular/core";
import { AuthUser } from "../shared/models/user.model";

@Component({
  selector: "app-auth",
  moduleId: module.id,
  templateUrl: "auth.component.html",
})
export class AuthComponent implements OnInit {
  public isLoggingIn = true;
  public user: AuthUser = null;

  constructor() {
    this.user = {
      email: "marvin.abisrror@gmail.com",
      password: "123456",
    };
  }

  ngOnInit() {}

  public toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }

  public submit() {
    if (this.isLoggingIn) {
      this.login();
    } else {
      this.signUp();
    }
  }

  private login() {}

  private signUp() {}
}
