import { Component, OnInit } from "@angular/core";
import { AuthUser } from "../shared/models/user.model";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-auth",
  moduleId: module.id,
  templateUrl: "auth.component.html",
})
export class AuthComponent implements OnInit {
  public isLoggingIn = true;
  public user: AuthUser = null;

  constructor(private router: Router, public authService: AuthService) {
    this.user = {
      email: "marvin.abisrror@gmail.com",
      password: "123456",
    };
  }

  ngOnInit() {
    if (this.authService.isAuthenticated) {
      this.router.navigate(["/items"]);
    }
  }

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

  private login() {
    this.authService.login(this.user).subscribe(
      (res) => {
        this.router.navigate(["/items"]);
      },
      (error) => {
        alert("Sorry, we could not log you in.");
      }
    );
  }

  private signUp() {
    this.authService.signUp(this.user).subscribe(
      (res) => {
        alert("Your account was successfully created.");
        this.toggleDisplay();
      },
      (error) => {
        alert("Sorry, we could not sing you up.");
      }
    );
  }
}
