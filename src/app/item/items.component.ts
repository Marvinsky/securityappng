import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth/auth.service";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { Router } from "@angular/router";

@Component({
  selector: "ns-items",
  templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
  items: Array<Item>;

  constructor(
    private router: Router,
    public authService: AuthService,
    private itemService: ItemService
  ) {}

  ngOnInit(): void {
    this.itemService.getItems().subscribe((items) => (this.items = items));
  }

  public logout() {
    this.authService.logout().subscribe(
      (res) => {
        this.router.navigate(["/auth"]);
      },
      (error) => {
        alert("Sorry, we could not log you out.");
      }
    );
  }
}
