import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthComponent } from "./auth/auth.component";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

import { NativeScriptFormsModule } from "@nativescript/angular";
import { NativeScriptHttpClientModule } from "@nativescript/angular";

import { AuthService } from "./auth/auth.service";

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptFormsModule,
    NativeScriptHttpClientModule,
  ],
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemDetailComponent,
    AuthComponent,
  ],
  providers: [AuthService],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
