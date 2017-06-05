"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var http_1 = require("nativescript-angular/http");
// used to create fake backend
var index_1 = require("./shared/backend/fake-data/index");
var testing_1 = require("@angular/http/testing");
var http_2 = require("@angular/http");
var index_2 = require("./shared/index");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var home_1 = require("./containers/home");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [
            app_component_1.AppComponent
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            app_routing_1.AppRoutingModule,
            http_1.NativeScriptHttpModule,
            home_1.HomeModule,
        ],
        declarations: [
            app_component_1.AppComponent,
        ],
        providers: [
            index_2.SuburbService,
            index_2.ProductService,
            // providers used to create fake backend
            index_1.FakeBackendProvider,
            testing_1.MockBackend,
            http_2.BaseRequestOptions
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLGtEQUFtRTtBQUVuRSw4QkFBOEI7QUFDOUIsMERBQXVFO0FBQ3ZFLGlEQUFvRDtBQUNwRCxzQ0FBbUQ7QUFHbkQsd0NBQStEO0FBQy9ELDZDQUFpRDtBQUNqRCxpREFBK0M7QUFFL0MsMENBQStDO0FBMkIvQyxJQUFhLFNBQVM7SUFBdEI7SUFBeUIsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUExQixJQUEwQjtBQUFiLFNBQVM7SUF6QnJCLGVBQVEsQ0FBQztRQUNOLFNBQVMsRUFBRTtZQUNQLDRCQUFZO1NBQ2Y7UUFDRCxPQUFPLEVBQUU7WUFDTCx3Q0FBa0I7WUFDbEIsOEJBQWdCO1lBQ2hCLDZCQUFzQjtZQUN0QixpQkFBVTtTQUNiO1FBQ0QsWUFBWSxFQUFFO1lBQ1YsNEJBQVk7U0FDZjtRQUNELFNBQVMsRUFBRTtZQUNQLHFCQUFhO1lBQ2Isc0JBQWM7WUFDZCx3Q0FBd0M7WUFDeEMsMkJBQW1CO1lBQ25CLHFCQUFXO1lBQ1gseUJBQWtCO1NBQ3JCO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsdUJBQWdCO1NBQ25CO0tBQ0osQ0FBQztHQUNXLFNBQVMsQ0FBSTtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcclxuXHJcbi8vIHVzZWQgdG8gY3JlYXRlIGZha2UgYmFja2VuZFxyXG5pbXBvcnQgeyBGYWtlQmFja2VuZFByb3ZpZGVyIH0gZnJvbSAnLi9zaGFyZWQvYmFja2VuZC9mYWtlLWRhdGEvaW5kZXgnO1xyXG5pbXBvcnQgeyBNb2NrQmFja2VuZCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAvdGVzdGluZyc7XHJcbmltcG9ydCB7IEJhc2VSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5cclxuXHJcbmltcG9ydCB7IFByb2R1Y3RTZXJ2aWNlLCBTdWJ1cmJTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvaW5kZXgnO1xyXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgSG9tZU1vZHVsZSB9IGZyb20gXCIuL2NvbnRhaW5lcnMvaG9tZVwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGJvb3RzdHJhcDogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxyXG4gICAgICAgIEhvbWVNb2R1bGUsXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50LFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIFN1YnVyYlNlcnZpY2UsXHJcbiAgICAgICAgUHJvZHVjdFNlcnZpY2UsXHJcbiAgICAgICAgLy8gcHJvdmlkZXJzIHVzZWQgdG8gY3JlYXRlIGZha2UgYmFja2VuZFxyXG4gICAgICAgIEZha2VCYWNrZW5kUHJvdmlkZXIsXHJcbiAgICAgICAgTW9ja0JhY2tlbmQsXHJcbiAgICAgICAgQmFzZVJlcXVlc3RPcHRpb25zXHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cclxuIl19