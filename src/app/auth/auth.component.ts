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
    console.log("ngOnInit calling...");
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
    console.log("CALLING LOGIN");
    this.authService.login(this.user).then((result) => {
      console.log("result: ", result);
      this.router.navigate(["/items"]);
    });
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
