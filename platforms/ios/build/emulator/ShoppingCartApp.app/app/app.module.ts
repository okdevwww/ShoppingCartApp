import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular/http";

// used to create fake backend
import { FakeBackendProvider } from './shared/backend/fake-data/index';
import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';


import { ProductService, SuburbService } from './shared/index';
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { HomeModule } from "./containers/home";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpModule,
        HomeModule,
    ],
    declarations: [
        AppComponent,
    ],
    providers: [
        SuburbService,
        ProductService,
        // providers used to create fake backend
        FakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
