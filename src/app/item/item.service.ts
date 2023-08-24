import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Item } from "./item";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Config } from "../../config";
import { AuthService } from "../auth/auth.service";

@Injectable({
  providedIn: "root",
})
export class ItemService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getItems(): Observable<Item[]> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http
      .get<{ players: Item[] }>(`${Config.apiUrl}/players`, {
        headers,
      })
      .pipe(map((response) => response.players));
  }

  getItem(id: number): Observable<Item> {
    return this.http
      .get<{ player: Item }>(`${Config.apiUrl}/players/${id}`)
      .pipe(map((response) => response.player));
  }
}
