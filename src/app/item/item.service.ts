import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Item } from "./item";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

const API_URL = "http://localhost:8084/api";

@Injectable({
  providedIn: "root",
})
export class ItemService {
  constructor(private http: HttpClient) {}

  getItems(): Observable<Item[]> {
    return this.http
      .get<{ players: Item[] }>(`${API_URL}/players`)
      .pipe(map((response) => response.players));
  }

  getItem(id: number): Observable<Item> {
    return this.http
      .get<{ player: Item }>(`${API_URL}/players/${id}`)
      .pipe(map((response) => response.player));
  }
}
